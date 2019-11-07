<template>
    <div class="shopGoodsContainer">
        <div class="goods" style="display:flex">
            <div class="shopGoods_left">
                <ul>
                    <li v-for="(goods,index) in shopGoods" :key="index" 
                    :class="{current:currentIndex == index}"
                    @click="getCurrentIndex(index)">
                        <div class="goodsItem">
                            <img :src="goods.icon" alt="" v-if="goods.icon">
                            <span>{{goods.name}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="shopGoods_right">
                <ul class="food_list" ref="foodsUl">
                    <li v-for="(shopgoods,index) in shopGoods" :key="index" class="food_list_li">
                        <h1>{{shopgoods.name}}</h1>
                        <ul class="food_list_item">
                            <li v-for="(shopgood,index) in shopgoods.foods" :key="index"
                            @click="showFood(shopgood)">
                                <div class="item_left">
                                    <img :src="shopgood.icon" alt="">
                                    <div class="foodMsg_right">
                                        <span>{{shopgood.name}}</span>
                                        <span class="desc">{{shopgood.description}}</span>
                                        <span class="desc">月售{{shopgood.sellCount}}份&nbsp;&nbsp;好评率{{shopgood.rating}}%</span>
                                        <div class="price">
                                            <span class="new">￥{{shopgood.price}}</span>
                                            <span class="old" v-if="shopgood.oldPrice">￥{{shopgood.oldPrice}}</span>
                                            <zz-cartControl :food="shopgood"></zz-cartControl>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="item_right">
                                    <zz-cartControl></zz-cartControl>
                                </div> -->
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <zz-shopCart></zz-shopCart>
        </div>
        <zz-foodCard ref="food" :food="food"></zz-foodCard>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
    data(){
        return {
            scrollY:0,  //右侧滑动的Y轴坐标（滑动过程实时变化）
            tops:[],  // 所有右侧分类li的top组成的数组（列表第一次显示后无变化）
            food:{}   //需要显示的food
        }
    },
    created(){
        this.getGoods()
    },
    // updated() {
    //     console.log(this.currentIndex)
    // },
    computed:{
        ...mapState({
            shopGoods: state=> state.shop.shopGoods
        }),
        currentIndex(){
            // 得到条件数据
            const {scrollY,tops} = this
            // 根据条件计算产生一个结果
            const index = tops.findIndex((top,index) => {
                // scrollY >= 当前top && scrollY <= 下一个top
                return scrollY>=top && scrollY<tops[index+1]
            }) 
            // 返回结果
            return index
        }
    },
    methods:{
        getGoods(){
            this.$axiosOther({
                method:'GET',
                url:'/goods'
            }).then(res =>{
                if(res.data.code === 0){
                    this.$store.dispatch('getShopGoods',{    //注意：this.$store.dispatch（） 括号里只能传递两个参数，一个方法名，一个对象里包括的一些东西
                        data:res.data.data,
                        callback:() =>{  //数据更新后执行
                            this.$nextTick(() =>{   //数据显示后执行
                                // 列表显示之后创建
                                //初始化scroll滚动条
                                this._initScroll()
                                // 收集tops，写成数组
                                this._initTops()
                                console.log(111)
                            })
                        }
                    })
                }
            })
        },
        //初始化滚动条
        _initScroll(){
            new BScroll('.shopGoods_left',{
                click: true
            })
            this.foodsScroll = new BScroll('.shopGoods_right',{
                probeType: 2,
                click: true
            })
            this.foodsScroll.on('scroll',({x,y}) =>{
                console.log(x,y);
                this.scrollY = Math.abs(y)   // 取正值
            })
            // 滚动结束的监听
            this.foodsScroll.on('scrollEnd',({x,y}) =>{
                console.log('scrollEnd',x,y);
                this.scrollY = Math.abs(y)   // 取正值
            })
        },
        _initTops(){
            // 第一步：初始化top
            const tops= [];
            let top = 0;
            tops.push(top)
            // 第二步 收集，找到所有的分类li
            const lis = this.$refs.foodsUl.getElementsByClassName('food_list_li');
            Array.prototype.slice.call(lis).forEach(li => {
                top += li.scrollHeight
                tops.push(top)
            });
            console.log(lis)
            // 第三步：更新data中的tops数组
            this.tops = tops
            console.log(this.tops)
        },
        // 点击左侧，右侧跟着变化
        getCurrentIndex(index){
            // console.log(index)
            // 根据传过来用户点击的index得到scrollY的值y
            const y= this.tops[index]
            this.scrollY = y
            this.foodsScroll.scrollTo(0,-y,300)
        },
        showFood(shopgood){
            // 设置food
            this.food = shopgood 
            // 显示food组件
            this.$refs.food.toggleShow()
        }
    }
}
</script>

<style lang="stylus">
    .shopGoodsContainer
        display flex
        position absolute
        top 195px
        bottom 54px
        // height 400px
        width 100%
        overflow hidden
        .shopGoods_left
            width 102px
            background #F4F4F8
            ul
                width 102px
                .current
                    color #02a774
                    background #ffffff
                li
                    // display flex
                    // justify-content center
                    // align-items center
                    // padding 20px 0
                    height 54px
                    padding 0 20px
                    display table
                    vertical-align middle
                    .goodsItem
                        // display flex
                        // align-items center
                        // justify-content center
                        display table-cell
                        vertical-align middle
                        width 65px
                        position relative
                        &::after
                                content ''
                                height 1px
                                background-color rgba(7,17,27,0.1)
                                width 100%
                                position absolute
                                bottom 0
                                left 0
                                transform scaleY(0.8)
                        img 
                            width 20px
                            height 20px
                            margin-right 5px
                            vertical-align middle
                        span 
                            font-size 14px
                            vertical-align middle
                            // width 80%
                            // text-align center
                            // border-bottom 1px solid #ccc
                            // padding 20px 0
        .shopGoods_right
            flex 1
            .food_list
                li
                    h1
                        background #f3f5f7
                        font-size 16px
                        height 26px
                        line-height 26px
                        color #93999f
                        border-left 3px solid #d9dde1
                        padding-left 15px
                    .food_list_item
                        li
                            margin 18px
                            padding-bottom 18px
                            border-bottom 1px solid #cccccc
                            display flex
                            justify-content space-between
                            .item_left
                                display flex
                                width 100%
                                img 
                                    width 57px
                                    height 57px
                                    margin-right 10px
                                .foodMsg_right
                                    display flex
                                    flex-direction column
                                    justify-content space-between
                                    width 100%
                                    .desc
                                        font-size 10px
                                        color #93999f
                                        margin 2px 0
                                    .price
                                        display flex
                                        justify-content space-between
                                        .new
                                            color #f01414
                                        .old
                                            color #666
                                            font-size 12px
                                            text-decoration line-through
                            .item_right
                                display flex
                                flex-direction column
                                justify-content flex-end
</style>
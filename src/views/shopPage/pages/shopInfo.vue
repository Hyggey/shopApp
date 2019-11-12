<template>
    <div class="shopInfoContainer">
        <div class="shopInfo">
            <div class="module_msg">
                <h3>配送信息</h3>
                <div class="msg">
                    <span>{{shopInfo.description}}</span>
                    <span>由商家配送提供配送，约{{shopInfo.deliveryTime}}分钟送达，距离{{shopInfo.distance}}</span>
                </div>
                <p>配送费￥{{shopInfo.deliveryPrice}}</p>
            </div>
            <div class="liver"></div>
            <section>
                <h1>活动与服务</h1>
                <div class="activity">
                    <div class="activity_item" v-for="(support,index) in shopInfo.supports" :key="index">
                        <span :class="supportClasses[support.type]">{{support.name}}</span>
                        <span>{{support.content}}</span>
                    </div>
                </div>
            </section>
            <section>
                <h1>商家实景</h1>
                <div class="img-wrapper">
                    <ul ref="imgUl">
                        <li v-for="(item,index) in shopInfo.pics" :key="index">
                            <img :src="item" alt="">
                        </li>
                    </ul>
                </div>
            </section>
             <div class="liver"></div>
             <section>
                 <h1>商家信息</h1>
                 <div class="detail">
                     <div class="detail_item">
                         <span>品类</span>
                         <span>{{shopInfo.category}}</span>
                     </div>
                     <div class="detail_item">
                         <span>商家电话</span>
                         <span>{{shopInfo.phone}}</span>
                     </div>
                     <div class="detail_item">
                         <span>地址</span>
                         <span>{{shopInfo.address}}</span>
                     </div>
                     <div class="detail_item">
                         <span>营业时间</span>
                         <span>{{shopInfo.workTime}}</span>
                     </div>
                 </div>
             </section>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
    data(){
        return {
            supportClasses:['green','red','orange']
        }
    },
    mounted(){
        this.scroll1 = new BScroll('.shopInfoContainer')
        
        //方法二：设置定时器   方法一在152行
        // setTimeout(() =>{
        //     console.log(this.shopInfo,111)
        //     const ul = this.$refs.imgUl;
        //     const liWidth = (120+6)*(this.shopInfo.pics.length)-6;
        //     ul.style.width = liWidth + 'px'
        //     this.scroll2 = new BScroll('.img-wrapper',{
        //         click:true,
        //         scrollX:true   //水平滑动
        //     })
        // },100)
            
        //与方法一联合起来用
        // this.scroll2 = new BScroll('.img-wrapper',{
        //     click:true,
        //     scrollX:true   //水平滑动
        // })

        // 方法三: 90-95,112-118
        // 如果数据还没有, 直接结束
      if(!this.shopInfo.pics) {
        return
      }
      // 数据有了, 可以创建BScroll对象形成滑动
      this._initScroll()
    },
    computed:{
        ...mapState({
            shopInfo:state => state.shop.shopInfo
        })
    },
    methods:{
        _initScroll(){
            const ul = this.$refs.imgUl;
            const liWidth = (120+6)*(this.shopInfo.pics.length)-6;
            ul.style.width = liWidth + 'px'
                this.scroll2 = new BScroll('.img-wrapper',{
                    click:true,
                    scrollX:true   //水平滑动
                })
        }
    },
    watch:{
        shopInfo() {// 刷新流程--> 更新数据
            this.$nextTick(() => {
                this._initScroll()
            })
        }
    }
}
</script>

<style lang="stylus">
    .shopInfoContainer
        position absolute
        top 195px
        bottom 0
        left 0
        overflow hidden
        width 100%
        .shopInfo
            .module_msg
                padding 16px 14px 14px
                .msg
                    margin-top 13px
                    span:first-child
                        background #0097ff
                        color #fff
                        font-size 12px
                        border-radius 4px
                        width 55px
                        display inline-block
                        padding 3px 0
                        text-align center
                    span:last-child 
                        font-size 14px
                        color #666
                p 
                    margin-top 4px
                    font-size 14px
                    color #666
            .liver
                width 100%
                height 16px
                background #f3f5f7
                border-top 1px solid rgba(7,17,27,0.1)
                border-bottom 1px solid rgba(7,17,27,0.1)
            section  
                padding 16px 14px 14px
                .activity
                    margin-top 14px
                    .activity_item
                        margin-bottom 12px
                        font-size 13px
                        color #666
                        span:first-child
                            margin-right 8px
                            color #ffffff
                            padding 1px 5px
                            border-radius 4px
                        .green
                            background #70bc46
                        .red
                            background #f07373
                        .orange
                            background #f1884f
                .img-wrapper
                    margin-top 16px
                    width 100%
                    // width 400px
                    // white-space nowrap
                    overflow hidden
                    ul
                        //方法一：使用原生css撑开ul来实现滑动
                        // display inline-flex
                        display flex
                        white-space nowrap
                        li 
                            width 120px
                            height 90px
                            margin-right 6px
                            border 1px solid #ccc
                            // display inline-block
                            box-sizing border-box
                            img 
                                // width 100%
                                // height 100%
                                width 120px
                                height 90px
                .detail
                    .detail_item
                        color #666
                        font-size 14px
                        display flex
                        justify-content space-between
                        padding 16px 0 12px
                        border-bottom 1px solid #cccccc
                        span:first-child
                            color #333
                            font-weight 700
</style>
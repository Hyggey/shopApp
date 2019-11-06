<template>
    <div class="shopRatingsContainer">
        <div class="shopRatings">
            <div class="ratings_header">
                <div class="header_left">
                    <h2>{{shopInfo.score}}</h2>
                    <p>综合评分</p>
                    <span>高于周边商家99%</span>
                </div>
                <div class="header_right">
                    <p>服务态度<span>{{shopInfo.serviceScore}}</span></p>
                    <p>商品评分<span>{{shopInfo.foodScore}}</span></p>
                    <span>送达时间&nbsp;&nbsp;{{shopInfo.deliveryTime}}分钟</span>
                </div>
            </div>
            <div class="liver"></div>
            <div class="ratings_middle">
                <div class="pleased">
                    <button :class="{active:type==1}" @click="check(1)">全部&nbsp;24</button>
                    <button :class="{active:type==2}" @click="check(2)">满意&nbsp;18</button>
                    <button :class="{active:type==3}" @click="check(3)">不满意&nbsp;6</button>
                </div>
                <zz-checkbox :isChecked.sync="ischecked" text="只看有内容的评价"></zz-checkbox>
                <!-- {{ischecked}}---父组件 -->
            </div>
            <div class="ratings_bottom">
                <ul>
                    <li v-for="(rating,index) in filterShopRatings" :key="index">
                        <img class="avatar" :src="rating.avatar" alt="">
                        <div class="li_right">
                            <div class="li_date">
                                <span>{{rating.username}}</span>
                                <span>{{rating.rateTime}}</span>
                            </div>
                            <!-- 星星 -->
                            <p>{{rating.text}}</p>
                            <div class="recommend">
                                <span class="iconfont" :class="rating.rateType===0?'iconzan':'iconbuzan'"></span>
                                <span class="item" v-for="(item,index) in rating.recommend" :key="index">{{item}}</span>
                            </div>
                        </div>  
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from '@better-scroll/core'
export default {
    data(){
        return {
            type: 1,
            ischecked: false
        }
    },
    created(){
        // this.$nextTick(() =>{
        //     this._initScroll()
        // })
        // this._initScroll()    // 写在mounted中
        this.getRatings()
    },
    computed:{
        ...mapState({
            shopInfo: state => state.shop.shopInfo,
            shopRatings:state => state.shop.ratings
        }),
        filterShopRatings(){
            const {shopRatings} = this

        }
    },
    methods:{
        check(e){
            this.type = e
        },
        // change(){
        //     this.ischecked = !this.ischecked
        // },
        //  与60，61，62 是一起的
        _initScroll(){
            this.scroll = new BScroll('.shopRatingsContainer',{
                click: true
            })
        },
        // 请求接口获取评论数据
        getRatings(){
            this.$axiosOther({
                method:'GET',
                url:'/ratings'
            }).then(res =>{
                if(res.data.code == 0){
                    this.$store.dispatch('getRatings',{
                        data:res.data.data,
                        callBack:() =>{
                            this.$nextTick(() =>{
                                this._initScroll()
                            })
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang="stylus">
    .shopRatingsContainer
        position absolute
        top 195px
        left 0
        bottom 0
        overflow hidden
        width 100%
        .shopRatings
            .ratings_header
                display flex
                padding 18px 0
                .header_left
                    border-right 1px solid rgba(7,17,27,0.1)
                    width 137px
                    text-align center
                    h2
                        font-size 24px
                        color #f90
                        margin-bottom 6px
                    p 
                        font-size 13px
                    span 
                        font-size 13px
                        color #93999f
                .header_right
                    padding-left 24px
                    display flex
                    flex-direction column
                    justify-content space-between
                    flex 1
                    font-size 13px
                    p 
                        span 
                            color #f90
            .liver
                height 16px
                background #f3f5f7
                border-top 1px solid rgba(7,17,27,0.1)
                border-bottom 1px solid rgba(7,17,27,0.1)
            .ratings_middle
                border-bottom 1px solid rgba(7,17,27,0.1)
                .pleased
                    padding 18px 18px
                    button 
                        width 64px
                        height 32px
                        border 0
                        font-size 12px
                        outline none
                        margin-right 6px
                        color #4d555d
                        background rgba(77,85,93,0.2)
                    .active
                        color #ffffff
                        background #02a774
            .ratings_bottom
                padding 0 18px
                ul
                    li
                        display flex
                        position relative
                        padding 18px 0
                        .avatar
                            width 28px
                            height 28px
                            border-radius 50%
                            margin-right 10px
                        .li_right
                            flex 1
                            .li_date
                                display flex
                                justify-content space-between
                            p 
                                font-size 13px
                            .recommend
                                .iconzan
                                    color #f5a100
                                .item
                                    border 1px solid #cccccc
                                    font-size 12px
                                    padding 0 5px
                                    color #93999f
                                    margin-right 8px
                                    display inline-block
                        &:after
                            content ''
                            height 1px
                            width 100%
                            left 0
                            bottom 0
                            background rgba(7,17,27,0.1)
                            position absolute
                            transform scaleY(0.5)

                            
</style>
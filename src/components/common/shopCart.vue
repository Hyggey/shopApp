<template>
    <div class="shopCartContainer">
        <div class="shopCart">
            <div class="content">
                <div class="content_left" @click="showMoney">
                    <div class="logo_wrapper">
                        <div class="logo" :class="{green:totalCount}">
                            <span class="iconfont icongouwuchekong" :class="{green:totalCount}"></span>
                        </div>
                        <div class="number" v-if="totalCount">{{totalCount}}</div>
                    </div>
                    <div class="money">
                        <span>￥{{totalPrice}}</span>
                        <span>另需配送费￥{{shopInfo.deliveryPrice}}元</span>
                    </div>
                </div>
                <div class="content-right" :class="payClass">
                    <span>{{patText}}</span>
                </div>
            </div>
            <div class="shop-list" v-show="listShow">
                <div class="list-header">
                    <h1>购物车</h1>
                    <span>清空</span>
                </div>
                <div class="list-content">
                    <ul>
                        <li v-for="(food,index) in cartFoods" :key="index">
                            <span>{{food.name}}</span>
                            <div class="shopList-right">
                                <span class="red">￥{{food.price}}</span>
                                <zz-cartControl :food="food"></zz-cartControl>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="shop-olerly" v-show="listShow" @click="showMoney"></div>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    data(){
        return {
            isShow:false
        }
    },
    computed:{
        ...mapState({
            shopInfo:state => state.shop.shopInfo,
            cartFoods:state => state.shop.cartFoods
        }),
        ...mapGetters(['totalCount','totalPrice']),
        payClass(){
            const {totalPrice} = this;
            const {minPrice} = this.shopInfo
            return totalPrice>= minPrice? 'enough':'not-enough'
        },
        patText(){
            const {totalPrice} = this;
            const {minPrice} = this.shopInfo
            if(totalPrice === 0){
                return `￥${minPrice}元起送`
            } else if(totalPrice<minPrice){
                return  `还差${minPrice-totalPrice}元起送`
            } else {
                return '去结算'
            }
        },
        listShow(){
            // 如果总数量为0，直接不显示
            if(this.totalCount ===0){
                this.isShow = false
                return false
            }
            return this.isShow
        }
    },
    methods:{
        showMoney(){
            // 只有当数量大于0时才开始切换
            if(this.totalCount>0){
                this.isShow = !this.isShow
            }
        }
    }
}
</script>

<style lang="stylus">
    .shopCartContainer
        .shopCart
            z-index 60
            position fixed
            bottom 0
            left 0
            width 100%
            height 54px
            .content
                background #141d27
                color rgba(255,255,255,0.4)
                display flex
                .content_left
                    display flex
                    flex 1
                    .logo_wrapper
                        margin 0 12px
                        width 56px
                        height 56px
                        box-sizing border-box
                        padding 6px
                        background #141d27
                        border-radius 50%
                        position relative
                        top -10px
                        .logo
                            width 100%
                            height 100%
                            border-radius 50%
                            background #2b343c
                            text-align center
                            line-height 44px
                            .icongouwuchekong
                                font-size 25px
                                color #80858a
                        .number
                            position absolute
                            left 35px
                            top -1px
                            width 22px
                            height 15px
                            border-radius 5px
                            background red
                            text-align center
                            color #fff
                            line-height 15px
                            font-size 13px
                            font-weight 700
                        .green
                            background #02a774
                            color #fff!important
                    .money
                        display flex
                        flex-direction column
                        span:first-child
                            color #ffffff
                            font-weight 700
                        span:last-child
                            font-size 14px
                .content-right
                    width 105px
                    span
                        display block
                        height 100%
                        font-size 14px
                        color #fff
                        line-height 58px
                        text-align center
                .enough
                    background #02a774
                .not-enough
                    background #2b333b
            .shop-list
                z-index -1
                position absolute
                top 0
                left 0
                width 100%
                transform translateY(-100%)
                .list-header
                    height 40px
                    line-height 40px
                    padding 0 18px
                    background #f3f5f7
                    display flex
                    justify-content space-between
                    h1
                        font-size 15px
                    span 
                        font-size 13px
                        color #00a0dc
                .list-content
                    padding 0 18px
                    background #ffffff
                    li
                        padding 12px 0
                        display flex
                        justify-content space-between
                        border-bottom 1px solid rgba(7,17,27,0.1)
                        .shopList-right
                            display flex
                            .red
                                margin-right 10px
                                color #e43a3d
        .shop-olerly
            position fixed
            top 0
            right 0
            left 0
            right 0
            height 100%    
            background rgba(7,17,27,0.6)
            backdrop-filter: blur(10px)
            opacity 1
            z-index 50
</style>
<template>
    <div class="shopCartContainer">
        <div class="shopCart">
            <div class="content">
                <div class="content_left" @click="showMoney">
                    <div class="logo_wrapper">
                        <div class="logo">
                            <span class="iconfont icongouwuchekong"></span>
                        </div>
                        <div class="number">1</div>
                    </div>
                    <div class="money">
                        <span>￥0</span>
                        <span>另需配送费￥4元</span>
                    </div>
                </div>
                <div class="content-right">
                    <span>￥20元起送</span>
                </div>
            </div>
            <div class="shop-list" v-show="isShow">
                <div class="list-header">
                    <h1>购物车</h1>
                    <span>清空</span>
                </div>
                <div class="list-content">
                    <ul>
                        <li>
                            <span>南瓜粥</span>
                            <div class="shopList-right">
                                <span class="red">￥9</span>
                                <zz-cartControl></zz-cartControl>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="shop-olerly" v-show="isShow"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        showMoney(){
            this.isShow = !this.isShow
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
                    background #2b333b
                    span
                        display block
                        height 100%
                        font-size 14px
                        color #fff
                        line-height 58px
                        text-align center
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
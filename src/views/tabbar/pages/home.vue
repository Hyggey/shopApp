<template>
    <div class="homeContainer">
        <!-- 首页头部 -->
        <header>
            <span class="iconfont iconsousuo"></span>
            <span class="text">昌平区北七家宏福里42大道</span>
            <div>
                <span>登录</span>
                <span>|</span>
                <span>注册</span>
            </div>
        </header>
        <!-- 首页轮播区域 -->
        <div class="homeSwiper">
            <div class="swiper_item">
                <div v-for="(item,index) in navList" :key="index" class="goods_item">
                    <img :src="item.src" alt="">
                    <span>{{item.title}}</span>
                </div> 
            </div>
        </div>
        <!-- 首页商家 -->
        <div class="shop">
            <div class="shop_header">
                <span class="iconfont iconcaidan"></span>
                <span>附近商家</span>
            </div>
            <div class="shop_item" v-for="(item,index) in shopList" :key="index">
                <div class="shop_item_left">
                    <img :src="item.src" alt="">
                </div>
                <div class="shop_item_mid">
                    <div>
                        <span class="brand">品牌</span>
                        <span class="brand_title">锄禾日当午，汗滴禾下土</span>
                    </div>
                    <div>
                        <img src="" alt="">
                        <span>月售106单</span>
                    </div>
                    <div>
                        <span>￥20起送/配送费约￥5</span>
                    </div>
                </div>
                <div class="shop_item-right">
                    <span>保准赢</span>
                    <span>蜂鸟配送</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navList:[
                {
                    src: require('../../../../static/homeImages/nav/1.jpg'),
                    title:'甜品饮品'
                },
                {
                    src: require('../../../../static/homeImages/nav/2.jpg'),
                    title:'商超便利'
                },
                {
                    src: require('../../../../static/homeImages/nav/3.jpg'),
                    title:'美食'
                },
                {
                    src: require('../../../../static/homeImages/nav/4.jpg'),
                    title:'简餐'
                },
                {
                    src: require('../../../../static/homeImages/nav/5.jpg'),
                    title:'新店特惠'
                },
                {
                    src: require('../../../../static/homeImages/nav/6.jpg'),
                    title:'准时达'
                },
                {
                    src: require('../../../../static/homeImages/nav/7.jpg'),
                    title:'预定早餐'
                },
                {
                    src: require('../../../../static/homeImages/nav/8.jpg'),
                    title:'土豪推荐'
                },
            ],
            shopList:[
                {
                    src:require('../../../../static/homeImages/shop/1.jpg')
                },
                {
                    src:require('../../../../static/homeImages/shop/2.jpg')
                },
                {
                    src:require('../../../../static/homeImages/shop/3.jpg')
                },
                {
                    src:require('../../../../static/homeImages/shop/4.jpg')
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    header
        display flex
        padding 0 10px
        justify-content space-between
        align-items center
        height 45px
        background #02a774
        color #fff
        .iconsousuo
            font-size 22px
        .text
            font-size 18px
            width 200px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
        div
            font-size 14px
    .homeSwiper
        .swiper_item
            width 100%
            display flex
            flex-wrap wrap
            .goods_item
                width 25%
                display flex
                flex-direction column
                align-items center
                img 
                    width 45px
                    margin-bottom 8px
                span
                    font-size 14px
                    color rgb(97,90,90)
    .shop
        .shop_header
            color rgb(97,90,90)
            display flex
            align-items center
            height 38px
            background #f5f5f5
            margin-bottom 20px
            .iconcaidan
                font-size 20px
                margin-left 10px
                margin-right 5px
        .shop_item
            display flex
            justify-content space-between
            padding 0 8px
            margin-bottom 20px
            .shop_item_left
                img 
                    width 65px
                    height 65px
            .brand
                font-size 14px
                background #F8CC36
                margin-right 5px
                border-radius 2px
            .brand_title
                width 150px;
                font-weight bold
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
            .shop_item_mid
                display flex
                flex-direction column
                justify-content space-between
                & div:nth-child(1)
                    display flex
                & div:nth-child(2)
                    span
                        font-size 10px
                & div:nth-child(3)
                    span
                        font-size 10px 
            .shop_item-right
                display flex
                flex-direction column
                & span:first-child
                    font-size 14px
                    margin-bottom 10px
                & span:last-child
                    color #037C58   
                    font-size 14px 
</style>
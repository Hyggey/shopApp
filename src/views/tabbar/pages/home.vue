<template>
    <div class="homeContainer">
        <!-- 首页头部 -->
        <zz-headerTop title="昌平区北七家宏福里42大道">
            <span class="iconfont iconsousuo" slot="left"></span>
            <div slot="right">
                <span>登录</span>
                <span>|</span>
                <span>注册</span>
            </div>
        </zz-headerTop>
        <!-- 首页轮播区域 -->
        <div class="homeSwiper">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper_item">
                        <div v-for="(item,index) in navList" :key="index" class="goods_item">
                            <img :src="item.src" alt="">
                            <span>{{item.title}}</span>
                        </div> 
                    </div>
                    <div class="swiper-slide swiper_item">
                        <div v-for="(item,index) in navList" :key="index" class="goods_item">
                            <img :src="item.src" alt="">
                            <span>{{item.title}}</span>
                        </div> 
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <!-- 首页商家 -->
        <div class="shop">
            <div class="shop_header">
                <span class="iconfont iconcaidan"></span>
                <span>附近商家</span>
            </div>
            <zz-shopCard v-for="(item,index) in shopList" :key="index" :list="item"></zz-shopCard>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
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
    },
    mounted(){
        var swiper = new Swiper('.swiper-container',{
            loop: true,
            autoplay:{
                delay:3000
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
}
</script>

<style lang="stylus" scoped>
    .homeSwiper
    .swiper-pagination.swiper-pagination-bullets
        bottom 5px
        .swiper_item
            width 100%
            display flex
            flex-wrap wrap
            .goods_item
                width 25%!important
                display flex
                flex-direction column
                align-items center
                img 
                    width 45px
                span
                    font-size 14px
                    color rgb(97,90,90)
                    padding 5px 0 17px 0
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
</style>
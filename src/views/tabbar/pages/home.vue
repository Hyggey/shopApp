<template>
    <div class="homeContainer">
        <!-- 首页头部 -->
        <zz-headerTop :title="address">
            <span class="iconfont iconsousuo" slot="left"></span>
            <div slot="right">
                <span>登录</span>
                <span>|</span>
                <span>注册</span>
            </div>
        </zz-headerTop>
        <!-- 首页轮播区域 -->
        <div class="homeSwiper">
            <div class="swiper-container" v-if="categoriesArr.length">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper_item" v-for="(categories,index) in categoriesArr" :key="index">
                        <div v-for="(category,index) in categories" :key="index" class="goods_item">
                            <img :src="bascImgUrl+category.image_url" alt="">
                            <span>{{category.title}}</span>
                        </div> 
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
            <img src="../../../../static/homeImages/msite_back.svg" alt="" v-else>
        </div>
        <!-- 首页商家 -->
        <div class="shop">
            <div class="shop_header">
                <span class="iconfont iconcaidan"></span>
                <span>附近商家</span>
            </div>
            <div v-if="shopList.length">
                <zz-shopCard v-for="(item,index) in shopList" :key="index" :list="item"></zz-shopCard>
            </div>
            <img src="../../../../static/homeImages/shop_back.svg" v-for="item in 6" alt="" v-else :key="item">
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    data(){
        return {
            bascImgUrl:'https://fuss10.elemecdn.com',
            categoriesArr:[],
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
                // {
                //     src:require('../../../../static/homeImages/shop/1.jpg')
                // },
                // {
                //     src:require('../../../../static/homeImages/shop/2.jpg')
                // },
                // {
                //     src:require('../../../../static/homeImages/shop/3.jpg')
                // },
                // {
                //     src:require('../../../../static/homeImages/shop/4.jpg')
                // }
            ],
            geohash:{
                latitude: 31.83,
                longitude: 117.25
            },
            address:''
        }
    },
    mounted(){
        
    },
    created(){
        this.getHeader()
        this.getSwiper()
        this.getshopList()
    },
    methods:{
        // 获取头部位置信息
        getHeader(){
            this.$axios({
                method:'GET',
                url:'/position/' + this.geohash.latitude+','+this.geohash.longitude,
            }).then(res =>{
                // console.log(res.data)
                this.address = res.data.data.name
            })
        },
        // 获取轮播图数据
        getSwiper(){
            this.$axios({
                method:'GET',
                url:'/index_category'
            }).then(res =>{
                console.log(res.data)
                // this.categoriesArr = res.data.data
                // const arr = [];
                let minArr = []
                res.data.data.forEach(c =>{
                    if(minArr.length === 8){
                        minArr = []
                    }
                    if(minArr.length === 0){
                        this.categoriesArr.push(minArr)
                    }
                    minArr.push(c)
                })
                console.log(this.categoriesArr)
            })
        },
        // 获取商家列表
        getshopList(){
            this.$axios({
                method:'GET',
                // url:'/shops?latitude='+this.geohash.latitude+'&longitude='+this.geohash.longitude,
                url:'/shops',
                params: {
                    latitude:this.geohash.latitud,
                    longitude:this.geohash.longitude
                }
            }).then(res =>{
                console.log(res.data)
                this.shopList = res.data.data
            })
        }
    },
    watch:{
        categoriesArr(value){
            this.$nextTick(() =>{    // 一旦界面更新，立即调用（此条语句写在数据更新之后）
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
            })
        }
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
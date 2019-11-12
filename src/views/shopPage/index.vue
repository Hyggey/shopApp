<template>
    <div class="shopPageContainer">
        <!-- <div> -->
            <zz-shopHeader></zz-shopHeader>
        <!-- </div> -->
        <div class="shopContainer">
            <div class="shopItem">
                <router-link to="/shop/goods" replace :class="{active:$route.fullPath=='/shop/goods'}">点餐</router-link>
            </div>
            <div class="shopItem">
                <router-link to="/shop/ratings" replace :class="{active:$route.fullPath=='/shop/ratings'}">评价</router-link>
            </div>
            <div class="shopItem">
                <router-link to="/shop/info" replace :class="{active:$route.fullPath=='/shop/info'}">详情</router-link>
            </div>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    created(){
        // 第一种方法
        // this.$axiosOther({                       1
        //     method:'GET',                        1
        //     url:'/info'                          1
        // }).then(res =>{                          1
        //     console.log(res.data);               1
        //     this.$store.dispatch('receiveShop',{data:res.data.data,b:1})   1
        // })                                                                 1
        // 第二种方法
        this.getShop({_this:this})      //把vue传递过去              2
    },
    methods:{
        // 第二种方法
        ...mapActions(['getShop'])                         //2
    }
}
</script>

<style lang="stylus">
    .shopPageContainer
        .shopContainer
            display flex
            position relative
            .shopItem
                flex-grow 1
                text-align center
                a
                    text-align center
                    color #999
                    text-decoration none
                    height 25px
                    display inline-block
                .active
                    color #02a774
                    border-bottom 2px solid #02a774
            // 第二种方法,使用router-link-active
            // .shopItem
            //     float left
            //     width: 33.33333%
            //     text-align center
            //     font-size 14px
            //     color rgb(77, 85, 93)
            //     a
            //         display block
            //         position relative
            //         &.router-link-active
            //         color #02a774
            //         &::after
            //             content ''
            //             position absolute
            //             left 50%
            //             bottom 1px
            //             width 35px
            //             height 2px
            //             transform translateX(-50%)
            //             background #02a774
</style>
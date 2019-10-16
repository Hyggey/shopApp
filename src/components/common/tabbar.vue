<template>
    <div class="tabbar_box">
       <div class="tabbar_item" 
            v-for="(item,index) in tabList" :key="index"
            @click="toPath(item.to)"
            :class="{'active': item.to === $route.fullPath}">
            <span class="iconfont" :class="item.icon"></span>
            <span>{{item.text}}</span>   
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            tabList:[
                {
                    icon: 'iconwaimai',
                    text: "外卖",
                    to: '/tabbar/home'
                },
                {
                    icon: 'iconsousuo',
                    text: "搜索",
                    to: '/tabbar/search'
                },
                 {
                    icon: 'icondingdan',
                    text: "订单",
                    to: '/tabbar/order'
                },
                {
                    icon: 'iconwode',
                    text: "我的",
                    to: '/tabbar/profile'
                },               
            ]
        }
    },
    methods:{
        toPath(e){
            this.$router.replace(e)
        }
    }
}
</script>

<style lang="stylus">
        .tabbar_box
            position fixed
            bottom 0
            background #f5f5f5
            width 100%
            display flex
            justify-content space-around
            border-top 1px solid #cccccc
            .tabbar_item
                width 25%
                padding 5px 0
                display flex
                flex-direction column
                align-items center
                &:active
                    opacity .6
                .iconfont
                    font-size 28px
                & span:last-child
                        font-size 14px
            .active{
                color #02a774
            }
</style>
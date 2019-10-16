<template>
    <div>
        <div class="shop_item">
            <div class="shop_item_left">
                <img :src="list.src" alt="">
            </div>
            <div class="shop_item_mid">
                <div>
                    <span class="brand">品牌</span>
                    <span class="brand_title">{{list.name}}</span>
                </div>
                <div>
                    <img src="" alt="">
                    <span>月售{{list.recent_order_num}}单</span>
                </div>
                <div>
                    <span>￥{{list.float_minimum_order_amount}}起送/配送费约￥{{list.float_delivery_fee}}</span>
                </div>
            </div>
            <div class="shop_item-right">
                <ul>
                    <li v-for="(item,index) in list.supports" :key="index">{{item.icon_name}}</li>
                </ul>
                <span>蜂鸟配送</span>
            </div>
        </div>
        <!-- <img src="../../../static/homeImages/shop_back.svg" alt=""> -->
    </div>
</template>

<script>
export default {
    props:{
        list:{
            default(){
                return {
                    src:'',
                    image_path:'',
                    name:'',
                    title:'',
                    recent_order_num:'',
                    float_minimum_order_amount:'',
                    float_delivery_fee:'',
                    supports:[]
                }
            }
        }
    },
    data(){
        return {
            baseImgUrl:'http://cangdu.org:8001/img/'
        }
    }
}
</script>

<style lang="stylus">
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
            ul
                display flex
                justify-content center
                margin-bottom 10px
                li
                    font-size 14px
            & span:first-child
                font-size 14px
                margin-bottom 10px
            & span:last-child
                color #037C58   
                font-size 14px 
</style>
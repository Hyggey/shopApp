<template>
    <div>
        <div class="shop_item">
            <div class="shop_item_left">
                <img :src="list.src" alt="">
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
</template>

<script>
export default {
    props:{
        list:{
            default(){
                return {
                    src:'',
                    title:''
                }
            }
        }
    },
    data(){
        return {
            
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
            & span:first-child
                font-size 14px
                margin-bottom 10px
            & span:last-child
                color #037C58   
                font-size 14px 
</style>
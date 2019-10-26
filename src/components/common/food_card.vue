<template>
    <div class="food_card_container">
        <div class="food_item">
            <div class="food_top">
                <img src="" alt="">
                <span>主、辅料：水、大米、南瓜、冰糖等</span>
            </div>
            <div class="food_bottom">
                <div class="food_bottom_top">
                    <h3>南瓜粥</h3>
                    <span>月售91份，好评率1005</span>
                </div>
                <div class="food_bottom_bottom">
                    <span>￥9</span>
                    <zz-cartControl :food="food"></zz-cartControl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            food:{}
        }
    }
}
</script>

<style lang="stylus">
    .food_card_container
        position fixed
        top 0
        right 0
        left 0
        bottom 0
        background rgba(0,0,0,0.5)
        .food_item
            border-radius 5px
            background #ffffff
            width 80%
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
            .food_bottom
                padding 18px
                .food_bottom_top
                    span 
                        font-size 12px
                        color #93999f
                .food_bottom_bottom
                    display flex
                    justify-content space-between
                    span:nth-child(1)
                        color #e43a3d
</style>
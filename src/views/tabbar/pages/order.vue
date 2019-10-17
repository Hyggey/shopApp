<template>
    <div class="orderContainer">
        <zz-headerTop title="订单列表"></zz-headerTop>
        <div class="imgBox">
            <img src="../../../../static/order/person.png" alt="">
            <span>登录后查看外卖订单</span>
            <button>立即登录</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    header 
        justify-content center !important
    .imgBox 
        width 100%
        position absolute
        top 50%
        transform translateY(-70%)
        img 
            width 100%
        span
            display block
            text-align center
        button
            width 80px
            height 35px
            display block
            margin 0 auto
            background #02a774
            color #fff
            border 0
            border-radius 5px
            outline none
            margin-top 8px
            &:active
                opacity .6
</style>
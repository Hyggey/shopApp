<template>
    <header>
        <slot name="left"></slot>
        <span class="text">{{title}}</span>
        <slot name="right"></slot>
    </header>
</template>

<script>
export default {
    props:{
        title: {
            default(){
                return ''
            }
        }
    }
}
</script>

<style lang="stylus">
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
            text-align center
        div
            font-size 14px
</style>
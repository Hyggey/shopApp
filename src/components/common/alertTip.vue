<template>
    <div class="alertContainer">
        <section>
            <p>
                <span>!</span>
            </p>
            <p>{{tipText}}</p>
            <div @click="closeTip">确认</div>
        </section>
    </div>
</template>

<script>
export default {
    props:{
        tipText:{
            default(){
                return ''
            }
        }
    },
    methods:{
        closeTip(){
            // console.log(111)
            this.$emit('closeTip')
        }
    }
}
</script>

<style lang="stylus" scoped>
    @keyframes tipMove
        0%
            transform: scale(1)
        35%
            transform: scale(.8)
        70%
            transform: scale(1.1)
        100%
            transform: scale(1)
    .alertContainer
        position fixed
        top 0
        bottom 0
        right 0
        left 0
        background rgba(0,0,0,.5)
        section
            animation: tipMove .4s;
            display flex
            flex-direction column
            align-items center
            justify-content space-between
            width 200px
            height 130px
            background #fff
            border-radius 5px
            position relative
            top 50%
            left 50%
            // transform translate(-50%)
            margin-top -65px
            margin-left -100px
            p:first-child
                width 50px
                height 50px
                border 1px solid #e43a3d
                border-radius 50%
                text-align center
                line-height 50px
                margin 10px 0 0 0
                span 
                    font-size 22px
                    color #e43a3d
            div
                height 30px
                width 100%
                background #4cd964
                color #ffffff
                text-align center
                line-height 30px
                border-bottom-left-radius 5px
                border-bottom-right-radius 5px
                &:active
                    opacity .6
</style>
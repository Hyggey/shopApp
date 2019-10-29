<template>
    <div class="cartControl">
        <transition name="move">
            <span class="iconfont iconjianhao" v-if="food.count" @click.stop="updateFoodCount(false)"></span>
        </transition>
        <span class="text" v-if="food.count">{{food.count}}</span>
        <span class="iconfont icon21" @click.stop="updateFoodCount(true)"></span>
    </div>
</template>

<script>
export default {
    props:{
        food:{
            default(){
                return {}
            }
        }
    },
    methods:{
        updateFoodCount(isAdd){
            this.$store.dispatch('updateFoodCount',{isAdd,food:this.food})
        }
    }
}
</script>

<style lang="stylus">
    .cartControl
        .iconfont
            font-size 22px
        .icon21
            color #fff
            background  #02a774
            border-radius 50%
        .iconjianhao
            color #02a774
            &.move-enter-active, &.move-leave-active
                transition all 0.3s
            &.move-enter, &.move-leave-to
                opacity 0
                transform translateX(10px) rotate(180deg) 
        .text
            font-size 17px
</style>
<template>
    <div class="food_card_container" v-if="isShow">
        <div class="food_item">
            <div class="food_top">
                <span @click="toggleShow" class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-1"></span>
                <img :src="food.image" alt="">
                <span class="info">{{food.info}}</span>
            </div>
            <div class="food_bottom">
                <div class="food_bottom_top">
                    <h3>{{food.name}}</h3>
                    <span>月售{{food.sellCount}}份，好评率{{food.rating}}%</span>
                </div>
                <div class="food_bottom_bottom">
                    <span class="red">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                    <zz-cartControl :food="food"></zz-cartControl>
                </div>
            </div>
        </div>
        <div @click="toggleShow" class="over"></div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props:{
        food:{
            default(){
                return {}
            }
        }
    },
    data(){
        return {
            isShow:false
        }
    },
    computed:{
        ...mapState({
            
        })
    },
    methods:{
        toggleShow(){
            this.isShow = !this.isShow
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
        border-radius 5px
        .food_item
            border-radius 5px
            background #ffffff
            width 80%
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
            .food_top
                position relative
                img 
                    width 100%
                .iconchangyongtubiao-xianxingdaochu-zhuanqu-1
                    position absolute
                    top 10px
                    font-size 20px
                    color #fff
                    left 5px
                .info
                    position absolute
                    left 0
                    right 0
                    bottom 10px
                    color #ddd
                    font-size 10px
            .food_bottom
                padding 18px
                .food_bottom_top
                    span 
                        font-size 12px
                        color #93999f
                .food_bottom_bottom
                    display flex
                    justify-content space-between
                    .red
                        color #e43a3d
                    .old
                        color #666
                        text-decoration line-through
        .over
            background rgba(0,0,0,0.5)
            width 100%
            height 100%
</style>
<template>
    <div class="shopHeaderContainer">
        <nav :style='{background:"url("+shop.shopInfo.bgImg+") no-repeat"}'>
            <span @click="$router.push('/tabbar/home')" class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-1"></span>
        </nav>
        <div class="shop_content">
            <img :src="shop.shopInfo.avatar" alt="">
            <div class="content_title" @click="toggleShop">
                <span>品牌</span>
                <h2>{{shop.shopInfo.name}}</h2>
                <i></i>
            </div>
            <div class="shop_message">
                <span>{{shop.shopInfo.score}}</span>
                <span>月售{{shop.shopInfo.sellCount}}单&nbsp;
                    {{shop.shopInfo.description}}&nbsp;约{{shop.shopInfo.deliveryTime}}分钟&nbsp;距离{{shop.shopInfo.distance}}</span>
            </div>
            <div class="shop_notice" v-if="shop.shopInfo.supports">
                <span>{{shop.shopInfo.supports[0].name}}</span>
                <span>{{shop.shopInfo.supports[0].content}}</span>
                <span>{{shop.shopInfo.supports.length}}个优惠</span>
            </div>
        </div>

        <transition name="fade">
            <div class="shopShadow" v-show="shopFlag">
                <section>
                    <div class="section_title">
                        <span>品牌</span>
                        <h2>{{shop.shopInfo.name}}</h2>
                    </div>
                    <ul class="section_content">
                        <li class="section_content_item">
                            <span>{{shop.shopInfo.foodScore}}</span>
                            <span>评分</span>
                        </li>
                        <li class="section_content_item">
                            <span>{{shop.shopInfo.sellCount}}单</span>
                            <span>月售</span>
                        </li>
                        <li class="section_content_item">
                            <span>{{shop.shopInfo.description}}</span>
                            <span>约{{shop.shopInfo.deliveryTime}}分钟</span>
                        </li>
                        <li class="section_content_item">
                            <span>{{shop.shopInfo.deliveryPrice}}元</span>
                            <span>配送费用</span>
                        </li>
                        <li class="section_content_item">
                            <span>{{shop.shopInfo.distance}}</span>
                            <span>距离</span>
                        </li>
                    </ul>
                    <span class="notice">公告</span>
                    <p>{{shop.shopInfo.bulletin}}</p>
                    <span class="iconfont iconcha" @click="toggleShop"></span>
                </section>
            </div>
        </transition>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            shopFlag:false
        }
    },
    methods:{
        toggleShop(){
            this.shopFlag = !this.shopFlag
        }
    },
    computed:{
        ...mapState(['shop'])
    }
}
</script>

<style lang="stylus" scoped>
    .shopHeaderContainer
        position relative
        nav 
            background-size cover!important
            height 50px
            color rgba(0,0,0,0.3)
            .iconchangyongtubiao-xianxingdaochu-zhuanqu-1
                color #fff
                font-size 20px
                line-height 50px
        .shop_content
            position relative
            text-align center
            padding 30px 20px 5px 20px
            img 
                position absolute
                top 0
                left 50%
                width 66px
                height 66px
                transform translate(-50%,-40px)
                box-shadow 0 0 0.4vw 0 rgba(0, 0, 0, .2)
                border-radius 2px
            .content_title
                display flex
                justify-content center
                align-items center
                span
                    font-size 14px
                    background yellow 
                    padding 2px 3px
                    margin-right 10px
                h2
                    font-size 20px
                i 
                    position relative
                    &::after
                        content:''
                        position absolute
                        border-width 6px 0 6px 7px
                        border-style solid
                        border-color transparent transparent transparent rgba(0,0,0,.67)
                        top -3px
                        left 8px
            .shop_message
                font-size 14px    
                color #000
                margin-top 8px
            .shop_notice
                font-size 14px
                width: 78%;
                margin: 0 auto;
                height: 25px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: 1px solid #ccc;
                padding: 0 4px;
                margin-top 4px
                span:nth-child(1)
                    color #ffffff
                    background green
                    border-radius 2px
                    padding 0 2px
                span:nth-child(2)
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    width: 60%;
                span:nth-child(3)
                    position relative
                    padding-right 10px
                    &::after
                        content ''
                        position absolute
                        top 50%
                        transform translateY(-50%)
                        border-style solid 
                        border-width 5px 5px 0
                        border-color rgba(0, 0, 0, .57) transparent transparent transparent
        .shopShadow
            position fixed
            top 0
            right 0
            left 0
            bottom 0
            background rgba(0,0,0,.5)
            z-index 1
            &.fade-enter-active,&.fade-leave-active
                transition opacity .5s
            &.fade-enter,&.fade-leave-to
                opacity 0
            section 
                width 75%
                padding 20px 25px
                background #ffffff
                position relative
                top 50%
                left 50%
                transform translate(-50%,-50%)
                border-radius 5px
                z-index 99
                .section_title
                    display flex
                    justify-content center
                    align-items center
                    span 
                        background #FFDD2D
                        padding 0 2px
                        border-radius 2px
                    h2
                        font-size 22px
                .section_content
                    display flex
                    margin 10px 0
                    li
                        flex-grow 1
                        display flex
                        flex-direction column
                        align-items center
                        span:first-child
                            font-weight bold
                        span:last-child
                            font-size 14px
                            color #666
                .notice
                    text-align center
                    display block
                    margin-bottom 10px
                p
                    font-size 12px
            .iconcha
                position: absolute
                color #fff
                left 50%;
                bottom -42px
                transform translateX(-50%)
                font-size 20px


</style>
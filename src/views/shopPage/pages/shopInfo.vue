<template>
    <div class="shopInfoContainer">
        <div class="shopInfo">
            <div class="module_msg">
                <h3>配送信息</h3>
                <div class="msg">
                    <span>硅谷专送</span>
                    <span>由商家配送提供配送，约28分钟送达，距离1000m</span>
                </div>
                <p>配送费￥4</p>
            </div>
            <div class="liver"></div>
            <section>
                <h1>活动与服务</h1>
                <div class="activity">
                    <div class="activity_item">
                        <span class="green">首单</span>
                        <span>新用户下单立减17元(不与其它活动同享)</span>
                    </div>
                    <div class="activity_item">
                        <span class="red">满减</span>
                        <span>满35减19，满65减35</span>
                    </div>
                    <div class="activity_item">
                        <span class="orange">特价</span>
                        <span>【立减19.5元】欢乐小食餐</span>
                    </div>
                </div>
            </section>
            <section>
                <h1>商家实景</h1>
                <div class="img-wrapper">
                    <ul>
                        <li v-for="(item,index) in 8" :key="index">
                            <img src="" alt="">
                        </li>
                    </ul>
                </div>
            </section>
             <div class="liver"></div>
             <section>
                 <h1>商家信息</h1>
                 <div class="detail">
                     <div class="detail_item">
                         <span>品类</span>
                         <span>包子粥店，简餐</span>
                     </div>
                     <div class="detail_item">
                         <span>商家电话</span>
                         <span>18501083744</span>
                     </div>
                     <div class="detail_item">
                         <span>地址</span>
                         <span>北京市丰台区太平桥44号</span>
                     </div>
                     <div class="detail_item">
                         <span>营业时间</span>
                         <span>09:35-24:00</span>
                     </div>
                 </div>
             </section>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return {

        }
    },
    mounted(){
        new BScroll('.shopInfoContainer')
        new BScroll('.img-wrapper',{
            click:true,
            scrollX:true
        })
    }
}
</script>

<style lang="stylus">
    .shopInfoContainer
        position absolute
        top 195px
        bottom 0
        left 0
        overflow hidden
        width 100%
        .shopInfo
            .module_msg
                padding 16px 14px 14px
                .msg
                    margin-top 13px
                    span:first-child
                        background #0097ff
                        color #fff
                        font-size 12px
                        border-radius 4px
                        width 55px
                        display inline-block
                        padding 3px 0
                        text-align center
                    span:last-child 
                        font-size 14px
                        color #666
                p 
                    margin-top 4px
                    font-size 14px
                    color #666
            .liver
                width 100%
                height 16px
                background #f3f5f7
                border-top 1px solid rgba(7,17,27,0.1)
                border-bottom 1px solid rgba(7,17,27,0.1)
            section  
                padding 16px 14px 14px
                .activity
                    margin-top 14px
                    .activity_item
                        margin-bottom 12px
                        font-size 13px
                        color #666
                        span:first-child
                            margin-right 8px
                            color #ffffff
                            padding 1px 5px
                            border-radius 4px
                        .green
                            background #70bc46
                        .red
                            background #f07373
                        .orange
                            background #f1884f
                .img-wrapper
                    margin-top 16px
                    width 100%
                    // width 400px
                    white-space nowrap
                    overflow hidden
                    ul
                        width 1008px
                        li 
                            width 120px
                            height 90px
                            margin-right 6px
                            border 1px solid #ccc
                            display inline-block
                            box-sizing border-box
                .detail
                    .detail_item
                        color #666
                        font-size 14px
                        display flex
                        justify-content space-between
                        padding 16px 0 12px
                        border-bottom 1px solid #cccccc
                        span:first-child
                            color #333
                            font-weight 700
</style>
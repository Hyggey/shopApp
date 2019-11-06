<template>
    <div class="shopRatingsContainer">
        <div class="shopRatings">
            <div class="ratings_header">
                <div class="header_left">
                    <h2>4.2</h2>
                    <p>综合评分</p>
                    <span>高于周边商家99%</span>
                </div>
                <div class="header_right">
                    <p>服务态度<span>4.1</span></p>
                    <p>商品评分<span>4.3</span></p>
                    <span>送达时间&nbsp;&nbsp;28分钟</span>
                </div>
            </div>
            <div class="liver"></div>
            <div class="ratings_middle">
                <div class="pleased">
                    <button :class="{active:type==1}" @click="check(1)">全部&nbsp;24</button>
                    <button :class="{active:type==2}" @click="check(2)">满意&nbsp;18</button>
                    <button :class="{active:type==3}" @click="check(3)">不满意&nbsp;6</button>
                </div>
                <zz-checkbox :isChecked.sync="ischecked" text="全选"></zz-checkbox>
                {{ischecked}}---父组件
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            type: 1,
            ischecked: false
        }
    },
    methods:{
        check(e){
            this.type = e
        },
        change(){
            this.ischecked = !this.ischecked
        }
    }
}
</script>

<style lang="stylus">
    .shopRatingsContainer
        .shopRatings
            .ratings_header
                display flex
                padding 18px 0
                .header_left
                    border-right 1px solid rgba(7,17,27,0.1)
                    width 137px
                    text-align center
                    h2
                        font-size 24px
                        color #f90
                        margin-bottom 6px
                    p 
                        font-size 13px
                    span 
                        font-size 13px
                        color #93999f
                .header_right
                    padding-left 24px
                    display flex
                    flex-direction column
                    justify-content space-between
                    flex 1
                    font-size 13px
                    p 
                        span 
                            color #f90
            .liver
                height 16px
                background #f3f5f7
                border-top 1px solid rgba(7,17,27,0.1)
                border-bottom 1px solid rgba(7,17,27,0.1)
            .ratings_middle
                .pleased
                    padding 20px 18px
                    button 
                        width 64px
                        height 32px
                        border 0
                        font-size 12px
                        outline none
                        margin-right 6px
                        color #4d555d
                        background rgba(77,85,93,0.2)
                    .active
                        color #ffffff
                        background #02a774
</style>
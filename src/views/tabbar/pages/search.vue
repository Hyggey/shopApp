<template>
    <div class="search-container">
        <zz-headerTop title="搜索"></zz-headerTop>
        <div class="search">
            <input type="text" placeholder="请输入商家或美食名称">
            <button>提交</button>
        </div>
        <!-- 下面这种直接就访问了vuex中的state，不提倡使用 -->
        <!-- {{$store.state.count}} -->
        <!-- {{count}} -->
        <!-- <button @click="add">加1</button> -->
        <section>
            <ul>
                <li>
                    <img src="" alt="">
                    <div class="msg_right">
                        <span>aaa</span>
                        <span>月售650单</span>
                        <span>20元起送/距离1058公里</span>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
// import { mapState,mapMutations } from 'vuex'
export default {
    // computed:{
    //     ...mapState(['count'])
    // },
    // methods:{
    //     ...mapMutations(['increment']),
    //     add(){
    //         this.increment()
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
    header 
        justify-content center!important
    .search
        width 100%
        display flex
        align-items center
        justify-content space-between
        padding 10px
        box-sizing border-box
        margin-top 10px
        input
            height 35px
            background  #f2f2f2
            border 0
            outline none
            padding-left 5px
            width 75%
        input::-webkit-input-placeholder
            color: #757575;
            font-size 14px 
            font-weight 600
        button
            height 35px
            background #02a774
            border 0
            color #ffffff
            width 17%
            outline none
            border-radius 5px
            &:active
                opacity .6
    section
        ul
            li 
                display flex
                padding 10px
                border-bottom 1px solid #e4e4e4
                img 
                    width 55px
                    height 55px
                    margin-right 10px
                .msg_right
                    display flex
                    flex-direction column
                    font-size 13px
                    justify-content space-between
</style>
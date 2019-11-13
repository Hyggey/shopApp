<template>
    <div class="search-container">
        <zz-headerTop title="搜索"></zz-headerTop>
        <div class="search">
            <input type="search" v-model="keyWords" placeholder="请输入商家或美食名称">
            <button @click="search">搜索</button>
        </div>
        <!-- 下面这种直接就访问了vuex中的state，不提倡使用 -->
        <!-- {{$store.state.count}} -->
        <!-- {{count}} -->
        <!-- <button @click="add">加1</button> -->
        <section v-if="!noSearchShops">
            <ul>
                <!-- :to="'/shop?id='+item.id" -->
                <router-link tag="li" :to="{path:'/shop',query:{id:item.id}}" v-for="(item,index) in searchShops" :key="index" v-show="searchShops.length">
                    <img :src="imgBaseUrl+item.image_path" alt="">
                    <div class="msg_right">
                        <span>{{item.name}}</span>
                        <span>月售{{item.month_sales || item.recent_order_num}}单</span>
                        <span>{{item.float_delivery_fee || item.float_minimum_order_amount}}元起送/距离{{item.distance}}公里</span>
                    </div>
                </router-link>
            </ul>
        </section>
        <div v-else class="search_none">很抱歉！无搜索结果</div>
    </div>
</template>

<script>
// import { mapState,mapMutations } from 'vuex'
import {mapState} from 'vuex'
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
    data(){
        return {
            keyWords:'',
            imgBaseUrl: 'http://cangdu.org:8001/img/',
            geohash:{
                latitude: 31.83,
                longitude: 117.25
            },
            noSearchShops:false
        }
    },
    updated(){
        if(this.keyWords===''){
            this.noSearchShops = false
        }
    },
    computed:{
        ...mapState({
            searchShops:state => state.shop.searchShop
        })
    },
    methods:{
        search(){
            const keywords = this.keyWords.trim()
            if(keywords){
                this.$axios({
                    method:'GET',
                    url:'/search_shops',
                    params:{
                        keyword: keywords,
                        geohash: this.geohash.latitude + ',' + this.geohash.longitude
                    }
                }).then(res =>{
                    console.log(res.data)
                    if(res.data.code == 0){
                        this.$store.dispatch('ActionsSearchShop',{data:res.data.data})
                    }
                })
            }
        }
    },
    watch:{
        searchShops(value){
            if(!value.length){
                this.noSearchShops = true
            } else {
                this.noSearchShops = false
            }
        }
    }
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
    .search_none
        text-align center
</style>
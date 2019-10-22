<template>
    <div class="shopGoodsContainer">
        <div class="shopGoods_left">
            <ul>
                <li v-for="(goods,index) in shopGoods" :key="index">
                    <div class="goodsItem">
                        <img :src="goods.icon" alt="" v-if="goods.icon">
                        <span>{{goods.name}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {

        }
    },
    created(){
        this.getGoods()
    },
    computed:{
        ...mapState({
            shopGoods: state=> state.shop.shopGoods
        })
    },
    methods:{
        getGoods(){
            this.$axiosOther({
                method:'GET',
                url:'/goods'
            }).then(res =>{
                this.$store.dispatch('getShopGoods',{data:res.data.data})
            })
        }
    }
}
</script>

<style lang="stylus">
    .shopGoodsContainer
        .shopGoods_left
            width 102px
            ul
                li
                    background #F4F4F8
                    display flex
                    justify-content center
                    align-items center
                    padding 20px 0
                    .goodsItem
                        display flex
                        align-items center
                        img 
                            width 20px
                            height 20px
                        span 
                            font-size 14px
                            // width 80%
                            // text-align center
                            // border-bottom 1px solid #ccc
                            // padding 20px 0
</style>
<template>
    <div class="orderContainer">
        <zz-headerTop title="订单列表"></zz-headerTop>
        <div class="imgBox">
            <img src="../../../../static/order/person.png" alt="">
            <span>登录后查看外卖订单</span>
            <button @click="login('你好',$event)">立即登录</button>
            <select v-model="selected">
                <!-- 内联对象字面量 -->
                <option v-bind:value="{ number: 123 }">123</option>
            </select>
        </div>
    </div>
</template>

<script>
import { log } from 'util'
export default {
    data(){
        return {
            selected:''
        }
    },
    methods:{
        login(message,event){
            console.log(this.selected)
            console.log(message,event);
            this.$router.push('/pickArea')
        }
    }
}
</script>

<style lang="stylus" scoped>
    header 
        justify-content center !important
    .imgBox 
        width 100%
        position absolute
        top 50%
        transform translateY(-70%)
        img 
            width 100%
        span
            display block
            text-align center
        button
            width 80px
            height 35px
            display block
            margin 0 auto
            background #02a774
            color #fff
            border 0
            border-radius 5px
            outline none
            margin-top 8px
            &:active
                opacity .6
</style>
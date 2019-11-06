<template>
    <div>
        <span class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-1" @click="$router.back()"></span>
        <div v-if="user.userInfo.name">
            <h2>{{user.userInfo.name}}</h2>
        </div>
        <div v-else>
            <h2>{{user.userInfo.phone}}</h2>
        </div>

        <div class="checkbox">
            <zz-checkbox :isChecked.sync="ischecked" text="全选"></zz-checkbox>
                {{ischecked}}---父组件
             <p @click="change">改变--父组件方法</p>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            ischecked: true
        }
    },
    methods:{
        change(){
            this.ischecked = !this.ischecked
        }
    },
    computed:{
        ...mapState(['user'])
    }
}
</script>

<style lang="stylus">
    .iconfont
        font-size 22px
    h2
        text-align center
</style>
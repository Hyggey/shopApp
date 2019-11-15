<template>
    <div class="pickAreaContainer">
        <span @click="$router.back()" class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-1"></span>
        <div class="btn">
            <button @click="confirmAddress">请选择地址</button>
        </div>
        <zz-pickerAddress></zz-pickerAddress>
    </div>
</template>

<script>
export default {
    da(){
        return {

        }
    },
    methods:{
        confirmAddress(){
            console.log(this.address)
        },
    }
}
</script>

<style lang="stylus" scoped>
    .pickAreaContainer
        .iconchangyongtubiao-xianxingdaochu-zhuanqu-1
            font-size 22px
            margin 15px 0 0 10px
            display block
        .btn
            text-align center
            margin-top 70px
            button 
                width 100px
                height 40px
                border 0
                outline none 
                color #ffffff
                border-radius 4px
                background #e43a3d
                &:active
                    opacity .6
</style>
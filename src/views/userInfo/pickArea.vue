<template>
    <div class="pickAreaContainer">
        <span @click="$router.back()" class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-1"></span>
        <div class="btn">
            <button @click="confirmAddress">请选择地址</button>
        </div>
        <mt-popup  v-model="popupVisible" position="bottom">
            <zz-pickerAddress @cancel="cancel" :id="pickId" @getAddress="change"></zz-pickerAddress>
        </mt-popup>
        <div style="display:flex;justify-content:space-between">
            <!-- 三级联动 -->
            <zz-pickerAddress-Ele :defaultAddress="ElementId" @changeArea="ElementChange"></zz-pickerAddress-Ele>
            <!-- 二级联动 -->
            <zz-pickerAddress-Ele :type=2 :defaultAddress="ElementId2" @changeArea="ElementChange"></zz-pickerAddress-Ele>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pickId:{
                province_id: 38,
                city_id: 62,
                county_id: 73
            },
            ElementId:{
                province_id: 38,
                city_id: 62,
                county_id: 73  // 二级联动需要删除
            },
            ElementId2:{
                province_id: 38,
                city_id: 62,
            },
            popupVisible: false,
        }
    },
    methods:{
        confirmAddress(){
            this.popupVisible = true
        },
        // mint-ui
        change(e){
            console.log(e);
            this.popupVisible = false
        },
        cancel(){
            this.popupVisible = false
        },

        // element-ui
        ElementChange(e){
            console.log(e)
        }
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
            margin 70px 0 20px
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
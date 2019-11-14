<template>
    <div class="pickAreaContainer">
        <span @click="$router.back()" class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-1"></span>
        <div class="btn">
            <button @click="confirmAddress">请选择地址</button>
        </div>
        <mt-picker :showToolbar="true" :slots="slots" @change="onValuesChange">
            <span></span>
        </mt-picker>
    </div>
</template>

<script>
import areaData from './areaData.js'
export default {
    data() {
        return {
            address:[],
            slots: [
                {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot1',
                    // textAlign: 'right'
                    defaultIndex: 2
                }, 
                {
                    divider: true,
                    // content: '-',
                    className: 'slot2',
                }, 
                {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot3',
                    // textAlign: 'left'
                    defaultIndex: 1
                },
                {
                    flex: 1,
                    values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                    className: 'slot4',
                    // textAlign: 'left'
                    defaultIndex: 2
                }
            ]
        };
    },
    methods: {
        onValuesChange(picker, values) {
            console.log(picker,values)
            this.address = values
            if (values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
        },
        confirmAddress(){
            console.log(this.address)
        },
        getAreaData(){
            let addressData= areaData.helloyouluckypeople.province;
            
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
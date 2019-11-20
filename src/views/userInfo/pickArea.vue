<template>
    <div class="pickAreaContainer">
        <span @click="$router.back()" class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-1"></span>
        <div class="btn">
            <button @click="confirmAddress">请选择地址</button>
        </div>
        <mt-popup
            v-model="popupVisible"
            position="bottom">
            <zz-pickerAddress @cancel="cancel" :id="pickId" @getAddress="change"></zz-pickerAddress>
        </mt-popup>

        <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange">
        </el-cascader>

    </div>
</template>

<script>
import areaData_Ele from '../../components/common/areaData.js'
export default {
    data(){
        return {
            pickId:{
                province_id: 38,
                city_id: 62,
                county_id: 73
            },
            popupVisible: false,
            value:[],
            options: [{
                value: 'zhinan',
                label: '指南',
                children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [{
                        value: 'yizhi',
                        label: '一致'
                        }, {
                        value: 'fankui',
                        label: '反馈'
                        }]
                }, {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                        }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                        }]
                }]
                }, {
                value: 'zujian',
                label: '组件',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                        value: 'layout',
                        label: 'Layout 布局'
                        }, {
                        value: 'color',
                        label: 'Color 色彩'
                        }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                        value: 'radio',
                        label: 'Radio 单选框'
                        }, {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                        }, {
                        value: 'input',
                        label: 'Input 输入框'
                        }]
                }]
                }, {
                value: 'ziyuan',
                label: '资源',
                children: [{
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: '组件交互文档'
                }]
            }],
        }
    },
    created(){
        this.handleAreaData()
    },
    methods:{
        confirmAddress(){
            this.popupVisible = true
        },
        change(e){
            console.log(e);
            this.popupVisible = false
        },
        cancel(){
            this.popupVisible = false
        },
        // element-ui之选择地址
        handleChange(value) {
            console.log(value);
        },
        // 处理数据
        handleAreaData(){
            console.log(areaData_Ele)
            const a = JSON.stringify(areaData_Ele.helloyouluckypeople.province)
            var b = a.replace(/name/g,"label").replace(/city|county/g,"children").replace(/id/g,"value");
            var c= JSON.parse(b)
            c.map(item => {
                if(!Array.isArray(item.children)){
                    item.children = [item.children]
                }
                item.children.map(item2 =>{
                    if(!Array.isArray(item2.children)){
                        item2.children = [item2.children]
                    }
                })
            })
            console.log(c)
            // var c = eval(b)
            this.options = c
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
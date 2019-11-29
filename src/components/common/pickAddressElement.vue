<template>
    <div>
        <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange">
        </el-cascader>
    </div>
</template>

<script>
import areaData_Ele from './areaData.js'
export default {
    props:{
        defaultAddress:{
            default(){
                return {
                    province_id:'',
                    city_id:'',
                    county_id:''
                }
            }
        },
        type:{
            default(){
                return 1
            }
        }
    },
    data(){
        return {
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
        this.handleAreaData();
        // 第一种方法赋值
        // this.value[0] = this.defaultAddress.province_id+''
        // this.value[1] = this.defaultAddress.city_id+''
        // this.value[2] = this.defaultAddress.county_id+''
        // 第二种方法,遍历将每一个都变成字符串
        this.handleDefalutData()
    },
    methods:{
        // element-ui之选择地址
        handleChange(value) {
            this.$emit('changeArea',value)
            // console.log(value);
        },
        // 处理数据
        handleAreaData(){
            const a = JSON.stringify(areaData_Ele.helloyouluckypeople.province)
            // 需要先转化为字符串，因为字符串才能使用正则的方法
            var b = a.replace(/name/g,"label").replace(/city|county/g,"children").replace(/id/g,"value");
            var c= JSON.parse(b)
            // 遍历需要转化为数组
            // 与下面的一样，为什么，map太难了
            // const d = c.map(item => {
            //     if(!Array.isArray(item.children)){
            //         item.children = [item.children]
            //     }
            //     item.children.map(item2 =>{
            //         if(!Array.isArray(item2.children)){
            //             item2.children = [item2.children]
            //         }
            //     })
            //     return item
            // })

            c.map(item => {
                if(!Array.isArray(item.children)){
                    item.children = [item.children]
                }
                item.children.map(item2 =>{
                    if(!Array.isArray(item2.children)){
                        item2.children = [item2.children]
                    }
                    if(this.type == 2){
                        delete item2.children
                    }
                })
            })
            console.log(c)
            // var c = eval(b)
            this.options = c
        },
        // 处理默认数据
        handleDefalutData(){
            const a = Object.values(this.defaultAddress);
            // 转化为数组字符串，第一种方法用forEach
            // var b=[];
            // a.forEach(item =>{
            //     b.push(item+'')
            // })
            // 第二种方法 map
            const b = a.map(item => item+'')
            console.log(b)
            this.value = b
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
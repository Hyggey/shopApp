<template>
    <div class="pickAreaContainer">
        <!-- <span @click="$router.back()" class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-1"></span>
        <div class="btn">
            <button @click="confirmAddress">请选择地址</button>
        </div> -->
        <mt-picker :showToolbar="true" valueKey="name" :slots="slots" @change="onValuesChange">
            <span></span>
        </mt-picker>
    </div>
</template>

<script>
import areaData from './areaData.js'
export default {
    props:{
        id:{
            default(){
                return {
                    province_id:'',
                    city_id:'',
                    county_id:''
                }
            }
        }
    },
    data() {
        return {
            address:[],  //总地址
            Province:[],
            City:[],
            County:[],
            slots: [
                {
                    flex: 1,
                    values: this._getProvince(),
                    className: 'slot1',
                    // textAlign: 'right'
                    defaultIndex: 0
                }, 
                {
                    divider: true,
                    // content: '-',
                    className: 'slot2',
                }, 
                {
                    flex: 1,
                    values: this._getCity('北京市'),
                    className: 'slot3',
                    // textAlign: 'left'
                    defaultIndex: 0
                },
                {
                    flex: 1,
                    values: this._getArea('北京市','北京市'),
                    className: 'slot4',
                    // textAlign: 'left'
                    defaultIndex: 0
                }
            ]
        };
    },
    mounted(){
        // this.getAreaData()
        // this._getCity()
    },
    methods: {
        onValuesChange(picker, values) {
            console.log(values[0].name)
            picker.setSlotValues(1,this._getCity(values[0].name))
            console.log(picker,values)
            picker.setSlotValues(2,this._getArea(values[0].name,values[1].name))
            this.address = values
            if (values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }

            // 省市区数据处理第二种方法
            // picker.setSlotValues(0,this.Province)
            // picker.setSlotValues(1,this.City)
        },
        // 被注释掉了
        // confirmAddress(){
        //     console.log(this.address)
        // },
        // 这个可不要
        getAreaData(){
            let addressData= areaData.helloyouluckypeople.province;
            let province, city, county,province_name=[],city_name=[];
            // 循环找出省份，包括id，code
            addressData.forEach(item =>{
                province = {
                    value: item.name,
                    code: item.code,
                    id: item.id
                }
                console.log(province)
            })
            //循环找出第一个数组，全是省份
            addressData.forEach(item =>{
                    province_name.push(item.name);
                    if(!Array.isArray(item.city)){
                        item.city = [item.city]
                    }
                    city_name.push(item.city)
                })
            console.log(province_name)
            console.log(city_name)
            this.slots[0].values = province_name;
            // this.City = city_name
        },
        //得到省份数据
        _getProvince(){
            let province=[]
            areaData.helloyouluckypeople.province.forEach(function(item,index){
                let obj={}
                obj.id=item.id
                obj.name=item.name
                province.push(obj)
            })
            return province
        },
        //根据省份得到城市数据
        _getCity(province){
            let city=[]
            areaData.helloyouluckypeople.province.forEach((item,index)=>{
                if(item.name === province){
                    // 处理 将 对象变为数组
					// 例如 只有一个市级的省份 城市数据就会为对象 无法遍历获取数据
                    if(!Array.isArray(item.city)){
                        item.city = [item.city]
                    }
                    item.city.forEach((item,index)=>{
                        let obj={};
                        obj.id=item.id
                        obj.name=item.name
                        city.push(obj)
                        // return
                    })
                }
            })
            return city
        },
        //根据城市和省份得到区域数据
        _getArea(province,city){
        let area=[]
        areaData.helloyouluckypeople.province.forEach((item,index)=>{
            if(item.name === province){
                if(!Array.isArray(item.city)){
                    item.city = [item.city]
                }
                item.city.forEach((item,index)=>{
                    if(item.name === city){
                        if(!Array.isArray(item.county)){
                            item.county = [item.county]
                        }
                        item.county.forEach((item)=>{
                            let obj={}
                            obj.id=item.id
                            obj.name=item.name
                            area.push(obj)
                        })
                        console.log(area)
                    }
                })
            }
        })
        //   if(area.length==0){ //如果没有区域数据则第三个picker显示的内容
        //     area.push({
        //       name:'没有',
        //       id:'000000'
        //     })
        //   }
        return area
        }
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
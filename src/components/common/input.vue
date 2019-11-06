<template>
    <div class="checkboxContainer">
        <label class="label" :for="id">
            <span class="iconfont icongou" v-if="isShow"></span>
            <input type="checkbox" :id="id"  v-model="checkboxVal" style="display:none">
        </label>
        <label :for="id">
            {{text}}
        </label>
    </div>
</template>

<script>
export default {
    props:{
        isChecked:{
            type:Boolean,
            default(){
                return false
            }
        },
        text:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            isShow:false,
            id:123
        }
    },
    computed:{
        checkboxVal:{
            set(newVal,oldVal){
                // console.log(oldVal,newVal)
                this.isShow = newVal;
                this.$emit('update:isChecked',newVal)
            },
            // 设置初始默认值，必须写，不然父组件无法修改子组件的值
            get(){
                this.isShow = this.isChecked
                return this.isChecked
            }
        }
    }
}
</script>

<style lang="stylus">
    .checkboxContainer
        .label
            border 1px solid #000
            width 23px
            height 23px
            display block
            border-radius 50%
            .icongou
                color #e43a3d
                font-size 24px
</style>
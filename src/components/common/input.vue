<template>
    <div class="checkboxContainer">
        <label class="label" :for="id">
            <span class="iconfont icongou" :class="[isShow?'red':'black']"></span>
            <input type="checkbox" :id="id"  v-model="checkboxVal" style="display:none">
        </label>
        <label class="text" :for="id">
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
            isShow: false,
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
                // return true    //这个是不在父组件里使用，只使用一次，可以直接return，并且input和圈的初始值都为true
            }
        }
    }
}
</script>

<style lang="stylus">
    .checkboxContainer
        display flex
        padding 12px 18px
        .label
            // border 1px solid #000
            width 23px
            height 23px
            display block
            border-radius 50%
            .icongou
                
                font-size 24px
            .red
                color #02a774
            .black
                color rgba(77,85,93,0.2)
        .text
            margin-left 5px
            font-size 12px
            line-height 26px
</style>
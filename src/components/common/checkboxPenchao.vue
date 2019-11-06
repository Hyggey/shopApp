<template>
    <div class="md-checkbox">
        <label :for="ID" class="label">
            <div class="checked" v-if="isShow">
                <span class="iconfont icon-gou"></span>
            </div>
            <input type="checkbox" :id="ID" v-model="checkboxVal">
        </label>
        <label :for="ID" class="text">
            {{value}}
        </label>
    </div>
</template>
    
<script>
export default {
    props: {
        isChecked: {
            type:Boolean,
            default: false
        },
        value: {
            typw: String,
            default: ''
        }
    },
    data() {
        return {
            isShow: false,
            ID:'md-checkbox',
        }
    },
    created(){
        this.ID += this.$fun.randomNum(10);
    },
    computed: {
        checkboxVal: {
            set(newVal, oldVal){
                this.isShow = newVal;
                this.$emit('update:isChecked', newVal)
            },
            get(){
                this.isShow = this.isChecked;
                return this.isChecked
            }
        }
    },
}
</script>
    
<style lang='less' scoped>
    @color: #ff6743;
    .md-checkbox{
        display: flex;
        align-items: center;
        input{
            display: none;
        }
        .text{
            font-size: 0.8rem;
            color: #333;
            padding: 0 0.25rem;
        }
        .label{
            width: 1rem;
            height: 1rem;
            display: block;
            border-radius: 50%;
            box-shadow: 0 0 2px #666;
            background: #fff;
            overflow: hidden;
            .checked{
                width: 100%;
                height: 100%;
                display: flex;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                background: @color;
                .iconfont{
                    font-size: 0.5rem;
                    color: #fff;
                }
            }
            
        }

    }
</style>

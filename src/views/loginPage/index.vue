<template>
    <div class="loginContainer">
        <span class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-1" @click="$router.back()"></span>
        <h2>硅谷外卖</h2>
        <div class="login-header">
            <span :class="{on:loginFlag}" @click="loginFlag = true">短信登录</span>
            <span :class="{on:!loginFlag}" @click="loginFlag = false">密码登录</span>
        </div>
        <div class="login-content">
            <form>
                <div :class="{on:!loginFlag}">
                    <div class="loginitem phone">
                        <input type="text" placeholder="手机号">
                        <button>获取验证码</button>
                    </div>
                    <div class="loginitem verify">
                        <input type="text" placeholder="验证码">
                    </div>
                    <section>
                        <span>温馨提示：未注册硅谷外卖账号的手机号，
                            登录时请将自动注册，且代表已同意
                            <span class="green">《用户服务协议》</span>
                        </span>
                    </section>
                </div>
                <div :class="{on:loginFlag}">
                    <div class="loginitem phone">
                        <input type="text" placeholder="手机/邮箱/用户名">
                    </div>
                    <div class="loginitem phone">
                        <input type="text" placeholder="密码">
                    </div>
                    <div class="loginitem phone">
                        <input type="text" placeholder="验证码">
                    </div>
                </div>
                <button class="loginbtn">登录</button>
                <p>关于我们</p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loginFlag: true
        }
    },
    created(){
        this.$axios({
            method:'get',
            url:'hello'
        }).then(res =>{
            console.log(res.data)
        })
    },
    methods:{
        
    }
}
</script>

<style lang="stylus" scoped>
    .loginContainer
        padding 5px 10px 0
        .iconchangyongtubiao-xianxingdaochu-zhuanqu-1
            font-size 22px
            color #666
        h2
            color #02a774
            font-weight bold
            font-size 40px
            text-align center
            padding-top 38px
        .login-header
            text-align center
            margin-top 40px
            span 
                font-size 14px
                color #333
                padding-bottom 4px
            span:first-child
                margin-right 40px
            .on
                border-bottom 2px solid #02a774
                color #02a774
        .login-content
            width 80%
            margin 16px auto 0
            .on
                display none
            form
                .loginitem
                    height 48px
                    margin-bottom 16px
                    input 
                        height 100%
                        width 100%
                        border 1px solid #dddddd
                        outline none 
                        font-size 14px
                        border-radius 4px
                        padding-left 5px
                        box-sizing border-box
                        &:focus
                            border 1px solid #02a774
                    button
                        position absolute
                        border 0
                        background #fff
                        color #cccccc
                        right 10px
                        top 50%
                        transform translateY(-50%)
                        font-size 14px
                        outline none
                        &:active
                            opacity .6
                .phone
                    position relative
                section 
                    span 
                        font-size 14px
                        color #999
                        line-height 20px
                    .green
                        color #02a774
                        font-weight bold
            .loginbtn
                width 100%
                border 0
                color #ffffff
                background #02a774
                border-radius 5px
                height 40px
                margin 16px 0
                outline none
                &:active
                    opacity .6
            p
                text-align center
                font-size 14px
                color #999


</style>
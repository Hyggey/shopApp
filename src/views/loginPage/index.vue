<template>
    <div class="loginContainer">
        <span class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-1" @click="$router.back()"></span>
        <h2>硅谷外卖</h2>
        <div class="login-header">
            <span :class="{on:loginFlag}" @click="loginFlag = true">短信登录</span>
            <span :class="{on:!loginFlag}" @click="loginFlag = false">密码登录</span>
        </div>
        <div class="login-content">
            <form @submit.prevent="login">
                <div :class="{on:!loginFlag}">
                    <div class="loginitem phone">
                        <input type="text" placeholder="手机号" v-model="phone">
                        <button :disabled="!rightPhone || computedTime>0" :class="{right_phone:rightPhone}" @click.prevent="getCode">
                            {{computedTime>0?`剩余${computedTime}s`:'获取验证码'}}
                        </button>
                    </div>
                    <div class="loginitem verify">
                        <input type="text" placeholder="验证码" v-model="verifyCode">
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
                        <input type="text" placeholder="手机/邮箱/用户名" v-model="name">
                    </div>
                    <div class="loginitem phone">
                        <input type="text" placeholder="密码" v-if="showPwd" v-model="pwd">
                        <input type="password" placeholder="密码" v-else v-model="pwd">
                        <div class="switch_button" :class="{flagon:showPwd}" @click="showPwd=!showPwd">
                            <div class="switch_circle" :class="{right:showPwd}"></div>
                            <span :class="{switch_text:!showPwd}">{{showPwd?'abc':'...'}}</span>
                        </div>
                    </div>
                    <div class="loginitem imgCode">
                        <input type="text" placeholder="图片验证码" v-model="captcha">
                        <!-- 方法一 -->
                        <!-- <img src="http://localhost:4000/captcha" alt="" @click="getCaptcha"> -->
                        <!-- 方法二以vue的方式 -->
                        <img :src="newImg" alt="" @click="getCaptcha">
                    </div>
                </div>
                <button class="loginbtn">登录</button>
                <p>关于我们</p>
            </form>
        </div>
        <zz-alertTip :tipText="tipText" v-show="tipFlag" @closeTip="closeTip"></zz-alertTip>
    </div>
</template>

<script>
// import { userInfo } from 'os';
// import { userInfo } from 'os';
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            loginFlag: true,
            phone:'',   //手机号
            computedTime: 0,
            showPwd: false,
            verifyCode:'',  //短信验证码
            name:"",   //用户名，邮箱，手机号
            captcha:"",
            tipText:'',
            tipFlag: false,
            pwd:'',
            newImg:''  //图片验证码的svg地址
        }
    },
    created(){
        // this.$axios({
        //     method:'GET',
        //     url:'/index_category'
        // }).then(res =>{
        //     console.log(res.data)
        // })
        this.getCaptcha()
    },
    methods:{
        getCode(){
            console.log(111)
            // 如果当前没有计时    !this.computedTime 与 this.computedTime == 0 效果相同   意思就是当判断条件为啥啥等于0 就等于这个啥啥取非
            if(!this.computedTime){
                this.computedTime = 30;
                const cloak = setInterval(() =>{
                    this.computedTime--;
                    if(this.computedTime<=0){
                        clearInterval(cloak)
                    }
                },1000)
                // 发送ajax请求
                this.$axios({
                    method:'get',
                    url:'/sendcode',
                    params:{
                        phone: this.phone
                    }
                }).then(res =>{
                    console.log(res.data)
                    if(res.data.code == 1){
                        this.tipFlag = true;
                        this.tipText = res.data.msg;
                        this.computedTime = 0
                        clearInterval(cloak);
                    }
                })
            }
        },
        showTip(tip){
            this.tipFlag = true;
            this.tipText = tip
        },
        // 第一点：这里用了async function() await    （await 用一个变量来接收）
        // 第二点：用了解构赋值
        // 第三点：合并了代码  其中注释部分都合并了，合并时用了 一个let result; 然后后面 用不同的result来分别接收返回的结果
        async login(){
            let result
            if(this.loginFlag){   //短信登录
                const {rightPhone,phone,verifyCode} = this
                if(!this.rightPhone) {
                    // 提示手机号不正确
                    this.showTip('请输入正确的手机号')
                } else if(!/^\d{6}$/.test(verifyCode)){
                    // 验证必须是6位数字
                    this.showTip('验证必须是6位数字')
                } else{
                    // 发送ajax请求
                    // this.$axios({
                    //     method:'POST',
                    //     url:'/login_sms',
                    //     data:{
                    //         phone:this.phone,
                    //         code: this.verifyCode
                    //     }
                    // }).then(res =>{
                    //     if(res.data.code == 0){
                    //         this.$router.replace('/tabbar/profile')
                    //     }else{
                    //         this.showTip(res.data.msg)
                    //     }
                    // })
                    result = await this.$axios({
                        method:'POST',
                        url:'/login_sms',
                        data:{
                            phone:this.phone,
                            code:this.verifyCode
                        }
                    })
                    console.log(result)
                    // if(result.data.code == 0){
                    //     this.$router.replace('/tabbar/profile')
                    // } else{
                    //     this.showTip(result.data.msg)
                    // }
                }
            } else {  //密码登录
                const {name,pwd,captcha}  = this
                if(!this.name){
                    // 用户名必须指定
                    this.showTip('用户名不能为空')
                } else if(!this.pwd){
                    //密码必须指定
                    this.showTip('密码不能为空')
                } else if(!this.captcha){
                    //图像验证码不能为空
                    this.showTip('图形验证码不能为空')
                } else{
                    result = await this.$axios({
                        method:'POST',
                        url:'/login_pwd',
                        data:{
                            name:this.name,
                            pwd: this.pwd,
                            captcha: this.captcha
                        }
                    })
                    console.log(result)
                }
            }
            // 判断result一定存在，因为如果没走axios，result就不存在，为undefined
            if(result){
                if(result.data.code == 0){
                // 将用户数据传入vuex
                // 方式一  （就下面这一句话）
                // this.$store.dispatch('recordUser',result.data.data)
                // 方式二  56，199，193
                this.recordUser(result.data.data)
                this.$router.replace('/tabbar/profile')
                } else{
                    this.showTip(result.data.msg)
                    this.getCaptcha()
                }
            }
        },
        ...mapActions(['recordUser']),
        closeTip(){
            this.tipFlag = false;
            this.tipText = ''
        },
        // 获取图片验证码
        // 方法一
        // getCaptcha(e){
        //     e.target.src = 'http://localhost:4000/captcha?time='+Date.now()
        // }
        // 方法二
        getCaptcha(){
            this.newImg = 'http://localhost:4000/captcha?time'+new Date().getTime()
        }
    },
    computed:{
        rightPhone(){
            return /^1[3456789]\d{9}$/.test(this.phone)
        }
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
                    .right_phone
                        color #000
                .phone
                    position relative
                    .flagon
                        background #02a774
                    .switch_button
                        color #ffffff
                        font-size 12px
                        position absolute
                        top 50%
                        transform translateY(-50%)
                        right 10px
                        width 30px
                        height 16px
                        border 1px solid #dddddd
                        line-height 16px
                        border-radius 8px
                        padding 0 6px
                        .switch_circle
                            left -1px
                            top -1px
                            position absolute
                            background #fff
                            width 16px
                            height 16px
                            border-radius 50%
                            border 1px solid #ddd
                            transition 0.3s all ease
                        .right
                            transform translateX(28px)
                        .switch_text
                            color #dddddd
                            float right
                .imgCode
                    position relative
                    img 
                        position absolute
                        top 50%
                        right 0
                        transform translateY(-50%)
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
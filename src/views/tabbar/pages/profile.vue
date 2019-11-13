<template>
    <div class="profileContainer">
        <zz-headerTop title="我的"></zz-headerTop>
        <div class="login" @click="toLogin">
            <div class="login_main">
                <div class="userInfo">
                    <span class="iconfont iconicontouxiang"></span>
                    <div class="msg">
                        <div class="msg_top">
                            <span v-if="!user.userInfo.phone">{{user.userInfo.name?user.userInfo.name:'登录/注册'}}</span>
                        </div>
                        <div class="msg_bottom">
                            <span class="iconfont iconiconset0227"></span>
                            <span>{{user.userInfo.phone?user.userInfo.phone:'暂无绑定手机号'}}</span>
                        </div>
                    </div>
                </div>
                <span class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></span>
            </div>
        </div>
        <div class="money">
            <div class="money-item">
                <span><span class="text yellow">0.00</span>元</span>
                <span>我的余额</span>
            </div>
            <div class="money-item">
                <span><span class="text red">0</span>个</span>
                <span>我的优惠</span>
            </div>
            <div class="money-item">
                <span><span class="text green">0</span>分</span>
                <span>我的积分</span>
            </div>
        </div>
        <div class="profile-order">
            <div class="my-order">
                <span class="iconfont iconweibiaoti-"></span>
                <div>
                    <span>我的订单</span>
                    <span class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></span>
                </div>
            </div>
            <div class="my-order">
                <span class="iconfont iconhuiyuantequanshengritequan"></span>
                <div>
                    <span>积分商城</span>
                    <span class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></span>
                </div>
            </div>
            <div class="my-order">
                <span class="iconfont iconvip"></span>
                <div>
                    <span>外卖砖石会员卡</span>
                    <span class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></span>
                </div>
            </div>
            <div class="my-order">
                <span class="iconfont icondalou4"></span>
                <div>
                    <span>服务中心</span>
                    <span class="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></span>
                </div>
            </div>
        </div>
        <mt-button type="danger" @click="out" v-if="user.userInfo._id" style="width:100%;margin-top:20px">退出登录</mt-button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
        }
    },
    computed:{
        ...mapState(['user'])
    },
    methods:{
        toLogin(){
            if(this.user.userInfo._id){
                this.$router.push('/userInfo')
            }else{
                this.$router.push('/login')
            }
        },
        out(){
            this.$MessageBox.confirm('确定退出吗?').then(
                action => {
                    this.$axios({
                        method:'GET',
                        url:'/logout'
                    }).then(res =>{
                        // console.log(res.data)
                        if(res.data.code == 0){
                            this.$store.dispatch('resetUserInfo');
                            this.$Toast('退出成功')
                        }
                    })
                },
                action => {
                    console.log('用户点击了取消')
                })
            }
        }
}
</script>

<style lang="stylus" scoped>
    header
        justify-content center!important
    .login
        background #02a774
        border-top 1px solid #ffffff
        margin-top 45px
        .login_main
            padding 20px 10px
            display flex
            justify-content space-between
            align-items center
            .userInfo
                display flex
                .iconicontouxiang
                    border-radius 50%
                    background #7E8C8D
                    font-size 40px
                    color #fff
                    width 55px
                    height 55px
                    text-align center
                    margin-right 10px
                .msg
                    display flex
                    flex-direction column
                    justify-content space-between
                    color #fff
                    .msg_top
                        font-weight bold
            .iconchangyongtubiao-xianxingdaochu-zhuanqu-
                color #ffffff
    .money
        display flex
        border-bottom 1px solid #f1f1f1
        .money-item
            display flex
            flex-direction column
            flex-grow 1
            align-items center
            border-right 1px solid #f1f1f1
            &:nth-child(3)
                border 0
            span:first-child
                padding 15px 0 10px
            span:nth-of-type(2)
                padding-bottom 10px
                font-size 14px
                color #666
            .text
                font-size 30px
                font-weight 700
                line-height 30px
            .yellow
                color #f90
            .red
                color #ff5f3e
            .green
                color #6ac20b
    .profile-order
        margin-top 10px
        border-top 1px solid #f1f1f1
        .my-order
            display flex
            align-items center
            &:nth-child(4)
                // margin-top 10px
                // border-top 1px solid #f1f1f1
            .iconfont
                font-size 22px
                margin 0 10px 0 15px
            .iconweibiaoti-
                color #02a774
            .iconhuiyuantequanshengritequan
                color #ff5f3e
            .iconvip
                color #f90
            .icondalou4
                color #02a774
            div
                display flex
                width 100%
                justify-content space-between
                align-items center
                border-bottom 1px solid #f1f1f1
                padding 14px 0
                .iconfont
                    font-size 16px
                    color #cccccc
</style>
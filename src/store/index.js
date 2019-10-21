import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import shop from './shop'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        user,
        shop
    },
    // // 存储全局变量
    // state:{
    //     count: 0
    // },
    // getters:{

    // },
    // mutations:{
    //     increment(state){
    //         state.count += 1
    //     }
    // },
    // actions:{

    // }
})

export default store;
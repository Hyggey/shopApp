import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        user
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
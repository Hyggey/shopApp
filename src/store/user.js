const user = {
    state:{
        userInfo:{}
    },
    getters:{

    },
    mutations:{
        receive_user_info(state,{userInfo}){
            state.userInfo = userInfo
        },
        reset_info(state){
            state.userInfo = {}
        }
    },
    actions:{
        recordUser({commit},userInfo){
            commit('receive_user_info',{userInfo})
        },
        resetUserInfo({commit}){
            commit('reset_info')
        }
    }
}

export default user
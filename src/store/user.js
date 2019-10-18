const user = {
    state:{
        userInfo:{}
    },
    getters:{

    },
    mutations:{
        receive_user_info(state,{userInfo}){
            state.userInfo = userInfo
        }
    },
    actions:{
        recordUser({commit},userInfo){
            commit('receive_user_info',{userInfo})
        }
    }
}

export default user
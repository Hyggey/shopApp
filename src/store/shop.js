const shop = {
    state:{
        shopInfo:{},
        c:'',
        shopGoods:[]
    },
    getters:{

    },
    mutations:{
        resolveShop(state,a){
            state.shopInfo = a.data
            state.c = a.b
        },
        resolveShopGoods(state,a){
            state.shopGoods = a.data
        }
    },
    actions:{
        // 第一种方法
        // receiveShop({commit},b){       1
        //     commit('resolveShop',b)    1
        // },                             1
        // 第二种方法   21行-31行
        getShop({commit},payLoad){                                     
            console.log(payLoad)                               
            payLoad._this.$axiosOther({
                method:'GET',
                url:'/info'
            }).then(res =>{
                console.log(res.data);
                // this.$store.dispatch('receiveShop',{data:res.data.data,b:1})
                commit('resolveShop',{data:res.data.data,b:1})
            })
        },
        getShopGoods({commit},b){
            commit('resolveShopGoods',b)
        }
    }
}

export default shop
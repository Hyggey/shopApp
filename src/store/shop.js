import Vue from 'vue'
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
        },
        // 数量加
        increment_food_count(state,a){
            if(!a.food.count){   //第一次增加
                // a.food.count = 1  //新增属性（没有数据绑定）
                /*
                对象
                属性名
                属性值
                */
                Vue.set(a.food,'count',1)
            }else{
                a.food.count ++
            }
        },
        // 数量减
        decrement_food_count(state,a){
            if(a.food.count){
                a.food.count --
            }
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
                if(res.data.code ==0){
                    console.log(res.data);
                    // this.$store.dispatch('receiveShop',{data:res.data.data,b:1})
                    commit('resolveShop',{data:res.data.data,b:1})
                }
            })
        },
        getShopGoods({commit},b){
            commit('resolveShopGoods',b)
            // 数据更新后通知组件
            b.callback && b.callback()
        },

        // 控制购物车加减数量的
        updateFoodCount({state,commit},b){
            if(b.isAdd){
                commit('increment_food_count',b)
                console.log(b)
                console.log(b.food.count)  // 写一个axios请求，增加的        
            }else{
                commit('decrement_food_count',b)
                console.log(b.food.count)  // 写一个axios请求，减少的
            }
        }
    }
}

export default shop
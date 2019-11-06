import Vue from 'vue'
const shop = {
    state:{
        shopInfo:{},
        c:'',
        shopGoods:[],
        cartFoods:[],
        ratings:[]
    },
    getters:{
        totalCount(state){
            return state.cartFoods.reduce((preTotal,food) =>preTotal+food.count,0)
        },
        totalPrice(state){
            return state.cartFoods.reduce((preTotal,food) =>preTotal+food.count*food.price,0)
        }
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
                // 将food添加到cartFoods中去
                state.cartFoods.push(a.food)
            }else{
                a.food.count ++
            }
        },
        // 数量减
        decrement_food_count(state,a){
            if(a.food.count){
                a.food.count --
                if(a.food.count===0){
                    //将food从cartFoods中移除
                    state.cartFoods.splice(state.cartFoods.indexOf(a.food),1)
                }
            }
        },
        //清空购物车
        muClearCart(state){
            // 清除food中的count
            state.cartFoods.forEach(food =>{
                food.count = 0
            });
            //移除购物车中所有购物项
            state.cartFoods = []
        },

        // 将商店的评价信息存储到vuex的state中去
        addRatings(state,msg2){
            state.ratings = msg2.data
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
        },

        // 购物车清空按钮（清空功能）同步清空购物车
        clearCart({commit}){
            commit('muClearCart')
        },

        // 将商店的用户评价信息shopRatings存储到vuex中
        getRatings({commit},msg1){
            commit('addRatings',msg1)
            // 数据更新后通知组件
            msg1.callBack && msg1.callBack()
        }
    }
}

export default shop
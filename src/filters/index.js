import Vue from 'vue'
//import moment from 'moment'    // 这里面使用 YYYY-MM-DD HH:mm:ss

//使用更小的 date-fns 来代替 moment
import format from 'date-fns/format'  //这里面使用 yyyy-MM-dd HH:mm:ss

// 自定义过滤器
Vue.filter('date-format',function(value,formatStr='yyyy-MM-dd HH:mm:ss'){
    // return moment(value).format(formatStr)
    return format(value,formatStr)
})
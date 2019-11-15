// // area.js
// ;(function (undefined) {
//     "use strict"
//     var _global;
//
//     var class_name = '';
//
//     function xmlDo(root) {
//         var data = new Array();
//         var province = root.getElementsByTagName("province");
//         var len = province.length;
//
//         for (var i = 0; i < len; i++) {
//             var pid = province[i].getAttribute('id');
//             data[pid] = new Array();
//             data[pid]['data'] = new Array();
//             data[pid]['son'] = new Array();
//             data[pid]['data']['name'] = province[i].getAttribute('name');
//             data[pid]['data']['id'] = pid;
//
//             var city = province[i].getElementsByTagName('city');
//             for (var j = 0; j < city.length; j++) {
//                 var cid = city[j].getAttribute('id');
//                 data[pid]['son'][cid] = new Array();
//                 data[pid]['son'][cid]['data'] = new Array();
//                 data[pid]['son'][cid]['son'] = new Array();
//                 data[pid]['son'][cid]['data']['name'] = city[j].getAttribute('name');
//                 data[pid]['son'][cid]['data']['id'] = cid;
//
//                 var county = city[j].getElementsByTagName('county');
//                 for (var k = 0; k < county.length; k++) {
//                     var county_id = county[k].getAttribute('id');
//                     data[pid]['son'][cid]['son'][county_id] = new Array();
//                     data[pid]['son'][cid]['son'][county_id]['name'] = county[k].getAttribute('name');
//                     data[pid]['son'][cid]['son'][county_id]['id'] = county_id;
//                 }
//             }
//         }
//         area_data = data;
//
//
//         //判断当前是否有data-init的值
//         var initArr = new Array();
//         $(class_name).each(function(){
//             initArr[initArr.length] = $(this).attr('data-init');
//         })
//
//         // console.log(initArr);
//
//         dom_bind();
//         if (initArr.length > 0) {
//             init(0);
//             init(initArr[0], 0, 0);
//             init(initArr[0], initArr[1], 0);
//             init(initArr[0], initArr[1], initArr[2]);
//             //选中这些值
//             $(class_name).eq(0).find('option[value="' + initArr[0] + '"]').prop('selected', true);
//             $(class_name).eq(1).find('option[value="' + initArr[1] + '"]').prop('selected', true);
//             $(class_name).eq(2).find('option[value="' + initArr[2] + '"]').prop('selected', true);
//         } else {
//             init(0);
//         }
//     }
//
//     function init(i) {
//         var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
//         var j = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
//         var k = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
//
//     }
//     function Captcha(class_name_) {
//
//         // getxmlDoc('/home/other/area.xml');
//         console.log(1)
//         class_name = class_name_;
//     }
//
//     Captcha.prototype.init = function () {
//         // console.log('init代码');
//         console.log()
//
//
//     };
//
//
//     // 最后将插件对象暴露给全局对象
//     _global = (function () {
//         return this || (0, eval)('this');
//     }());
//     if (typeof module !== "undefined" && module.exports) {
//         module.exports = Captcha;
//     } else if (typeof define === "function" && define.amd) {
//         define(function () {
//             return Captcha;
//         });
//     } else {
//         !('Captcha' in _global) && (_global.Captcha = Captcha);
//     }
// }());


(function($) {
    // jQuery.captcha = new Array();
    jQuery.fn.extend({
        "captcha": function(func){
            var id = this.attr('id');
            sessionStorage.setItem(id + 'func', func);
            console.log(func)

            this.setCaptchaData(id);

            $.ajax({
                url: '/captcha/put/' + this.getCaptchaData(id),
                type: 'post',
                dataType: 'html',
                data: {
                    id: id
                },
                success: function(data){
                    zeroModal.show({
                        title: '身份验证',
                        content: data,
                        width: '300px',
                        height: '290px'
                    });
                }
            })
        },
        //设置验证随机数字数据
        "setCaptchaData": function(id){
            if (!id){
                var id = this.attr('id');
                console.log('非ID1');
            }
            var info = 'c' + new Date().getTime() + parseInt(Math.random() * 100000);
            sessionStorage.setItem(id, info);
            return info;
        },
        //获取验证随机数字数据
        "getCaptchaData": function(id){
            if (!id){
                var id = this.attr('id');
            }
            return sessionStorage.getItem(id);
        },
        "captcha_func": function(){
            var id = this.attr('id');
            var func = sessionStorage.getItem(id + 'func')
            eval(func + '(\'' + this.getCaptchaData(id) +'\')');
        }
    });
})(jQuery);

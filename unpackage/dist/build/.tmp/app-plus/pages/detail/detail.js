(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"1bfc":function(t,e,a){"use strict";a.r(e);var i=a("8d6d"),s=a("e411");for(var r in s)"default"!==r&&function(t){a.d(e,t,function(){return s[t]})}(r);a("df9f");var l=a("2877"),o=Object(l["a"])(s["default"],i["a"],i["b"],!1,null,"5b997c3b",null);e["default"]=o.exports},3990:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("2f62");function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){r(t,e,a[e])})}return t}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={data:function(){var t=this.getDate({format:!0});return{id:"",orno:"",date:t,orderDetail:{}}},computed:s({},(0,i.mapState)({urlPre:function(t){return t.urlPre},userRole:function(t){return t.userRole}})),onLoad:function(t){this.id=t.id,this.orno=t.orno,this.getDetail(t.id)},methods:{previewImage:function(e){var a=e.target.dataset.src;t.previewImage({current:a,urls:0==this.orderDetail.ftype?this.orderDetail.jianli_pic:this.orderDetail.fpic})},getDetail:function(e){var a=this;t.showLoading({title:"加载中"}),t.request({url:this.urlPre+"/page/detail.do",method:"GET",data:{id:e},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){switch(e.data.result){case 1:a.date=e.data.applylist[0].fgodate.slice(0,10),a.orderDetail=e.data.applylist[0];break;default:t.showToast({image:"/static/icons/attention.png",title:"详情获取失败!"})}},fail:function(e){console.log("request fail",e),t.showModal({content:e.errMsg,showCancel:!1})},complete:function(){t.hideLoading()}})},bindDate:function(t){this.date=t.target.value},modifyDate:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:this.urlPre+"/page/UpdateDate.do",method:"GET",data:{id:this.id,fgodate:this.date},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){switch(a.data.result){case 1:t.showToast({icon:"success",title:"修改成功!"}),e.getDetail(e.id);break;default:t.showToast({image:"/static/icons/attention.png",title:"修改失败!"})}},fail:function(e){console.log("request fail",e),t.showModal({content:e.errMsg,showCancel:!1})},complete:function(){t.hideLoading()}})},getDate:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,s=e.getDate();return"start"===t?a-=60:"end"===t&&(a+=2),i=i>9?i:"0"+i,s=s>9?s:"0"+s,"".concat(a,"-").concat(i,"-").concat(s)}}};e.default=l}).call(this,a("6e42")["default"])},"7ce5":function(t,e,a){"use strict";a("db76");var i=r(a("b0ce")),s=r(a("1bfc"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},"8d6d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"Detial"},[a("view",{staticClass:"DetialCont"},[a("view",{staticClass:"ItemBar"},[a("text",[t._v("订单号：")]),a("text",[t._v(t._s(t.orno))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("联系人：")]),a("text",[t._v(t._s(t.orderDetail.fpeople))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("联系电话：")]),a("text",[t._v(t._s(t.orderDetail.ftel))])]),1==t.userRole&&"2"!=t.orderDetail.fbstatus?a("view",{staticClass:"ItemBar"},[a("text",[t._v("品名：")]),a("text",[t._v(t._s(t.orderDetail.pinming))])]):t._e(),2==t.userRole&&"0"!=t.orderDetail.psstatus?a("view",{staticClass:"ItemBar"},[a("text",[t._v("品名：")]),a("text",[t._v(t._s(t.orderDetail.pinming))])]):t._e(),1==t.userRole&&"2"!=t.orderDetail.fbstatus?a("view",{staticClass:"ItemBar"},[a("text",[t._v("数量：")]),a("text",[t._v(t._s(t.orderDetail.qty))])]):t._e(),2==t.userRole&&"0"!=t.orderDetail.psstatus?a("view",{staticClass:"ItemBar"},[a("text",[t._v("数量：")]),a("text",[t._v(t._s(t.orderDetail.qty))])]):t._e(),a("view",{staticClass:"ItemBar"},[a("text",[t._v("地址：")]),a("text",[t._v(t._s(t.orderDetail.faddress))])]),2==t.userRole?a("view",{staticClass:"ItemBar"},[a("text",[t._v("要求上门日期：")]),"2"==t.orderDetail.psstatus&&"无要求"!=t.date?a("picker",{attrs:{mode:"date",value:t.date,eventid:"de1c784c-0"},on:{change:t.bindDate}},[a("view",{staticClass:"uni-input",staticStyle:{"padding-right":"0"}},[t._v(t._s(t.date))])]):a("text",[t._v(t._s(t.date))])],1):t._e(),1==t.userRole?a("view",{staticClass:"ItemBar"},[a("text",[t._v("要求上门日期：")]),"无要求"==t.date||"3"!=t.orderDetail.fbstatus&&"5"!=t.orderDetail.fbstatus&&"6"!=t.orderDetail.fbstatus&&"7"!=t.orderDetail.fbstatus?a("text",[t._v(t._s(t.date))]):a("picker",{attrs:{mode:"date",value:t.date,eventid:"de1c784c-1"},on:{change:t.bindDate}},[a("view",{staticClass:"uni-input",staticStyle:{"padding-right":"0"}},[t._v(t._s(t.date))])])],1):t._e(),a("view",{staticClass:"ItemBar"},[a("text",[t._v("交货日期：")]),a("text",[t._v(t._s(t.orderDetail.fdate?t.orderDetail.fdate:"(无)"))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("安装日期：")]),a("text",[t._v(t._s(t.orderDetail.azfdate?t.orderDetail.azfdate:"(无)"))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("任务：")]),a("text",[t._v(t._s(t.orderDetail.fcontent?t.orderDetail.fcontent:"(无)"))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("业务员：")]),a("text",[t._v(t._s(t.orderDetail.fshifu))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("特别提醒：")]),a("text",[t._v(t._s(t.orderDetail.note))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("监理备注：")]),a("text",[t._v(t._s(t.orderDetail.jianli_note))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("师傅备注：")]),a("text",[t._v(t._s(t.orderDetail.fnote))])]),a("view",{staticStyle:{"padding-left":"10px",background:"#fff"}},[t._v("监理图片:")]),a("view",{staticClass:"uni-list list-pd"},[a("view",{staticClass:"uni-list-cell cell-pd"},[a("view",{staticClass:"uni-uploader"},[a("view",{staticClass:"uni-uploader-body"},[a("view",{staticClass:"uni-uploader__files"},t._l(t.orderDetail.jianli_pic,function(e,i){return a("block",{key:i},[a("view",{staticClass:"uni-uploader__file"},[a("image",{staticClass:"uni-uploader__img",attrs:{src:e,"data-src":e,eventid:"de1c784c-2-"+i},on:{tap:t.previewImage}})])])}))])])])]),a("view",{staticStyle:{"padding-left":"10px",background:"#fff"}},[t._v("师傅图片:")]),a("view",{staticClass:"uni-list list-pd"},[a("view",{staticClass:"uni-list-cell cell-pd"},[a("view",{staticClass:"uni-uploader"},[a("view",{staticClass:"uni-uploader-body"},[a("view",{staticClass:"uni-uploader__files"},t._l(t.orderDetail.fpic,function(e,i){return a("block",{key:i},[a("view",{staticClass:"uni-uploader__file"},[a("image",{staticClass:"uni-uploader__img",attrs:{src:e,"data-src":e,eventid:"de1c784c-3-"+i},on:{tap:t.previewImage}})])])}))])])])])]),1==t.userRole?a("view",["3"==t.orderDetail.fbstatus||"5"==t.orderDetail.fbstatus||"6"==t.orderDetail.fbstatus||"7"==t.orderDetail.fbstatus?a("view",{staticClass:"BottomBts",attrs:{mode:"date",value:t.date,eventid:"de1c784c-4"},on:{click:t.modifyDate,change:t.bindDate}},[a("text",[t._v("保存修改")])]):t._e()]):t._e(),2==t.userRole?a("view",["2"==t.orderDetail.psstatus?a("view",{staticClass:"BottomBts",attrs:{mode:"date",value:t.date,eventid:"de1c784c-5"},on:{click:t.modifyDate,change:t.bindDate}},[a("text",[t._v("保存修改")])]):t._e()]):t._e()])},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},d402:function(t,e,a){},df9f:function(t,e,a){"use strict";var i=a("d402"),s=a.n(i);s.a},e411:function(t,e,a){"use strict";a.r(e);var i=a("3990"),s=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);e["default"]=s.a}},[["7ce5","common/runtime","common/vendor"]]]);
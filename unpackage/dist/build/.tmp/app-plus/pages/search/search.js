(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"0d72":function(t,e,a){},"0efc":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("4ae6")),n=a("2f62");a("1c5d");function s(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){c(t,e,a[e])})}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o={data:function(){var t=this.getDate({format:!0});return{resultList:[],yesterdayDate:t,dateStart:t,dateEnd:t,loading:!1,array:["安装","监理","维修"],ftypeIndex:0,ftype:1}},components:{footerNav:i.default},computed:r({},(0,n.mapState)({urlPre:function(t){return t.urlPre},userId:function(t){return t.userId}})),onLoad:function(){},methods:{bindDateChangeS:function(t){this.dateStart=t.target.value,new Date(t.target.value)>new Date(this.dateEnd)&&(this.dateEnd="请选择")},bindDateChangeE:function(t){this.dateEnd=t.target.value},bindPickerChange:function(t){switch(this.ftypeIndex=t.target.value,t.target.value){case 0:this.ftype=1;break;case 1:this.ftype=0;break;case 2:this.ftype=3;break}},search:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:this.urlPre+"/page/wanchengdate.do",method:"GET",data:{begindate:this.dateStart,enddate:this.dateEnd,shifuid:this.userId,ftype:this.ftype},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){switch(a.data.result){case 1:e.resultList=a.data.oredrpaylist,t.hideLoading();break;default:t.hideLoading(),t.showToast({image:"/static/icons/attention.png",title:"查询失败!"})}},fail:function(e){console.log("request fail",e),t.hideLoading(),t.showModal({content:e.errMsg,showCancel:!1})},complete:function(){}})},getDate:function(t){var e=new Date,a=e.setDate(e.getDate()-1),i=new Date(a),n=i.getFullYear(),s=i.getMonth()+1,r=i.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),s=s>9?s:"0"+s,r=r>9?r:"0"+r,"".concat(n,"-").concat(s,"-").concat(r)}}};e.default=o}).call(this,a("649d")["default"])},1400:function(t,e,a){"use strict";a.r(e);var i=a("cd52"),n=a("9b09");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("26f3");var r=a("2877"),c=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"6aa50585",null);e["default"]=c.exports},"1c5d":function(t,e,a){"use strict";function i(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var a=parseInt(t/60);t%=60;var i=t;return[e,a,i].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function n(t){var e=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();t.getHours(),t.getMinutes(),t.getSeconds();return[e,a,i].map(s).join("-")}function s(t){return t=t.toString(),t[1]?t:"0"+t}function r(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}var c={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var a in this.UNITS)if(t>=this.UNITS[a]){e=Math.floor(t/this.UNITS[a])+a+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),a=Date.now()-e.getTime();if(a<this.UNITS["天"])return this.humanize(a);var i=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+i(e.getMonth()+1)+"/"+i(e.getDay())+"-"+i(e.getHours())+":"+i(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:i,formatTimeSimple:n,formatLocation:r,dateUtils:c}},"26f3":function(t,e,a){"use strict";var i=a("0d72"),n=a.n(i);n.a},"283f":function(t,e,a){"use strict";a("db76");var i=s(a("b0ce")),n=s(a("1400"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},"9b09":function(t,e,a){"use strict";a.r(e);var i=a("0efc"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},cd52:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"Search"},[a("view",{staticClass:"uni-list",staticStyle:{"padding-bottom":"10px"}},[a("view",{staticClass:"uni-list-cell"},[a("view",{staticClass:"uni-list-cell-left"},[t._v("开始日期")]),a("view",{staticClass:"uni-list-cell-db TextAlignR"},[a("picker",{attrs:{mode:"date",value:t.dateStart,eventid:"9211380c-0"},on:{change:t.bindDateChangeS}},[a("view",{staticClass:"uni-input"},[t._v(t._s(t.dateStart))])])],1)]),a("view",{staticClass:"uni-list-cell"},[a("view",{staticClass:"uni-list-cell-left"},[t._v("结束日期")]),a("view",{staticClass:"uni-list-cell-db TextAlignR"},[a("picker",{attrs:{mode:"date",value:t.dateEnd,start:t.dateStart,eventid:"9211380c-1"},on:{change:t.bindDateChangeE}},[a("view",{staticClass:"uni-input"},[t._v(t._s(t.dateEnd))])])],1)]),a("view",{staticClass:"uni-list-cell"},[a("view",{staticClass:"uni-list-cell-left"},[t._v("订单类型")]),a("view",{staticClass:"uni-list-cell-db TextAlignR"},[a("picker",{attrs:{value:t.ftypeIndex,range:t.array,eventid:"9211380c-2"},on:{change:t.bindPickerChange}},[a("view",{staticClass:"uni-input"},[t._v(t._s(t.array[t.ftypeIndex]))])])],1)]),a("button",{staticClass:"searchBt",attrs:{size:"mini",type:"primary",loading:t.loading,eventid:"9211380c-3"},on:{click:t.search}},[t._v("查询")])],1),t.resultList.length>0?a("view",{staticClass:"ResultList"},[a("text",{staticClass:"ResultTit"},[t._v("查询结果")]),t._l(t.resultList,function(e,i){return a("view",{key:i,staticClass:"ResultItem"},[a("view",{staticClass:"ItemBar"},[a("text",[t._v("订单号")]),a("text",[t._v(t._s(e.FBillNo))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("标准运费")]),a("text",[t._v(t._s(e.azcost))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("上楼费")]),a("text",[t._v(t._s(e.farecost))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("长途")]),a("text",[t._v(t._s(e.distancecost))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("车费")]),a("text",[t._v(t._s(e.farecost))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("餐费")]),a("text",[t._v(t._s(e.mealscost))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("垫付材料费")]),a("text",[t._v(t._s(e.materialcosts))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("其他费用")]),a("text",[t._v(t._s(e.othercosts))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("总价")]),a("text",[t._v(t._s(e.pay))])])])})],2):t._e(),0==t.resultList.length?a("view",{staticClass:"ResultListEmpty"},[a("image",{attrs:{src:"/static/icons/box-empty.png"}}),a("text",[t._v("暂无订单")])]):t._e(),a("footerNav",{attrs:{mpcomid:"9211380c-0"}})],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})}},[["283f","common/runtime","common/vendor"]]]);
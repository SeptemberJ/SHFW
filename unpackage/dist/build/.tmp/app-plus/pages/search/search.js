(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"0efc":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("2f62");a("1c5d");function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){i(t,e,a[e])})}return t}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var r={data:function(){var t,e=this.getDate({format:!0});return{resultList2:[],resultList:[(t={FBillNo:"OR1g63y9",pay:2e3,azcost:120,farecost:123,distancecost:122,othercosts:200},i(t,"farecost",130),i(t,"mealscost",140),i(t,"materialcosts",150),t)],yesterdayDate:e,dateStart:e,dateEnd:e,loading:!1}},computed:s({},(0,n.mapState)({urlPre:function(t){return t.urlPre},userId:function(t){return t.userId}})),onLoad:function(){},methods:{bindDateChangeS:function(t){this.dateStart=t.target.value},bindDateChangeE:function(t){this.dateEnd=t.target.value},search:function(){var e=this;t.request({url:this.urlPre+"/page/wanchengdate.do",method:"GET",data:{begindate:this.dateStart,enddate:this.dateEnd,shifuid:this.userId},header:{"content-type":"application/x-www-form-urlencoded"},success:function(a){switch(a.data.result){case 1:e.resultList=a.data.oredrpaylist;break;default:t.showToast({image:"/static/icons/attention.png",title:"查询失败!"})}},fail:function(e){console.log("request fail",e),t.showModal({content:e.errMsg,showCancel:!1})},complete:function(){t.hideLoading()}})},getDate:function(t){var e=new Date,a=e.setDate(e.getDate()-1),n=new Date(a),s=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===t?s-=60:"end"===t&&(s+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(s,"-").concat(i,"-").concat(r)}}};e.default=r}).call(this,a("649d")["default"])},1400:function(t,e,a){"use strict";a.r(e);var n=a("44b3"),s=a("9b09");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a("908b");var r=a("2877"),c=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"0afe1356",null);e["default"]=c.exports},"1c5d":function(t,e,a){"use strict";function n(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var a=parseInt(t/60);t%=60;var n=t;return[e,a,n].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")}function s(t){var e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();t.getHours(),t.getMinutes(),t.getSeconds();return[e,a,n].map(i).join("-")}function i(t){return t=t.toString(),t[1]?t:"0"+t}function r(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}}var c={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var a in this.UNITS)if(t>=this.UNITS[a]){e=Math.floor(t/this.UNITS[a])+a+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),a=Date.now()-e.getTime();if(a<this.UNITS["天"])return this.humanize(a);var n=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+n(e.getMonth()+1)+"/"+n(e.getDay())+"-"+n(e.getHours())+":"+n(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:n,formatTimeSimple:s,formatLocation:r,dateUtils:c}},"283f":function(t,e,a){"use strict";a("db76");var n=i(a("b0ce")),s=i(a("1400"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},4350:function(t,e,a){},"44b3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"Search"},[a("view",{staticClass:"uni-list",staticStyle:{"padding-bottom":"10px"}},[a("view",{staticClass:"uni-list-cell"},[a("view",{staticClass:"uni-list-cell-left"},[t._v("开始日期")]),a("view",{staticClass:"uni-list-cell-db TextAlignR"},[a("picker",{attrs:{mode:"date",value:t.dateStart,end:t.yesterdayDate,eventid:"9211380c-0"},on:{change:t.bindDateChangeS}},[a("view",{staticClass:"uni-input"},[t._v(t._s(t.dateStart))])])],1)]),a("view",{staticClass:"uni-list-cell"},[a("view",{staticClass:"uni-list-cell-left"},[t._v("结束日期")]),a("view",{staticClass:"uni-list-cell-db TextAlignR"},[a("picker",{attrs:{mode:"date",value:t.dateEnd,end:t.yesterdayDate,eventid:"9211380c-1"},on:{change:t.bindDateChangeE}},[a("view",{staticClass:"uni-input"},[t._v(t._s(t.dateEnd))])])],1)]),a("button",{staticClass:"searchBt",attrs:{type:"primary",loading:t.loading,eventid:"9211380c-2"},on:{click:t.search}},[t._v("查询")])],1),t.resultList.length>0?a("view",{staticClass:"ResultList"},[a("text",{staticClass:"ResultTit"},[t._v("查询结果")]),t._l(t.resultList,function(e,n){return a("view",{key:n,staticClass:"ResultItem"},[a("view",{staticClass:"ItemBar"},[a("text",[t._v("订单号")]),a("text",[t._v(t._s(e.FBillNo))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("标准运费")]),a("text",[t._v(t._s(e.azcost))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("上楼费")]),a("text",[t._v(t._s(e.farecost))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("长途")]),a("text",[t._v(t._s(e.distancecost))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("车费")]),a("text",[t._v(t._s(e.farecost))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("餐费")]),a("text",[t._v(t._s(e.mealscost))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("垫付材料费")]),a("text",[t._v(t._s(e.materialcosts))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("其他费用")]),a("text",[t._v(t._s(e.othercosts))])]),a("view",{staticClass:"ItemBar"},[a("text",[t._v("总价")]),a("text",[t._v(t._s(e.pay))])])])})],2):t._e(),0==t.resultList.length?a("view",{staticClass:"ResultListEmpty"},[a("image",{attrs:{src:"/static/icons/box-empty.png"}}),a("text",[t._v("暂无订单")])]):t._e()])},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"908b":function(t,e,a){"use strict";var n=a("4350"),s=a.n(n);s.a},"9b09":function(t,e,a){"use strict";a.r(e);var n=a("0efc"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a}},[["283f","common/runtime","common/vendor"]]]);
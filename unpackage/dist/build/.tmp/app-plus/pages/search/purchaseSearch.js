(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/purchaseSearch"],{"032f":function(t,e,i){"use strict";i.r(e);var s=i("fd59"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},"2c10":function(t,e,i){"use strict";i("db76");var s=n(i("b0ce")),a=n(i("8c62"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},"561f":function(t,e,i){"use strict";i.r(e);var s=i("86cd"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},"86cd":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={name:"uni-drawer",props:{visible:{type:Boolean,default:!1},mode:String,mask:{type:[Boolean,String],default:!0}},data:function(){return{visibleSync:!1,showDrawer:!1,rightMode:!1,closeTimer:null,watchTimer:null}},watch:{visible:function(t){var e=this;clearTimeout(this.watchTimer),setTimeout(function(){e.showDrawer=t},100),this.visibleSync&&clearTimeout(this.closeTimer),t?this.visibleSync=t:this.watchTimer=setTimeout(function(){e.visibleSync=t},300)}},computed:{showMask:function(){return"true"===String(this.mask)}},created:function(){var t=this;this.visibleSync=this.visible,setTimeout(function(){t.showDrawer=t.visible},100),this.rightMode="right"===this.mode},methods:{close:function(){var t=this;this.showDrawer=!1,this.$emit("close"),this.closeTimer=setTimeout(function(){t.visibleSync=!1},200)},moveHandle:function(){}}};e.default=s},8862:function(t,e,i){"use strict";var s=i("ccae"),a=i.n(s);a.a},"8c62":function(t,e,i){"use strict";i.r(e);var s=i("9e9e"),a=i("032f");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("8862");var r=i("2877"),o=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,"3e6b8d52",null);e["default"]=o.exports},"9e9e":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"purchaseSearch"},[t.orderList.length>0?i("view",{staticClass:"OrderList"},t._l(t.orderList,function(e,s){return i("view",{key:s,staticClass:"ResultItem"},[i("view",{staticClass:"ItemBar"},[i("text",[t._v("订单号")]),i("text",[t._v(t._s(e.FBillNo?e.FBillNo:"(无)"))])]),i("view",{staticClass:"ItemBar"},[i("text",[t._v("订单状态")]),i("text",[t._v(t._s(e.bpmstatusTxt))])]),i("view",{staticClass:"ItemBar"},[i("text",[t._v("下单时间")]),i("text",[t._v(t._s(e.lddate?e.lddate:"(无)"))])]),i("view",{staticClass:"ItemBar"},[i("text",[t._v("联系人")]),i("text",[t._v(t._s(e.fcontact?e.fcontact:"(无)"))])]),i("view",{staticClass:"ItemBar"},[i("text",[t._v("联系电话")]),i("text",[t._v(t._s(e.fmobile?e.fmobile:"(无)"))])]),i("view",{staticClass:"ItemBar"},[i("text",[t._v("地址")]),i("text",[t._v(t._s(e.FDeliveryAddress?e.FDeliveryAddress:"(无)"))])]),i("view",{staticClass:"ItemBar"},[i("text",[t._v("货物名称")]),i("text",[t._v(t._s(e.fname1?e.fname1:"(无)"))])])])})):t._e(),0==t.orderList.length?i("view",{staticClass:"ResultListEmpty"},[i("image",{attrs:{src:"/static/icons/box-empty.png"}}),i("text",[t._v("暂无相关订单")])]):t._e(),i("uni-drawer",{attrs:{visible:t.showRight,mode:"right",eventid:"1cbd434a-7",mpcomid:"1cbd434a-0"},on:{close:function(e){t.closeDrawer("right")}}},[i("view",{staticClass:"uni-list",staticStyle:{"padding-bottom":"10px"}},[i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[t._v("物品名称")]),i("view",{staticClass:"uni-list-cell-db TextAlignR"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.goodsName,expression:"goodsName"}],staticClass:"uni-input",attrs:{placeholder:"请输入物品名称",eventid:"1cbd434a-0"},domProps:{value:t.goodsName},on:{input:function(e){e.target.composing||(t.goodsName=e.target.value)}}})])]),i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[t._v("客户姓名")]),i("view",{staticClass:"uni-list-cell-db TextAlignR"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"uni-input",attrs:{placeholder:"请输入客户姓名",eventid:"1cbd434a-1"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})])]),i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[t._v("订单号")]),i("view",{staticClass:"uni-list-cell-db TextAlignR"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.orderNo,expression:"orderNo"}],staticClass:"uni-input",attrs:{placeholder:"请输入订单号",eventid:"1cbd434a-2"},domProps:{value:t.orderNo},on:{input:function(e){e.target.composing||(t.orderNo=e.target.value)}}})])]),i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[t._v("手机号")]),i("view",{staticClass:"uni-list-cell-db TextAlignR"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"uni-input",attrs:{placeholder:"请输入手机号",eventid:"1cbd434a-3"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[t._v("地址")]),i("view",{staticClass:"uni-list-cell-db TextAlignR"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"uni-input",attrs:{placeholder:"请输入地址",eventid:"1cbd434a-4"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])]),i("view",{staticClass:"uni-list-cell MarginT_20"},[i("view",{staticClass:"uni-list-cell-left"},[i("button",{attrs:{type:"warn",size:"mini",eventid:"1cbd434a-5"},on:{click:t.search}},[t._v("查询")])],1),i("view",{staticClass:"uni-list-cell-db TextAlignR PaddingR_20"},[i("button",{attrs:{type:"default",size:"mini",eventid:"1cbd434a-6"},on:{click:t.reset}},[t._v("重置")])],1)])])]),i("footerNav",{attrs:{mpcomid:"1cbd434a-1"}})],1)},a=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})},c0d7:function(t,e,i){},ccae:function(t,e,i){},f2b9:function(t,e,i){"use strict";var s=i("c0d7"),a=i.n(s);a.a},f768:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visibleSync?i("view",{staticClass:"uni-drawer",class:{"uni-drawer--visible":t.showDrawer,"uni-drawer--right":t.rightMode},attrs:{eventid:"645b2320-1"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.moveHandle(e)}}},[i("view",{staticClass:"uni-drawer__mask",attrs:{eventid:"645b2320-0"},on:{tap:t.close}}),i("view",{staticClass:"uni-drawer__content"},[t._t("default",null,{mpcomid:"645b2320-0"})],2)]):t._e()},a=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})},fc12:function(t,e,i){"use strict";i.r(e);var s=i("f768"),a=i("561f");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("f2b9");var r=i("2877"),o=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=o.exports},fd59:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o(i("a34a")),a=o(i("4ae6")),n=o(i("fc12")),r=i("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function l(t,e,i,s,a,n,r){try{var o=t[n](r),l=o.value}catch(c){return void i(c)}o.done?e(l):Promise.resolve(l).then(s,a)}function c(t){return function(){var e=this,i=arguments;return new Promise(function(s,a){var n=t.apply(e,i);function r(t){l(n,s,a,r,o,"next",t)}function o(t){l(n,s,a,r,o,"throw",t)}r(void 0)})}}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},s=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),s.forEach(function(e){d(t,e,i[e])})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={data:function(){return{loading:!1,goodsName:"",userName:"",orderNo:"",phone:"",address:"",showRight:!1,orderList:[]}},components:{footerNav:a.default,uniDrawer:n.default},computed:u({},(0,r.mapState)({urlPre:function(t){return t.urlPre},purchaseUnit:function(t){return t.purchaseUnit}})),onLoad:function(){this.search()},onPullDownRefresh:function(){var t=c(s.default.mark(function t(){return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.search();case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{reset:function(){this.goodsName="",this.userName="",this.orderNo="",this.phone="",this.address=""},search:function(){var e=this;t.request({url:this.urlPre+"/page/getByywy.do?purchase="+this.purchaseUnit+(this.goodsName?"&fname1="+this.goodsName:"")+(this.userName?"&fcontact="+this.userName:"")+(this.orderNo?"&fbillno="+this.orderNo:"")+(this.phone?"&fmobile="+this.phone:"")+(this.address?"&fdeliveryaddress="+this.address:""),method:"GET",data:{},header:{"content-type":"application/x-www-form-urlencoded"},success:function(i){switch(i.data.result){case 1:e.orderList=i.data.orderList.map(function(t){return 1==t.bpmstatus&&(t.bpmstatusTxt="未排单"),2!=t.bpmstatus&&"q"!=t.bpmstatus||(t.bpmstatusTxt="待结单"),3!=t.bpmstatus&&4!=t.bpmstatus||(t.bpmstatusTxt="待预约"),5!=t.bpmstatus&&6!=t.bpmstatus&&7!=t.bpmstatus&&8!=t.bpmstatus||(t.bpmstatusTxt="上门服务"),"A"==t.bpmstatus&&(t.bpmstatusTxt="已完成"),t});break;default:t.showToast({image:"/static/icons/attention.png",title:"订单获取失败!"})}},fail:function(e){console.log("request fail",e),t.showModal({content:e.errMsg,showCancel:!1})},complete:function(){t.stopPullDownRefresh(),t.hideLoading()}})},show:function(t){"left"===t||(this.showRight=!0)},hide:function(){this.showRight=!1},closeDrawer:function(t){this.search(),this.showRight=!1}},onNavigationBarButtonTap:function(t){this.showRight=!this.showRight},onBackPress:function(){if(this.showRight)return this.hide(),!0}};e.default=f}).call(this,i("649d")["default"])}},[["2c10","common/runtime","common/vendor"]]]);
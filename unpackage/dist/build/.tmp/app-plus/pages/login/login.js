(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0f3f":function(t,e,n){"use strict";n.r(e);var s=n("8e22"),a=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e["default"]=a.a},1218:function(t,e,n){"use strict";n.r(e);var s=n("8a49"),a=n("0f3f");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("c6f8");var o=n("2877"),r=Object(o["a"])(a["default"],s["a"],s["b"],!1,null,"2284264b",null);e["default"]=r.exports},"7f68":function(t,e,n){},"8a49":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"Login"},[t._m(0),n("view",{staticClass:"InputGroup"},[n("view",{staticClass:"uni-form-item uni-row"},[n("view",{staticClass:"uni-icon uni-icon-person MarginR_10",staticStyle:{color:"#fff"}}),n("view",{staticClass:"with-fun"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"uni-input",attrs:{placeholder:"用户名",eventid:"09e9e80e-0"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),n("view",{staticClass:"uni-form-item uni-row",staticStyle:{"border-top":"1rpx solid #fff"}},[n("view",{staticClass:"uni-icon uni-icon-locked MarginR_10",staticStyle:{color:"#fff"}}),n("view",{staticClass:"with-fun"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"uni-input",attrs:{placeholder:"密码",password:t.showPassword,eventid:"09e9e80e-1"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("view",{staticClass:"uni-icon uni-icon-eye",class:[t.showPassword?"":"uni-active"],attrs:{eventid:"09e9e80e-2"},on:{click:t.changePassword}})])])]),n("button",{staticClass:"loginBt",attrs:{type:"default",eventid:"09e9e80e-3"},on:{click:t.login}},[t._v("登 陆")])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"Logo"},[n("image",{attrs:{src:"../../static/xuehua.png"}})])}];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return a})},"8e22":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n("2f62");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o={data:function(){return{username:"888",password:"123",showPassword:!0}},components:{},computed:a({},(0,s.mapState)({urlPre:function(t){return t.urlPre}})),methods:a({},(0,s.mapActions)(["updateUserInfo"]),{changePassword:function(){this.showPassword=!this.showPassword},login:function(){return""==this.username?(t.showToast({image:"/static/icons/attention.png",title:"用户名不能为空!"}),!1):""==this.password?(t.showToast({image:"/static/icons/attention.png",title:"密码不能为空!"}),!1):void this.loginRequest()},loginRequest:function(){var e=this;t.request({url:this.urlPre+"/page/login.do",data:{username:this.username,password:this.password},success:function(n){switch(console.log("request success",n),n.data.result){case 1:e.updateUserInfo({userId:n.data.id,userRole:n.data.ftype,userName:n.data.username}),t.switchTab({url:"/pages/orderList/orderList"});break;case 2:t.showToast({image:"/static/icons/attention.png",title:"密码错误!"});break;case 0:t.showToast({image:"/static/icons/attention.png",title:"用户不存在!"});break;default:t.showToast({image:"/static/icons/attention.png",title:"服务器繁忙!"})}},fail:function(e){console.log("request fail",e),t.showModal({content:e.errMsg,showCancel:!1})},complete:function(){}})}})};e.default=o}).call(this,n("649d")["default"])},c6f8:function(t,e,n){"use strict";var s=n("7f68"),a=n.n(s);a.a},d6e0:function(t,e,n){"use strict";n("db76");var s=i(n("b0ce")),a=i(n("1218"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))}},[["d6e0","common/runtime","common/vendor"]]]);
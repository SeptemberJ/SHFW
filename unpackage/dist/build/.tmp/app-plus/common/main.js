(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0b5b":function(e,n,t){"use strict";t.r(n);var o=t("fcfe");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("0ff7");var r,i,a=t("2877"),c=Object(a["a"])(o["default"],r,i,!1,null,null,null);n["default"]=c.exports},"0ff7":function(e,n,t){"use strict";var o=t("32cc"),u=t.n(o);u.a},"1a29":function(e,n,t){"use strict";t("db76");var o=i(t("f3d3")),u=i(t("0b5b"));t("5be5");var r=i(t("6956"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}o.default.config.productionTip=!1,o.default.prototype.$store=r.default,o.default.prototype.$backgroundAudioData={playing:!1,playTime:0,formatedPlayTime:"00:00:00"},u.default.mpType="app";var s=new o.default(a({store:r.default},u.default));s.$mount()},"32cc":function(e,n,t){},"4a19":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log("App Launch"),plus.screen.lockOrientation("portrait-primary"),e.request({url:"https://uniapp.dcloud.io/update",data:{appid:plus.runtime.appid,version:plus.runtime.version,imei:plus.device.imei},success:function(n){if(console.log("success",n),200==n.statusCode&&n.data.isUpdate){var t="iOS"===plus.os.name?n.data.iOS:n.data.Android;e.showModal({title:"更新提示",content:n.data.note?n.data.note:"是否选择更新",success:function(e){e.confirm&&plus.runtime.openURL(t)}})}}})},onShow:function(){},onHide:function(){}};n.default=t}).call(this,t("649d")["default"])},"5be5":function(e,n,t){},6956:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t("a34a")),u=i(t("f3d3")),r=i(t("2f62"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,o,u,r,i){try{var a=e[r](i),c=a.value}catch(s){return void t(s)}a.done?n(c):Promise.resolve(c).then(o,u)}function c(e){return function(){var n=this,t=arguments;return new Promise(function(o,u){var r=e.apply(n,t);function i(e){a(r,o,u,i,c,"next",e)}function c(e){a(r,o,u,i,c,"throw",e)}i(void 0)})}}u.default.use(r.default);var s=new r.default.Store({state:{hasLogin:!1,loginProvider:"",openid:null,userId:"",userName:"liubai",userRole:"",urlPre:"http://172.16.52.99:8082"},mutations:{login:function(e,n){e.hasLogin=!0,e.loginProvider=n},logout:function(e){e.hasLogin=!1,e.openid=null},setOpenid:function(e,n){e.openid=n},setUserInfo:function(e,n){e.userId=n.userId,e.userRole=n.userRole,e.userName=n.userName}},actions:{updateUserInfo:function(e,n){var t=e.commit;e.state;t("setUserInfo",n)},getUserOpenId:function(){var n=c(o.default.mark(function n(t){var u,r;return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return u=t.commit,r=t.state,n.next=3,new Promise(function(n,t){r.openid?n(r.openid):e.login({success:function(e){u("login"),setTimeout(function(){var e="123456789";console.log("uni.request mock openid["+e+"]"),u("setOpenid",e),n(e)},1e3)},fail:function(e){console.log("uni.login 接口调用失败，将无法正常使用开放接口等服务",e),t(e)}})});case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}},n,this)}));function t(e){return n.apply(this,arguments)}return t}()}}),l=s;n.default=l}).call(this,t("649d")["default"])},fcfe:function(e,n,t){"use strict";t.r(n);var o=t("4a19"),u=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);n["default"]=u.a}},[["1a29","common/runtime","common/vendor"]]]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/submit/deliver"],{"0d27":function(t,e,i){"use strict";i("db76");var n=s(i("b0ce")),a=s(i("b51d"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},5826:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticStyle:{"padding-bottom":"40px"}},[i("view",{staticClass:"uni-common-mt"},[i("form",[i("view",{staticClass:"uni-list list-pd"},[i("view",{staticClass:"uni-list-cell cell-pd"},[i("view",{staticClass:"uni-uploader"},[i("view",{staticClass:"uni-uploader-head"},[i("view",{staticClass:"uni-uploader-title",staticStyle:{color:"grey"}},[t._v("请选择要上传的图片")]),i("view",{staticClass:"uni-uploader-info"},[t._v(t._s(t.imageList.length)+"/9")])]),i("view",{staticClass:"uni-uploader-body"},[i("view",{staticClass:"uni-uploader__files"},[t._l(t.imageList,function(e,n){return i("block",{key:n},[i("view",{staticClass:"uni-uploader__file"},[i("image",{staticClass:"uni-uploader__img",attrs:{src:e,"data-src":e,eventid:"793180fa-0-"+n},on:{tap:t.previewImage}})])])}),i("view",{staticClass:"uni-uploader__input-box"},[i("view",{staticClass:"uni-uploader__input",attrs:{eventid:"793180fa-1"},on:{tap:t.chooseImage}})])],2)])])])]),i("button",{staticClass:"submitBt",attrs:{type:"warn",loading:t.loading,eventid:"793180fa-2"},on:{click:t.sumitInfo}},[t._v("提 交")])],1)],1)])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},7868:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("a34a")),a=i("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e,i,n,a,s,o){try{var u=t[s](o),r=u.value}catch(c){return void i(c)}u.done?e(r):Promise.resolve(r).then(n,a)}function u(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var s=t.apply(e,i);function u(t){o(s,n,a,u,r,"next",t)}function r(t){o(s,n,a,u,r,"throw",t)}u(void 0)})}}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){c(t,e,i[e])})}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l=[["camera"],["album"],["camera","album"]],d=[["compressed"],["original"],["compressed","original"]],f={data:function(){return{loading:!1,orderId:"",status:"",imageList:[],copyTempFilePaths:[],sourceTypeIndex:2,sourceType:["拍照","相册","拍照或相册"],sizeTypeIndex:2,sizeType:["压缩","原图","压缩或原图"],countIndex:8,count:[1,2,3,4,5,6,7,8,9]}},computed:r({},(0,a.mapState)({urlPre:function(t){return t.urlPre}})),onLoad:function(t){console.log(t),this.orderId=t.id},onUnload:function(){this.imageList=[],this.sourceTypeIndex=2,this.sourceType=["拍照","相册","拍照或相册"],this.sizeTypeIndex=2,this.sizeType=["压缩","原图","压缩或原图"],this.countIndex=8},methods:{chooseImage:function(){var e=u(n.default.mark(function e(){var i,a=this;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(9!==this.imageList.length){e.next=7;break}return e.next=3,this.isFullImg();case 3:if(i=e.sent,console.log("是否继续?",i),i){e.next=7;break}return e.abrupt("return");case 7:t.chooseImage({sourceType:l[this.sourceTypeIndex],sizeType:d[this.sizeTypeIndex],count:this.imageList.length+this.count[this.countIndex]>9?9-this.imageList.length:this.count[this.countIndex],success:function(t){a.imageList=a.imageList.concat(t.tempFilePaths),a.copyTempFilePaths=a.imageList.concat(t.tempFilePaths)}});case 8:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),isFullImg:function(){var e=this;return new Promise(function(i){t.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(t){t.confirm?(e.imageList=[],i(!0)):i(!1)},fail:function(){i(!1)}})})},previewImage:function(e){var i=e.target.dataset.src;t.previewImage({current:i,urls:this.imageList})},sumitInfo:function(){if(0==this.imageList.length)return t.showToast({image:"/static/icons/attention.png",title:"图片至少一张!"}),!1;this.uploadImg()},uploadImg:function(){var e=this;t.uploadFile({url:this.urlPre+"/page/psimage.do?id="+this.orderId,filePath:this.imageList.splice(0,1)[0],fileType:"image",name:"file",success:function(i){1==i.data?e.imageList.length>0?e.uploadImg():(t.showToast({title:"提交成功!",icon:"success"}),setTimeout(function(){t.navigateBack()},1e3)):(e.imageList=e.copyTempFilePaths,t.showToast({image:"/static/icons/attention.png",title:"图片上传失败!"}))},fail:function(e){console.log("uploadImage fail",e),t.showToast({image:"/static/icons/attention.png",title:"提交失败!"})}})}}};e.default=f}).call(this,i("649d")["default"])},"8aa4":function(t,e,i){"use strict";i.r(e);var n=i("7868"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},b51d:function(t,e,i){"use strict";i.r(e);var n=i("5826"),a=i("8aa4");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("dac6");var o=i("2877"),u=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},bf3c:function(t,e,i){},dac6:function(t,e,i){"use strict";var n=i("bf3c"),a=i.n(n);a.a}},[["0d27","common/runtime","common/vendor"]]]);
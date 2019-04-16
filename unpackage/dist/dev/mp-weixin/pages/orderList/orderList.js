(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/orderList/orderList"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Project/App/售后/SH/pages/orderList/orderList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));
















































var _footer = _interopRequireDefault(__webpack_require__(/*! ../../components/footer.vue */ "D:\\Project\\App\\售后\\SH\\components\\footer.vue"));
var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =



{
  components: {
    footerNav: _footer.default },

  computed: _objectSpread({},
  (0, _vuex.mapState)({
    urlPre: function urlPre(state) {return state.urlPre;},
    userRole: function userRole(state) {return state.userRole;},
    userId: function userId(state) {return state.userId;} })),


  data: function data() {
    return {
      loadingText: {
        contentdown: "上拉显示更多",
        contentrefresh: "正在加载...",
        contentnomore: "没有更多数据了" },

      scrollLeft: 0,
      isClickChange: false,
      tabIndex: 0,
      OrderList: [],
      tabBars: ['待接单', '待预约', '上门服务', '服务完成'] };

  },
  onLoad: function onLoad() {
    this.diffKind(this.tabIndex);
  },
  onShow: function onShow() {
    console.log('created------');
    this.diffKind(this.tabIndex);
  },
  onPullDownRefresh: function () {var _onPullDownRefresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              this.diffKind(this.tabIndex);case 1:case "end":return _context.stop();}}}, _callee, this);}));function onPullDownRefresh() {return _onPullDownRefresh.apply(this, arguments);}return onPullDownRefresh;}(),

  // 		onPullDownRefresh: async function () {
  // 			console.log('refresh')
  // 			await new Promise((resolve, reject) => {
  // 				this.diffKind(this.tabIndex)
  // 			})
  // 			uni.stopPullDownRefresh()
  // 		},
  methods: {
    // 获取订单
    getOrderList_AZ: function getOrderList_AZ(URL) {var _this = this;
      uni.showLoading({
        title: '加载中' });

      uni.request({
        url: this.urlPre + URL,
        method: 'GET',
        data: {
          id: this.userId,
          shifuid: this.userId },

        header: {
          'content-type': 'application/x-www-form-urlencoded' },

        success: function success(res) {
          switch (res.data.result) {
            case 1:
              uni.hideLoading();
              _this.OrderList = res.data.applylist ? res.data.applylist : res.data.wangchengList;
              break;
            default:
              uni.hideLoading();
              uni.showToast({
                image: '/static/icons/attention.png',
                title: '订单获取失败!' });}



        },
        fail: function fail(err) {
          console.log('request fail', err);
          uni.hideLoading();
          uni.showModal({
            content: err.errMsg,
            showCancel: false });

        },
        complete: function complete() {
          uni.stopPullDownRefresh();
        } });

    },
    // 详情
    goDetail: function goDetail(e) {
      uni.navigateTo({
        url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id + '&orno=' + e.currentTarget.dataset.orno });

    },
    // 点击tab-bar
    tapTab: function () {var _tapTab = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(index) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!(
                this.tabIndex === index)) {_context2.next = 4;break;}return _context2.abrupt("return",
                false);case 4:

                this.tabIndex = index;
                this.diffKind(index);case 6:case "end":return _context2.stop();}}}, _callee2, this);}));function tapTab(_x) {return _tapTab.apply(this, arguments);}return tapTab;}(),


    // 区分tab类
    diffKind: function diffKind(curIdx) {
      switch (curIdx) {
        case 0:
          this.getOrderList_AZ('/page/selectapply.do');
          break;
        case 1:
          this.getOrderList_AZ('/page/daiyuyue.do');
          break;
        case 2:
          this.getOrderList_AZ('/page/smfw.do');
          break;
        case 3:
          this.getOrderList_AZ('/page/getWancheng.do');
          break;}

    },
    // 接单
    takeOrder: function takeOrder(e) {var _this2 = this;
      uni.showLoading({
        title: '加载中' });

      uni.request({
        url: this.urlPre + '/page/yuyue.do',
        data: {
          id: e.currentTarget.dataset.id,
          ftype: e.currentTarget.dataset.ftype },

        success: function success(res) {
          if (res.data.result == 1) {
            uni.showToast({
              icon: 'success',
              title: '接单成功!' });

            _this2.diffKind(_this2.tabIndex);
          }
        },
        fail: function fail(err) {
          console.log('request fail', err);
          uni.showModal({
            content: err.errMsg,
            showCancel: false });

        },
        complete: function complete() {
          uni.hideLoading();
        } });

    },
    // 打电话
    makeCall: function makeCall(e) {var _this3 = this;
      uni.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.tel,
        success: function success() {
          console.log("成功拨打电话");
          uni.request({
            url: _this3.urlPre + '/page/call.do',
            data: {
              id: e.currentTarget.dataset.id,
              ftype: e.currentTarget.dataset.ftype },

            success: function success(res) {
              switch (res.data.result) {
                case 1:
                  _this3.diffKind(_this3.tabIndex);
                  break;
                case 0:
                  uni.showToast({
                    image: '/static/icons/attention.png',
                    title: '订单状态修改失败!' });

                  break;
                default:
                  uni.showToast({
                    image: '/static/icons/attention.png',
                    title: '服务器繁忙!' });}


            },
            fail: function fail(err) {
              console.log('request fail', err);
              uni.showModal({
                content: err.errMsg,
                showCancel: false });

            },
            complete: function complete() {
              // uni.hideLoading()
            } });

        } });

    },
    // 预约
    makeOrder: function makeOrder(e) {var _this4 = this;
      uni.showLoading({
        title: '加载中' });

      uni.request({
        url: this.urlPre + '/page/Updatetype1.do',
        method: 'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded' },

        data: {
          id: e.currentTarget.dataset.id },

        success: function success(res) {
          if (res.data.result == 1) {
            uni.showToast({
              icon: 'success',
              title: '预约成功!' });

            _this4.diffKind(_this4.tabIndex);
          }
        },
        fail: function fail(err) {
          console.log('request fail', err);
          uni.showModal({
            content: err.errMsg,
            showCancel: false });

        },
        complete: function complete() {

        } });

    },
    // 扫码
    scanCode: function scanCode(e) {var _this5 = this;
      uni.scanCode({
        onlyFromCamera: true,
        success: function success(res) {
          uni.request({
            url: _this5.urlPre + '/page/selectewm.do',
            data: {
              id: e.currentTarget.dataset.id,
              ftype: e.currentTarget.dataset.ftype,
              QCode: res.result },

            success: function success(res) {
              switch (res.data.result) {
                case 1:
                  uni.showToast({
                    icon: 'success',
                    title: '扫码成功!' });

                  _this5.diffKind(_this5.tabIndex);
                  break;
                case 0:
                  uni.showToast({
                    image: '/static/icons/attention.png',
                    title: '订单状态修改失败!' });

                  break;
                default:
                  uni.showToast({
                    image: '/static/icons/attention.png',
                    title: '服务器繁忙!' });}


            },
            fail: function fail(err) {
              console.log('request fail', err);
              uni.showModal({
                content: err.errMsg,
                showCancel: false });

            },
            complete: function complete() {
            } });

        } });

    },
    // 签到
    sign: function sign(e) {var _this6 = this;
      uni.showModal({
        title: "提示",
        content: "确定进行签到",
        confirmText: "确定",
        cancelText: "取消",
        success: function success(res) {
          if (res.confirm) {
            console.log('sure');
            _this6.sureSign(e.currentTarget.dataset.id, e.currentTarget.dataset.ftype);
          } else {
            console.log('cancel');
          }
        } });

    },
    sureSign: function sureSign(id, ftype) {var _this7 = this;
      uni.showLoading({
        title: '加载中' });

      uni.getLocation({
        success: function success(res) {
          uni.request({
            url: _this7.urlPre + '/page/shangmen.do',
            data: {
              id: id,
              ftype: ftype,
              // 								lat: 31.87165,
              // 								lng: 121.18179
              lat: res.latitude, // 31.87165,
              lng: res.longitude // 121.18179
            },
            success: function success(res) {
              switch (res.data.result) {
                case 1:
                  uni.showToast({
                    icon: 'success',
                    title: '签到成功!' });

                  _this7.diffKind(_this7.tabIndex);
                  break;
                case 0:
                  uni.hideLoading();
                  uni.showToast({
                    image: '/static/icons/attention.png',
                    title: '签到失败!' });

                  break;
                default:
                  uni.hideLoading();
                  uni.showToast({
                    image: '/static/icons/attention.png',
                    title: '服务器繁忙!' });}


            },
            fail: function fail(err) {
              console.log('request fail', err);
              uni.hideLoading();
              uni.showModal({
                content: err.errMsg,
                showCancel: false });

            },
            complete: function complete() {
            } });

        },
        fail: function fail(res) {
          uni.showToast({
            image: '/static/icons/attention.png',
            title: '定位失败!' });

        } });

    },
    // 跳转安装上传页面
    toSubmitAZ: function toSubmitAZ(e) {
      uni.navigateTo({
        url: '/pages/submit/install?id=' + e.currentTarget.dataset.id + '&ftype=' + e.currentTarget.dataset.ftype + '&QCode=' + e.currentTarget.dataset.ewm + '&status=' + e.currentTarget.dataset.status });

    },
    // 签退
    toSignOut: function toSignOut(e) {var _this8 = this;
      var ID = e.currentTarget.dataset.id;
      var FTYPE = e.currentTarget.dataset.ftype;
      uni.showModal({
        title: "提示",
        content: '确定签退?',
        confirmText: "确定",
        cancelText: "取消",
        success: function success(res) {
          if (res.confirm) {
            console.log('sure');
            _this8.OutSign(ID, FTYPE);
          } else {
            console.log('cancel');
          }
        } });

    },
    toSignOut2: function toSignOut2(e) {var _this9 = this;
      var ID = e.currentTarget.dataset.id;
      uni.showActionSheet({
        itemList: ['空跑', '等通知', '返工', '完工'],
        success: function success(e) {
          switch (e.tapIndex) {
            case 0:
              _this9.modalOutSign('空跑', 0, ID);
              break;
            case 1:
              _this9.modalOutSign('等通知', 1, ID);
              break;
            case 2:
              _this9.modalOutSign('返工', 2, ID);
              break;
            case 3:
              _this9.modalOutSign('完工', 3, ID);
              break;}

        } });

    },
    modalOutSign: function modalOutSign(Txt, Idx, Id) {var _this10 = this;
      uni.showModal({
        title: "提示",
        content: '确定' + Txt + '?',
        confirmText: "确定",
        cancelText: "取消",
        success: function success(res) {
          switch (Idx) {
            case 0:
              _this10.OutSign(Id, 'kongpao');
              break;
            case 1:
              _this10.OutSign(Id, 'dengtongzhi');
              break;
            case 2:
              _this10.OutSign(Id, 'fangong');
              break;
            case 3:
              _this10.OutSign(Id, 9);
              break;}

        } });

    },
    OutSign: function OutSign(ID, FTYPE) {var _this11 = this;
      uni.showLoading({
        title: '加载中' });

      uni.request({
        url: this.urlPre + '/page/wancheng.do',
        data: {
          id: ID,
          ftype: FTYPE },

        success: function success(res) {
          switch (res.data.result) {
            case 1:
              uni.showToast({
                icon: 'success',
                title: '签退成功!' });

              _this11.diffKind(_this11.tabIndex);
              break;
            case 0:
              uni.hideLoading();
              uni.showToast({
                image: '/static/icons/attention.png',
                title: '签退失败!' });

              break;
            default:
              uni.hideLoading();
              uni.showToast({
                image: '/static/icons/attention.png',
                title: '服务器繁忙!' });}


        },
        fail: function fail(err) {
          console.log('request fail', err);
          uni.showModal({
            content: err.errMsg,
            showCancel: false });

        },
        complete: function complete() {
        } });

    },
    // 配送操作
    toSubmitPS: function toSubmitPS(e) {
      uni.navigateTo({
        url: '/pages/submit/deliver?id=' + e.currentTarget.dataset.id + '&ftype=' + e.currentTarget.dataset.ftype });

    },
    // 配送操作确认提示
    DeliverOver: function DeliverOver(e) {
      switch (this.tabIndex) {
        case 0:
          this.SureOver('/page/pswc1.do', '确认接单？', 0, e.target.dataset.id);
          break;
        case 1:
          this.SureOver('/page/pswc1.do', '确认提货？', 1, e.target.dataset.id);
          break;
        case 2:
          this.SureOver('/page/pswc.do', '确认完成？', 2, e.target.dataset.id);
          break;}

    },
    SureOver: function SureOver(Url, Tips, Status, ID) {var _this12 = this;
      uni.showModal({
        title: "提示",
        content: Tips,
        confirmText: "确定",
        cancelText: "取消",
        success: function success(res) {
          if (res.confirm) {
            uni.showLoading({
              title: '加载中' });

            uni.request({
              url: _this12.urlPre + Url,
              data: {
                id: ID,
                psstatus: Status },

              success: function success(res) {
                switch (res.data.result) {
                  case 1:
                    uni.showToast({
                      icon: 'success',
                      title: '操作成功!' });

                    _this12.diffKind(_this12.tabIndex);
                    break;
                  case 0:
                    uni.hideLoading();
                    uni.showToast({
                      image: '/static/icons/attention.png',
                      title: '操作失败!' });

                    break;
                  default:
                    uni.hideLoading();
                    uni.showToast({
                      image: '/static/icons/attention.png',
                      title: '服务器繁忙!' });}


              },
              fail: function fail(err) {
                console.log('request fail', err);
                uni.hideLoading();
                uni.showModal({
                  content: err.errMsg,
                  showCancel: false });

              },
              complete: function complete() {
              } });

          } else {
          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=style&index=0&id=1b3fe2b8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/Project/App/售后/SH/pages/orderList/orderList.vue?vue&type=style&index=0&id=1b3fe2b8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=template&id=1b3fe2b8&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/Project/App/售后/SH/pages/orderList/orderList.vue?vue&type=template&id=1b3fe2b8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "OrderListWrap uni-tab-bar" },
    [
      _c(
        "scroll-view",
        { staticClass: "uni-swiper-tab", attrs: { id: "tab-bar" } },
        _vm._l(_vm.tabBars, function(tab, index) {
          return _c(
            "view",
            {
              key: index,
              class: [
                "swiper-tab-list",
                _vm.tabIndex == index ? "TabActive" : ""
              ],
              attrs: {
                id: tab.id,
                "data-current": index,
                eventid: "2ab1cb94-0-" + index
              },
              on: {
                click: function($event) {
                  _vm.tapTab(index)
                }
              }
            },
            [_vm._v(_vm._s(tab))]
          )
        })
      ),
      _c(
        "view",
        { staticClass: "uni-list " },
        _vm._l(_vm.OrderList, function(OrderItem, OrderIdx) {
          return _c(
            "view",
            {
              key: OrderIdx,
              staticClass: "uni-list-cell",
              attrs: { "hover-class": "uni-list-cell-hover" }
            },
            [
              _c("view", { staticClass: "uni-media-list uni-pull-right" }, [
                _vm.userRole == 1 || _vm.userRole == 5
                  ? _c(
                      "view",
                      { staticClass: "uni-media-list-logo" },
                      [
                        OrderItem.fbstatus == 2 || OrderItem.fbstatus == "q"
                          ? _c(
                              "button",
                              {
                                attrs: {
                                  size: "mini",
                                  "data-id": OrderItem.id,
                                  "data-ftype": OrderItem.ftype,
                                  eventid: "2ab1cb94-1-" + OrderIdx
                                },
                                on: { click: _vm.takeOrder }
                              },
                              [_vm._v("接单")]
                            )
                          : _vm._e(),
                        OrderItem.fbstatus == 4
                          ? _c(
                              "button",
                              {
                                attrs: {
                                  size: "mini",
                                  "data-id": OrderItem.id,
                                  "data-ftype": OrderItem.ftype,
                                  eventid: "2ab1cb94-2-" + OrderIdx
                                },
                                on: { click: _vm.makeOrder }
                              },
                              [_vm._v("预约")]
                            )
                          : _vm._e(),
                        OrderItem.fbstatus == 3
                          ? _c(
                              "button",
                              {
                                attrs: {
                                  size: "mini",
                                  "data-id": OrderItem.id,
                                  "data-ftype": OrderItem.ftype,
                                  "data-tel": OrderItem.ftel,
                                  eventid: "2ab1cb94-3-" + OrderIdx
                                },
                                on: { click: _vm.makeCall }
                              },
                              [_vm._v("打电话")]
                            )
                          : _vm._e(),
                        OrderItem.fbstatus == 5
                          ? _c(
                              "button",
                              {
                                attrs: {
                                  size: "mini",
                                  "data-id": OrderItem.id,
                                  "data-ftype": OrderItem.ftype,
                                  eventid: "2ab1cb94-4-" + OrderIdx
                                },
                                on: { click: _vm.sign }
                              },
                              [_vm._v("签到")]
                            )
                          : _vm._e(),
                        OrderItem.fbstatus == 6 || OrderItem.fbstatus == 7
                          ? _c(
                              "button",
                              {
                                attrs: {
                                  size: "mini",
                                  "data-id": OrderItem.id,
                                  "data-ftype": OrderItem.ftype,
                                  "data-ewm": OrderItem.ewm,
                                  "data-status": OrderItem.fbstatus,
                                  eventid: "2ab1cb94-5-" + OrderIdx
                                },
                                on: { click: _vm.toSubmitAZ }
                              },
                              [_vm._v("上传")]
                            )
                          : _vm._e(),
                        OrderItem.fbstatus == 7 || OrderItem.fbstatus == 8
                          ? _c(
                              "button",
                              {
                                staticClass: "MarginT_20",
                                attrs: {
                                  size: "mini",
                                  "data-id": OrderItem.id,
                                  "data-ftype": OrderItem.ftype,
                                  eventid: "2ab1cb94-6-" + OrderIdx
                                },
                                on: { click: _vm.toSignOut }
                              },
                              [_vm._v("签退")]
                            )
                          : _vm._e(),
                        OrderItem.fbstatus == "A"
                          ? _c("image", {
                              staticClass: "FinishedImg",
                              attrs: { src: "/static/icons/finished.png" }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  : _vm._e(),
                _vm.userRole == 2
                  ? _c(
                      "view",
                      { staticClass: "uni-media-list-logo" },
                      [
                        OrderItem.psstatus == 0 || OrderItem.psstatus == "q"
                          ? _c(
                              "button",
                              {
                                attrs: {
                                  size: "mini",
                                  "data-id": OrderItem.id,
                                  "data-ftype": OrderItem.ftype,
                                  eventid: "2ab1cb94-7-" + OrderIdx
                                },
                                on: { click: _vm.DeliverOver }
                              },
                              [_vm._v("接单")]
                            )
                          : _vm._e(),
                        OrderItem.psstatus == 1
                          ? _c(
                              "button",
                              {
                                attrs: {
                                  size: "mini",
                                  "data-id": OrderItem.id,
                                  "data-ftype": OrderItem.ftype,
                                  eventid: "2ab1cb94-8-" + OrderIdx
                                },
                                on: { click: _vm.DeliverOver }
                              },
                              [_vm._v("提货")]
                            )
                          : _vm._e(),
                        OrderItem.psstatus == 2
                          ? _c(
                              "button",
                              {
                                attrs: {
                                  size: "mini",
                                  "data-id": OrderItem.id,
                                  "data-ftype": OrderItem.ftype,
                                  eventid: "2ab1cb94-9-" + OrderIdx
                                },
                                on: { click: _vm.toSubmitPS }
                              },
                              [_vm._v("上传")]
                            )
                          : _vm._e(),
                        OrderItem.psstatus == 3
                          ? _c("image", {
                              staticClass: "FinishedImg",
                              attrs: { src: "/static/icons/finished.png" }
                            })
                          : _vm._e()
                      ],
                      1
                    )
                  : _vm._e(),
                _c(
                  "view",
                  {
                    staticClass: "uni-media-list-body",
                    attrs: {
                      "data-id": OrderItem.id,
                      "data-orno": OrderItem.forderno,
                      eventid: "2ab1cb94-10-" + OrderIdx
                    },
                    on: { click: _vm.goDetail }
                  },
                  [
                    _c("view", { staticClass: "uni-media-list-body" }, [
                      OrderItem.ftype == 1
                        ? _c("image", {
                            staticClass: "diffImg",
                            attrs: { src: "/static/icons/az.png" }
                          })
                        : _vm._e(),
                      OrderItem.ftype == 0
                        ? _c("image", {
                            staticClass: "diffImg",
                            attrs: { src: "/static/icons/jl.png" }
                          })
                        : _vm._e(),
                      OrderItem.ftype == 3
                        ? _c("image", {
                            staticClass: "diffImg",
                            attrs: { src: "/static/icons/wx.png" }
                          })
                        : _vm._e(),
                      _c("text", [
                        _vm._v("订单号：" + _vm._s(OrderItem.forderno))
                      ]),
                      _c("text", [
                        _vm._v(
                          "地址：" +
                            _vm._s(
                              OrderItem.faddress ? OrderItem.faddress : "(无)"
                            )
                        )
                      ]),
                      _c("text", [
                        _vm._v(
                          "联系人：" +
                            _vm._s(
                              OrderItem.fpeople ? OrderItem.fpeople : "(无)"
                            )
                        )
                      ]),
                      _c("text", [
                        _vm._v(
                          "联系电话：" +
                            _vm._s(OrderItem.ftel ? OrderItem.ftel : "(无)")
                        )
                      ]),
                      _c("text", [
                        _vm._v(
                          "特别提醒：" +
                            _vm._s(
                              OrderItem.special_note
                                ? OrderItem.special_note
                                : "(无)"
                            )
                        )
                      ])
                    ])
                  ]
                )
              ])
            ]
          )
        })
      ),
      _c("footerNav", { attrs: { mpcomid: "2ab1cb94-0" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "D:\\Project\\App\\售后\\SH\\main.js?{\"page\":\"pages%2ForderList%2ForderList\"}":
/*!*****************************************************************************!*\
  !*** D:/Project/App/售后/SH/main.js?{"page":"pages%2ForderList%2ForderList"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "D:\\Project\\App\\售后\\SH\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _orderList = _interopRequireDefault(__webpack_require__(/*! ./pages/orderList/orderList.vue */ "D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_orderList.default));

/***/ }),

/***/ "D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue":
/*!**********************************************************!*\
  !*** D:/Project/App/售后/SH/pages/orderList/orderList.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderList_vue_vue_type_template_id_1b3fe2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderList.vue?vue&type=template&id=1b3fe2b8&scoped=true& */ "D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=template&id=1b3fe2b8&scoped=true&");
/* harmony import */ var _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderList.vue?vue&type=script&lang=js& */ "D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _orderList_vue_vue_type_style_index_0_id_1b3fe2b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderList.vue?vue&type=style&index=0&id=1b3fe2b8&scoped=true&lang=css& */ "D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=style&index=0&id=1b3fe2b8&scoped=true&lang=css&");
/* harmony import */ var _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orderList_vue_vue_type_template_id_1b3fe2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orderList_vue_vue_type_template_id_1b3fe2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b3fe2b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "D:/Project/App/售后/SH/pages/orderList/orderList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** D:/Project/App/售后/SH/pages/orderList/orderList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./orderList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=script&lang=js&");
/* harmony import */ var _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=style&index=0&id=1b3fe2b8&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** D:/Project/App/售后/SH/pages/orderList/orderList.vue?vue&type=style&index=0&id=1b3fe2b8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_style_index_0_id_1b3fe2b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./orderList.vue?vue&type=style&index=0&id=1b3fe2b8&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=style&index=0&id=1b3fe2b8&scoped=true&lang=css&");
/* harmony import */ var _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_style_index_0_id_1b3fe2b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_style_index_0_id_1b3fe2b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_style_index_0_id_1b3fe2b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_style_index_0_id_1b3fe2b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_style_index_0_id_1b3fe2b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=template&id=1b3fe2b8&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** D:/Project/App/售后/SH/pages/orderList/orderList.vue?vue&type=template&id=1b3fe2b8&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_template_id_1b3fe2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./orderList.vue?vue&type=template&id=1b3fe2b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!D:\\Project\\App\\售后\\SH\\pages\\orderList\\orderList.vue?vue&type=template&id=1b3fe2b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_template_id_1b3fe2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_Tools_EditTool_HBuilderX_HbuildX1_7_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_orderList_vue_vue_type_template_id_1b3fe2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["D:\\Project\\App\\售后\\SH\\main.js?{\"page\":\"pages%2ForderList%2ForderList\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/orderList/orderList.js.map
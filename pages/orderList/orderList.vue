<template>
	<view class="OrderListWrap uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab">
			<view v-for="(tab,index) in tabBars" :key="index" :class="['swiper-tab-list',tabIndex==index ? 'TabActive' : '']" :id="tab.id"
			 :data-current="index" @click="tapTab(index)">{{tab}}</view>
		</scroll-view>
		<view class="uni-list ">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(OrderItem,OrderIdx) in OrderList" :key="OrderIdx">
				<view class="uni-media-list uni-pull-right">
					<!-- 1 3 安装维修 -->
					<view class="uni-media-list-logo" v-if="userRole == 1 || userRole == 5">
						<button size="mini" :data-id='OrderItem.id' :data-ftype='OrderItem.ftype' v-if="OrderItem.fbstatus == 2 || OrderItem.fbstatus == 'q'" @click="takeOrder">接单</button>
						<!-- <button size="mini" :data-id='OrderItem.id' :data-ftype='OrderItem.ftype' v-if="!OrderItem.ewm && OrderItem.fbstatus == 3" @click="scanCode">扫码</button> -->
						<button size="mini" :data-id='OrderItem.id' :data-ftype='OrderItem.ftype' v-if="OrderItem.fbstatus == 4" @click="makeOrder">预约</button>
						<button size="mini" :data-id='OrderItem.id' :data-ftype='OrderItem.ftype' :data-tel='OrderItem.ftel' v-if="OrderItem.fbstatus == 3" @click="makeCall">打电话</button>
						<button size="mini" :data-id='OrderItem.id' :data-ftype='OrderItem.ftype' v-if="OrderItem.fbstatus == 5" @click="sign">签到</button>
						<button size="mini" :data-id='OrderItem.id' :data-ftype='OrderItem.ftype' :data-ewm='OrderItem.ewm' :data-status='OrderItem.fbstatus' v-if="OrderItem.fbstatus == 6 || OrderItem.fbstatus == 7" @click="toSubmitAZ">上传</button>
						<button size="mini" :data-id='OrderItem.id' :data-ftype='OrderItem.ftype' class="MarginT_20" v-if="OrderItem.fbstatus == 7 || OrderItem.fbstatus == 8" @click="toSignOut">签退</button>
						<image class="FinishedImg" src="/static/icons/finished.png" v-if="OrderItem.fbstatus == 'A'"></image>
					</view>
					<!-- 2 配送 -->
					<view class="uni-media-list-logo" v-if="userRole == 2">
						<button size="mini" :data-id='OrderItem.id' :data-ftype='OrderItem.ftype' v-if="OrderItem.psstatus == 0 || OrderItem.psstatus == 'q'" @click="DeliverOver">接单</button>
						<button size="mini" :data-id='OrderItem.id' :data-ftype='OrderItem.ftype' v-if="OrderItem.psstatus == 1" @click="DeliverOver">提货</button>
						<button size="mini" :data-id='OrderItem.id' :data-ftype='OrderItem.ftype' v-if="OrderItem.psstatus == 2" @click="toSubmitPS">上传</button>
						<!-- <button size="mini" :data-id='OrderItem.id' :data-ftype='OrderItem.ftype' v-if="OrderItem.psstatus == 3">确认完成</button> -->
						<image class="FinishedImg" src="/static/icons/finished.png" v-if="OrderItem.psstatus == 3"></image>
					</view>
					<!-- 订单 -->
					<view class="uni-media-list-body" @click="goDetail" :data-ftype='OrderItem.ftype' :data-id='OrderItem.id' :data-orno='OrderItem.FBillNo'>
						<view class="uni-media-list-body">
							<!-- 0  是监理   3 是维修 1 是安装排单 -->
							<image class="diffImg" src="/static/icons/az.png" v-if="OrderItem.ftype == 1"></image>
							<image class="diffImg" src="/static/icons/jl.png" v-if="OrderItem.ftype == 0"></image>
							<image class="diffImg" src="/static/icons/wx.png" v-if="OrderItem.ftype == 3"></image>
							<text>接单号：{{OrderItem.FBillNo}}</text>
							<text>排单号：{{OrderItem.forderno}}</text>
							<text>地址：{{OrderItem.faddress?OrderItem.faddress:'(无)'}}</text>
							<text>联系人：{{OrderItem.fpeople?OrderItem.fpeople:'(无)'}}</text>
							<text>联系电话：{{OrderItem.ftel?OrderItem.ftel:'(无)'}}</text>
							<text>特别提醒：{{OrderItem.special_note?OrderItem.special_note:'(无)'}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<footerNav></footerNav>
	</view>
</template>
<script>
	import footerNav from "../../components/footer.vue"
	import {
	    mapState,
	    mapActions
	} from 'vuex'
	export default {
		components: {
			footerNav
		},
		computed: {
			...mapState({
			  urlPre: state => state.urlPre,
			  userRole: state => state.userRole,
			  userId: state => state.userId
			})
		},
		data() {
			return {
				loadingText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				OrderList: [],
				tabBars: ['待接单', '待预约', '上门服务', '服务完成']
			}
		},
		onLoad: function() {
			this.diffKind(this.tabIndex)
		},
		onShow: function() {
			console.log('created------')
			this.diffKind(this.tabIndex)
		},
		onPullDownRefresh: async function () {
			this.diffKind(this.tabIndex)
		},
// 		onPullDownRefresh: async function () {
// 			console.log('refresh')
// 			await new Promise((resolve, reject) => {
// 				this.diffKind(this.tabIndex)
// 			})
// 			uni.stopPullDownRefresh()
// 		},
		methods: {
			// 获取订单
			getOrderList_AZ (URL) {
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url: this.urlPre + URL,
					method: 'GET',
					data: {
						id: this.userId,
						shifuid: this.userId
					},
					header: {
					  'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						switch (res.data.result) {
							case 1:
								uni.hideLoading()
								this.OrderList = res.data.applylist ? res.data.applylist : res.data.wangchengList
								break
							default:
								uni.hideLoading()
								uni.showToast({
									image: '/static/icons/attention.png',
									title: '订单获取失败!'
								})
						}
						
					},
					fail: (err) => {
						console.log('request fail', err)
						uni.hideLoading()
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						});
					},
					complete: () => {
						uni.stopPullDownRefresh()
					}
				});
			},
			// 详情
			goDetail(e) {
				uni.navigateTo({
					url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id + '&orno=' + e.currentTarget.dataset.orno + '&ftype=' + e.currentTarget.dataset.ftype
				})
			},
			// 点击tab-bar
			async tapTab(index) {
				if (this.tabIndex === index) {
					return false
				} else {
					this.tabIndex = index
					this.diffKind(index)
				}
			},
			// 区分tab类
			diffKind (curIdx) {
				switch (curIdx) {
				  case 0:
					this.getOrderList_AZ('/page/selectapply.do')
					break
				  case 1:
					this.getOrderList_AZ('/page/daiyuyue.do')
					break
				  case 2:
					this.getOrderList_AZ('/page/smfw.do')
					break
				  case 3:
					this.getOrderList_AZ('/page/getWancheng.do')
					break
				}
			},
			// 接单
			takeOrder (e) {
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url: this.urlPre + '/page/yuyue.do',
					data: {
						id: e.currentTarget.dataset.id,
						ftype: e.currentTarget.dataset.ftype
					},
					success: (res) => {
						if(res.data.result == 1){
							uni.showToast({
								icon: 'success',
								title: '接单成功!'
							})
							this.diffKind(this.tabIndex)
						}
					},
					fail: (err) => {
						console.log('request fail', err)
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						})
					},
					complete: () => {
						uni.hideLoading()
					}
				})
			},
			// 打电话
			makeCall (e) {
				uni.makePhoneCall({
					phoneNumber: e.currentTarget.dataset.tel,
					success: () => {
						console.log("成功拨打电话")
						uni.request({
							url: this.urlPre + '/page/call.do',
							data: {
								id: e.currentTarget.dataset.id,
								ftype: e.currentTarget.dataset.ftype
							},
							success: (res) => {
								switch (res.data.result) {
									case 1:
										this.diffKind(this.tabIndex)
										break
									case 0:
										uni.showToast({
											image: '/static/icons/attention.png',
											title: '订单状态修改失败!'
										})
										break
									default:
										uni.showToast({
											image: '/static/icons/attention.png',
											title: '服务器繁忙!'
										})
								}
							},
							fail: (err) => {
								console.log('request fail', err)
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								})
							},
							complete: () => {
								// uni.hideLoading()
							}
						})
					}
				})
			},
			// 预约
			makeOrder (e) {
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url: this.urlPre + '/page/Updatetype1.do',
					method: 'GET',
					header: {
					  'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						id: e.currentTarget.dataset.id
					},
					success: (res) => {
						if(res.data.result == 1){
							uni.showToast({
								icon: 'success',
								title: '预约成功!'
							})
							this.diffKind(this.tabIndex)
						}
					},
					fail: (err) => {
						console.log('request fail', err)
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						})
					},
					complete: () => {
						
					}
				})
			},
			// 扫码
			scanCode (e) {
				uni.scanCode({
					onlyFromCamera: true,
					success: (res) => {
						uni.request({
							url: this.urlPre + '/page/selectewm.do',
							data: {
								id: e.currentTarget.dataset.id,
								ftype: e.currentTarget.dataset.ftype,
								QCode: res.result
							},
							success: (res) => {
								switch (res.data.result) {
									case 1:
										uni.showToast({
											icon: 'success',
											title: '扫码成功!'
										})
										this.diffKind(this.tabIndex)
										break
									case 0:
										uni.showToast({
											image: '/static/icons/attention.png',
											title: '订单状态修改失败!'
										})
										break
									default:
										uni.showToast({
											image: '/static/icons/attention.png',
											title: '服务器繁忙!'
										})
								}
							},
							fail: (err) => {
								console.log('request fail', err)
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								})
							},
							complete: () => {
							}
						})
					}
				})
			},
			// 签到
			sign (e) {
				uni.showModal({
					title: "提示",
					content: "确定进行签到",
					confirmText: "确定",
					cancelText: "取消",
					success: (res) => {
						if (res.confirm) {
							console.log('sure')
							this.sureSign(e.currentTarget.dataset.id, e.currentTarget.dataset.ftype)
						} else {
							console.log('cancel')
						}
					}
				})
			},
			sureSign (id, ftype) {
				uni.showLoading({
					title: '加载中'
				})
				uni.getLocation({
					success: (res) => {
						uni.request({
							url: this.urlPre + '/page/shangmen.do',
							data: {
								id: id,
								ftype: ftype,
// 								lat: 31.87165,
// 								lng: 121.18179
								lat: res.latitude, // 31.87165,
								lng: res.longitude // 121.18179
							},
							success: (res) => {
								switch (res.data.result) {
									case 1:
										uni.showToast({
											icon: 'success',
											title: '签到成功!'
										})
										this.diffKind(this.tabIndex)
										break
									case 0:
										uni.hideLoading()
										uni.showToast({
											image: '/static/icons/attention.png',
											title: '签到失败!'
										})
										break
									default:
										uni.hideLoading()
										uni.showToast({
											image: '/static/icons/attention.png',
											title: '服务器繁忙!'
										})
								}
							},
							fail: (err) => {
								console.log('request fail', err)
								uni.hideLoading()
								uni.showModal({
									content: err.errMsg,
									showCancel: false
								})
							},
							complete: () => {
							}
						})
					},
					fail: (res) => {
						uni.showToast({
							image: '/static/icons/attention.png',
							title: '定位失败!'
						})
					}
				})
			},
			// 跳转安装上传页面
			toSubmitAZ (e) {
				uni.navigateTo({
					url: '/pages/submit/install?id=' + e.currentTarget.dataset.id + '&ftype=' + e.currentTarget.dataset.ftype + '&QCode=' + e.currentTarget.dataset.ewm + '&status=' + e.currentTarget.dataset.status
				})
			},
			// 签退
			toSignOut (e) {
				let ID = e.currentTarget.dataset.id
				let FTYPE = e.currentTarget.dataset.ftype
				uni.showModal({
					title: "提示",
					content: '确定签退?',
					confirmText: "确定",
					cancelText: "取消",
					success: (res) => {
						if (res.confirm) {
							console.log('sure')
							this.OutSign(ID, FTYPE)
						} else {
							console.log('cancel')
						}
					}
				})
			},
			toSignOut2 (e) {
				let ID = e.currentTarget.dataset.id
				uni.showActionSheet({
					itemList: ['空跑', '等通知', '返工','完工'],
					success: (e) => {
						switch (e.tapIndex) {
							case 0:
								this.modalOutSign('空跑', 0, ID)
								break
							case 1:
								this.modalOutSign('等通知', 1, ID)
								break
							case 2:
								this.modalOutSign('返工', 2, ID)
								break
							case 3:
								this.modalOutSign('完工', 3, ID)
								break
						}
					}
				})
			},
			modalOutSign (Txt,Idx,Id) {
				uni.showModal({
					title: "提示",
					content: '确定'+Txt+'?',
					confirmText: "确定",
					cancelText: "取消",
					success: (res) => {
						switch (Idx) {
						  case 0:
							this.OutSign(Id, 'kongpao')
							break
						  case 1:
							this.OutSign(Id, 'dengtongzhi')
							break
						  case 2:
							this.OutSign(Id, 'fangong')
							break
						  case 3:
							this.OutSign(Id, 9)
							break
						}
					}
				})
			},
			OutSign (ID,FTYPE) {
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url: this.urlPre + '/page/wancheng.do',
					data: {
						id: ID,
						ftype: FTYPE
					},
					success: (res) => {
						switch (res.data.result) {
							case 1:
								uni.showToast({
									icon: 'success',
									title: '签退成功!'
								})
								this.diffKind(this.tabIndex)
								break
							case 0:
								uni.hideLoading()
								uni.showToast({
									image: '/static/icons/attention.png',
									title: '签退失败!'
								})
								break
							default:
								uni.hideLoading()
								uni.showToast({
									image: '/static/icons/attention.png',
									title: '服务器繁忙!'
								})
						}
					},
					fail: (err) => {
						console.log('request fail', err)
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						})
					},
					complete: () => {
					}
				})
			},
			// 配送操作
			toSubmitPS (e) {
				uni.navigateTo({
					url: '/pages/submit/deliver?id=' + e.currentTarget.dataset.id + '&ftype=' + e.currentTarget.dataset.ftype
				})
			},
			// 配送操作确认提示
			DeliverOver (e) {
				switch (this.tabIndex) {
					case 0:
						this.SureOver('/page/pswc1.do','确认接单？',0,e.target.dataset.id)
						break
					case 1:
						this.SureOver('/page/pswc1.do', '确认提货？', 1, e.target.dataset.id)
						break
					case 2:
						this.SureOver('/page/pswc.do', '确认完成？', 2, e.target.dataset.id)
						break
				}
			},
			SureOver (Url, Tips, Status, ID) {
				uni.showModal({
					title: "提示",
					content: Tips,
					confirmText: "确定",
					cancelText: "取消",
					success: (res) => {
						if (res.confirm) {
							uni.showLoading({
								title: '加载中'
							})
							uni.request({
								url: this.urlPre + Url,
								data: {
									id: ID,
									psstatus: Status
								},
								success: (res) => {
									switch (res.data.result) {
										case 1:
											uni.showToast({
												icon: 'success',
												title: '操作成功!'
											})
											this.diffKind(this.tabIndex)
											break
										case 0:
											uni.hideLoading()
											uni.showToast({
												image: '/static/icons/attention.png',
												title: '操作失败!'
											})
											break
										default:
											uni.hideLoading()
											uni.showToast({
												image: '/static/icons/attention.png',
												title: '服务器繁忙!'
											})
									}
								},
								fail: (err) => {
									console.log('request fail', err)
									uni.hideLoading()
									uni.showModal({
										content: err.errMsg,
										showCancel: false
									})
								},
								complete: () => {
								}
							})
						} else {
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.OrderListWrap{
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		padding-bottom: 500upx;
	}
	.TabActive{
		font-size: 16px;
		height: 39px;
		font-weight: bold;
		color: #7ea7af;
		border-bottom: 2px solid #7ea7af;
	}
	.uni-swiper-tab{
		border-bottom: 0px;
		background: #FFFFFF;
	}
	.uni-media-list-body{
		width: 100%;
		height: 155px;
	}
	.uni-media-list-body text{
		width: 100%;
		height: 30px;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		display: inline-block;
	}
	.uni-list{
		background: transparent !important;
	}
	.uni-list-cell{
		background: #FFFFFF;
		margin-top: 20px;
	}
	.uni-list::before{
		background: #FFFFFF;
	}
	.uni-list::after{
		background: #FFFFFF;
	}
	.uni-list-cell::after{
		background: #FFFFFF;
	}
	.uni-media-list-body{
	}
	.uni-pull-right{
		padding-top: 35px;
	}
	.uni-media-list-logo{
		width: 70px;
		height: 155px;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}
	.uni-media-list-logo button{
		width: 70px;
		background: #7ea7af;
		color: #FFFFFF;
		padding-left: 0 !important;
		padding-right: 0 !important;
	}
	.FinishedImg{
		width: 50px;
		height: 50px;
		position: absolute;
		top:-36px;
		right: -12px;
		transform:rotate(90deg);
	}
	.diffImg{
		width: 45px;
		height: 45px;
		position: absolute;
		top:2px;
		left: 2px;
		transform:rotate(0deg);
	}
</style>

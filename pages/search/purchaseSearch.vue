<template>
	<view class="purchaseSearch">
		<!-- 订单列表 -->
		<view class="OrderList" v-if="orderList.length > 0">
			<view class="ResultItem" v-for="(orderItem,index) in orderList" :key="index" @click="goDetail" :data-ftype='orderItem.ftype' :data-id='orderItem.id' :data-orno='orderItem.FBillNo'>
				<view class="ItemBar">
					<text>接单号</text>
					<text>{{orderItem.FBillNo?orderItem.FBillNo:'(无)'}}</text>
				</view>
				<view class="ItemBar">
					<text>排单号</text>
					<text>{{orderItem.orderno?orderItem.orderno:'(无)'}}</text>
				</view>
				<view class="ItemBar">
					<text>订单状态</text>
					<text>{{orderItem.bpmstatusTxt}}</text>
				</view>
				<view class="ItemBar">
					<text>下单时间</text>
					<text>{{orderItem.lddate?orderItem.lddate:'(无)'}}</text>
				</view>
				<view class="ItemBar">
					<text>联系人</text>
					<text>{{orderItem.fcontact?orderItem.fcontact:'(无)'}}</text>
				</view>
				<view class="ItemBar">
					<text>联系电话</text>
					<text>{{orderItem.fmobile?orderItem.fmobile:'(无)'}}</text>
				</view>
				<view class="ItemBar">
					<text>地址</text>
					<text>{{orderItem.FDeliveryAddress?orderItem.FDeliveryAddress:'(无)'}}</text>
				</view>
				<view class="ItemBar">
					<text>货物名称</text>
					<text>{{orderItem.fname1?orderItem.fname1:'(无)'}}</text>
				</view>
			</view>
		</view>
		<!-- 为空显示 -->
		<view class="ResultListEmpty" v-if="orderList.length == 0">
			<image src="/static/icons/box-empty.png"></image>
			<text>暂无相关订单</text>
		</view>
		<!-- 筛选 -->
		<uni-drawer :visible="showRight" mode="right" @close="closeDrawer('right')">
			<view class="uni-list" style="padding-bottom: 10px;">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						物品名称
					</view>
					<view class="uni-list-cell-db TextAlignR">
						<input class="uni-input" v-model="goodsName" placeholder="请输入物品名称"/>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						客户姓名
					</view>
					<view class="uni-list-cell-db TextAlignR">
						<input class="uni-input" v-model="userName" placeholder="请输入客户姓名"/>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						订单号
					</view>
					<view class="uni-list-cell-db TextAlignR">
						<input class="uni-input" v-model="orderNo" placeholder="请输入订单号"/>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						手机号
					</view>
					<view class="uni-list-cell-db TextAlignR">
						<input class="uni-input" v-model="phone" placeholder="请输入手机号"/>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						地址
					</view>
					<view class="uni-list-cell-db TextAlignR">
						<input class="uni-input" v-model="address" placeholder="请输入地址"/>
					</view>
				</view>
				<view class="uni-list-cell MarginT_20">
					<view class="uni-list-cell-left">
						<button type="warn" size="mini" @click="search">查询</button>
					</view>
					<view class="uni-list-cell-db TextAlignR PaddingR_20">
						<button type="default" size="mini" @click="reset">重置</button>
					</view>
				</view>
			</view>
		</uni-drawer>
		<footerNav></footerNav>
	</view>
</template>

<script>
	import footerNav from "@/components/footer.vue"
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	import {
	    mapState,
	    mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				loading: false,
				goodsName: '',
				userName: '',
				orderNo: '',
				phone: '',
				address: '',
				showRight: false,
				orderList: []
			}
		},
		components: {
			footerNav,
			uniDrawer
		},
		computed: {
			...mapState({
			  urlPre: state => state.urlPre,
			  purchaseUnit: state => state.purchaseUnit
			})
		},
		onLoad: function () {
			this.search()
		},
		onPullDownRefresh: async function () {
			this.search()
		},
		methods: {
			// 详情
			goDetail(e) {
				uni.navigateTo({
					url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id + '&orno=' + e.currentTarget.dataset.orno + '&ftype=' + e.currentTarget.dataset.ftype
				})
			},
			// 重置查询条件
			reset: function () {
				this.goodsName = ''
				this.userName = ''
				this.orderNo = ''
				this.phone = ''
				this.address = ''
			},
			// 查询
			search: function() {
				uni.request({
					url: this.urlPre + '/page/getByywy.do?purchase=' + this.purchaseUnit + (this.goodsName ? '&fname1=' + this.goodsName: '') + (this.userName ? '&fcontact=' + this.userName: '') + (this.orderNo?'&fbillno=' + this.orderNo: '') + (this.phone?'&fmobile=' + this.phone: '') + (this.address?'&fdeliveryaddress=' + this.address : ''),
					method: 'GET',
					data: {
					},
					header: {
					  'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						switch (res.data.result) {
							case 1:
								this.orderList = res.data.orderList.map(item => {
									if (item.bpmstatus == 1) {
										item.bpmstatusTxt = '未排单'
									}
									if (item.bpmstatus == 2 || item.bpmstatus == 'q') {
										item.bpmstatusTxt = '待结单'
									}
									if (item.bpmstatus == 3 || item.bpmstatus == 4) {
										item.bpmstatusTxt = '待预约'
									}
									if (item.bpmstatus == 5 || item.bpmstatus == 6 || item.bpmstatus == 7 || item.bpmstatus == 8) {
										item.bpmstatusTxt = '上门服务'
									}
									if (item.bpmstatus == 'A') {
										item.bpmstatusTxt = '已完成'
									}
									return item
								})
								break
							default:
								uni.showToast({
									image: '/static/icons/attention.png',
									title: '订单获取失败!'
								})
						}
						
					},
					fail: (err) => {
						console.log('request fail', err);
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						});
					},
					complete: () => {
						uni.stopPullDownRefresh()
						uni.hideLoading()
					}
				})
			},
			// 展开查询条件抽屉
			show(e) {
				if (e === 'left') {
				} else {
					this.showRight = true
				}
			},
			// 关闭查询条件抽屉
			hide() {
				this.showRight = false
			},
			// 监听抽屉关闭
			closeDrawer(e) {
				this.search()
				this.showRight = false
			}
		},
		// 监听导航按钮事件
		onNavigationBarButtonTap(e) {
			this.showRight = !this.showRight
		},
		// 监听导航返回事件
		onBackPress() {
			if (this.showRight) {
				this.hide()
				return true
			}
		}
	}
</script>

<style scoped>
	.purchaseSearch{
		padding-bottom: 100px;
	}
	.uni-list-cell::after{
		background: transparent;
	}
	.uni-list:after{
		background: transparent;
	}
	.ResultItem{
		width: calc(100u% - 30px);
		padding: 10upx 15px;
		margin-bottom: 15px;
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
	}
	.ItemBar{
		width: 100%;
		height: 35px;
		line-height: 35px;
		display: flex;
		justify-content: space-between;
	}
</style>

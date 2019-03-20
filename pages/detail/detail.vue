<template>
	<view class="Detial">
		<view class="DetialCont">
			<view class="ItemBar">
				<text>订单号：</text>
				<text>{{orno}}</text>
			</view>
			<view class="ItemBar">
				<text>联系人：</text>
				<text>{{orderDetail.fpeople}}</text>
			</view>
			<view class="ItemBar">
				<text>联系电话：</text>
				<text>{{orderDetail.ftel}}</text>
			</view>
			<!-- 安装维修 -->
			<view class="ItemBar" v-if="userRole == 1 && orderDetail.fbstatus != '2'">
				<text>品名：</text>
				<text>{{orderDetail.pinming}}</text>
			</view>
			<!-- 配送 -->
			<view class="ItemBar" v-if="userRole == 2 && orderDetail.psstatus != '0'">
				<text>品名：</text>
				<text>{{orderDetail.pinming}}</text>
			</view>
			<view class="ItemBar" v-if="userRole == 1 && orderDetail.fbstatus != '2'">
				<text>数量：</text>
				<text>{{orderDetail.qty}}</text>
			</view>
			<view class="ItemBar" v-if="userRole == 2 && orderDetail.psstatus != '0'">
				<text>数量：</text>
				<text>{{orderDetail.qty}}</text>
			</view>
			<view class="ItemBar">
				<text>地址：</text>
				<text>{{orderDetail.faddress}}</text>
			</view>
			<!-- 配送 -->
			<view class="ItemBar" v-if="userRole == 2">
				<text>要求上门日期：</text>
				<picker v-if="orderDetail.psstatus == '2' && date != '无要求'" mode="date" :value="date"  @change="bindDate">
					<view class="uni-input" style="padding-right: 0;">{{date}}</view>
				</picker>
				<text v-else>{{date}}</text>
			</view>
			<!-- 安装维修 -->
			<view class="ItemBar" v-if="userRole == 1">
				<text>要求上门日期：</text>
				<picker v-if="date != '无要求' && (orderDetail.fbstatus == '3' || orderDetail.fbstatus == '5' || orderDetail.fbstatus == '6' || orderDetail.fbstatus == '7')" mode="date" :value="date"  @change="bindDate">
					<view class="uni-input" style="padding-right: 0;">{{date}}</view>
				</picker>
				<text v-else>{{date}}</text>
			</view>
			<view class="ItemBar">
				<text>交货日期：</text>
				<text>{{orderDetail.fdate?orderDetail.fdate:'(无)'}}</text>
			</view>
			<view class="ItemBar">
				<text>安装日期：</text>
				<text>{{orderDetail.azfdate?orderDetail.azfdate:'(无)'}}</text>
			</view>
			<view class="ItemBar">
				<text>任务：</text>
				<text>{{orderDetail.fcontent?orderDetail.fcontent:'(无)'}}</text>
			</view>
			<view class="ItemBar">
				<text>业务员：</text>
				<text>{{orderDetail.fshifu}}</text>
			</view>
		</view>
		<!-- 安装维修 -->
		<view v-if="userRole == 1">
			<view class="BottomBts" @click="modifyDate" v-if="orderDetail.fbstatus == '3' || orderDetail.fbstatus == '5' || orderDetail.fbstatus == '6' || orderDetail.fbstatus == '7'" mode="date" :value="date"  @change="bindDate">
				<text>保存修改AZ</text>
			</view>
		</view>
		<!-- 配送 -->
		<view v-if="userRole == 2">
			<view class="BottomBts" @click="modifyDate" v-if="orderDetail.psstatus == '2'" mode="date" :value="date"  @change="bindDate">
				<text>保存修改PS</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
	    mapState,
	    mapActions
	} from 'vuex'
	export default {
		data() {
			const initDate = this.getDate({
				format: true
			})
			return {
				id: '',
				orno: '',
				date: initDate,
				orderDetail: {}
			}
		},
		computed: {
			...mapState({
			  urlPre: state => state.urlPre,
			  userRole: state => state.userRole
			})
		},
		onLoad: function (option) {
			this.id = option.id
			this.orno = option.orno
			this.getDetail(option.id)
		},
		methods: {
			getDetail (ID) {
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url: this.urlPre + '/page/detail.do',
					method: 'GET',
					data: {
						id: ID
					},
					header: {
					  'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						switch (res.data.result) {
							case 1:
								this.date = (res.data.applylist[0].fgodate).slice(0, 10)
								this.orderDetail = res.data.applylist[0]
								break
							default:
								uni.showToast({
									image: '/static/icons/attention.png',
									title: '详情获取失败!'
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
						uni.hideLoading()
					}
				})
			},
			bindDate (e) {
				this.date = e.target.value
			},
			modifyDate () {
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url: this.urlPre + '/page/UpdateDate.do',
					method: 'GET',
					data: {
						id: this.id,
						fgodate: this.date
					},
					header: {
					  'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						switch (res.data.result) {
							case 1:
								uni.showToast({
									icon: 'success',
									title: '修改成功!'
								})
								this.getDetail(this.id)
								break
							default:
								uni.showToast({
									image: '/static/icons/attention.png',
									title: '修改失败!'
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
						uni.hideLoading()
					}
				})
			},
			getDate(type) {
				const date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth() + 1
				let day = date.getDate()
			
				if (type === 'start') {
					year = year - 60
				} else if (type === 'end') {
					year = year + 2
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day
				return `${year}-${month}-${day}`
			}
		}
	}
</script>

<style scoped>
	.ItemBar{
		height: 40;
		line-height: 40px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #efefef;
		padding: 0 15px;
		background: #FFFFFF;
	}
	.BottomBts{
		width: 100%;
		height: 45px;
		background: #e64340;
		position: fixed;
		left: 0;
		bottom: 0;
		line-height: 45px;
		text-align: center;
		color: #FFFFFF;
		font-size: 16px;
		font-weight: bold;
	}
</style>

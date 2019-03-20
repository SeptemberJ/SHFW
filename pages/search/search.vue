<template>
	<view class="Search">
			<view class="uni-list" style="padding-bottom: 10px;">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					开始日期
				</view>
				<view class="uni-list-cell-db TextAlignR">
					<picker mode="date" :value="dateStart" :end="yesterdayDate" @change="bindDateChangeS">
						<view class="uni-input">{{dateStart}}</view>
					</picker>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					结束日期
				</view>
				<view class="uni-list-cell-db TextAlignR">
					<picker mode="date" :value="dateEnd" :start="dateStart" :end="yesterdayDate" @change="bindDateChangeE">
						<view class="uni-input">{{dateEnd}}</view>
					</picker>
				</view>
			</view>
			<button size="mini" type="primary" :loading="loading" class="searchBt" @click="search">查询</button>
		</view>
		<!-- 查询结果 -->
		<view class="ResultList" v-if="resultList.length > 0">
			<text class="ResultTit">查询结果</text>
			<view class="ResultItem" v-for="(resultItem,index) in resultList" :key="index">
				<!-- 安装维修 -->
				<view class="ItemBar">
					<text>订单号</text>
					<text>{{resultItem.FBillNo}}</text>
				</view>
				<view class="ItemBar">
					<text>标准运费</text>
					<text>{{resultItem.azcost}}</text>
				</view>
				<view class="ItemBar">
					<text>上楼费</text>
					<text>{{resultItem.farecost}}</text>
				</view>
				<view class="ItemBar">
					<text>长途</text>
					<text>{{resultItem.distancecost}}</text>
				</view>
				<!-- 配送 -->
				<view class="ItemBar">
					<text>车费</text>
					<text>{{resultItem.farecost}}</text>
				</view>
				<view class="ItemBar">
					<text>餐费</text>
					<text>{{resultItem.mealscost}}</text>
				</view>
				<view class="ItemBar">
					<text>垫付材料费</text>
					<text>{{resultItem.materialcosts}}</text>
				</view>
				
				<view class="ItemBar">
					<text>其他费用</text>
					<text>{{resultItem.othercosts}}</text>
				</view>
				<view class="ItemBar">
					<text>总价</text>
					<text>{{resultItem.pay}}</text>
				</view>
			</view>
		</view>
		<view class="ResultListEmpty" v-if="resultList.length == 0">
			<image src="/static/icons/box-empty.png"></image>
			<text>暂无订单</text>
		</view>
	</view>
</template>

<script>
	import {
	    mapState,
	    mapActions
	} from 'vuex'
	import {formatTimeSimple} from '@/common/util.js'
	export default {
		data() {
			const initDate = this.getDate({
				format: true
			})
			return {
				resultList2: [],
				resultList: [
					{FBillNo: 'OR1g63y9',pay: 2000, azcost: 120, farecost: 123, distancecost: 122, othercosts: 200, farecost: 130, mealscost: 140, materialcosts: 150}
				],
				yesterdayDate: initDate,
				dateStart: initDate,
				dateEnd: initDate,
				loading: false
			}
		},
		computed: {
			...mapState({
			  urlPre: state => state.urlPre,
			  userId: state => state.userId
			})
		},
		onLoad: function() {
// 			let Now = new Date()
// 			let BeforeOneDay = Now.setDate(Now.getDate() - 1)
// 			let R = new Date(BeforeOneDay)
// 			this.yesterdayDate = formatTimeSimple(R)
		},
		methods: {
			bindDateChangeS: function(e) {
				this.dateStart = e.target.value
				if (new Date(e.target.value) > new Date(this.dateEnd)) {
					this.dateEnd = '请选择'
				}
			},
			bindDateChangeE: function(e) {
				this.dateEnd = e.target.value
// 				if (new Date(e.target.value) < new Date(this.dateStart)) {
// 					this.dateStart = ''
// 				}
			},
			search () {
				uni.request({
					url: this.urlPre + '/page/wanchengdate.do',
					method: 'GET',
					data: {
						begindate: this.dateStart,
						enddate: this.dateEnd,
						shifuid: this.userId
					},
					header: {
					  'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						switch (res.data.result) {
							case 1:
								this.resultList = res.data.oredrpaylist
								break
							default:
								uni.showToast({
									image: '/static/icons/attention.png',
									title: '查询失败!'
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
				// const date = new Date()
				const curDate = new Date()
				let beforeOneDay = curDate.setDate(curDate.getDate() - 1)
				const date = new Date(beforeOneDay)
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
	.Search{
		margin-bottom: 80px;
	}
	.uni-list-cell::after{
		background: transparent;
	}
	.searchBt{
		width: calc(100% - 30px);
		border-radius: 30px;
		border: 1px solid rgb(126, 167, 175);
		background: transparent;
		color: rgb(126, 167, 175);
		margin-top: 20px;
	}
	.ResultList{
		width: 100%;
		margin: 20px 0;
	}
	.ResultTit{
		width: 100%;
		height: 40px;
		display: block;
		background: #FFFFFF;
		line-height: 40px;
		padding-left: 15px;
		border-bottom: 1px solid #efefef;
		font-size: 18px;
		font-weight: bold;
	}
	.ResultItem{
		width: calc(100% - 30px);
		padding: 15px;
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
	.ResultListEmpty{
		text-align: center;
	}
	.ResultListEmpty text{
		color: #999;
	}
	.ResultListEmpty image{
		width: 80px;
		height: 80px;
		display: block;
		margin: 50px auto 0 auto;
	}
</style>

<template>
	<view class="FooterTab uni-flex ">
		<view v-if="userRole == 1 || userRole == 2 || userRole == 3 || userRole == 5" :class="[idx == tabIndex ? 'uni-flex-item uni-center activeTab' : 'uni-flex-item uni-center']" v-for="(Tab, idx) in tabList" :key="idx" :data-idx='idx' @click="changeTab">
			<image class="iconImg" :src="idx == tabIndex ? Tab.imgSrcA : Tab.imgSrcN"></image>
			<text class="tabTxt">{{Tab.text}}</text>
		</view>
		<view v-if="userRole == 4" :class="[idx == tabIndex ? 'uni-flex-item uni-center activeTab' : 'uni-flex-item uni-center']" v-for="(Tab, idx) in tabListPurchase" :key="idx" :data-idx='idx' @click="changeTab">
			<image class="iconImg" :src="idx == tabIndex ? Tab.imgSrcA : Tab.imgSrcN"></image>
			<text class="tabTxt">{{Tab.text}}</text>
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
			return {
				tabList: [
					{
						text: '订单',
						imgSrcN: '/static/icons/order.png',
						imgSrcA: '/static/icons/order_active.png'
					},
					{
						text: '查询',
						imgSrcN: '/static/icons/search.png',
						imgSrcA: '/static/icons/search_active.png'
					},
					{
						text: '我的',
						imgSrcN: '/static/icons/my.png',
						imgSrcA: '/static/icons/my_active.png'
					}
				],
				tabListPurchase: [
					{
						text: '查询',
						imgSrcN: '/static/icons/search.png',
						imgSrcA: '/static/icons/search_active.png'
					},
					{
						text: '我的',
						imgSrcN: '/static/icons/my.png',
						imgSrcA: '/static/icons/my_active.png'
					}
				]
			}
		},
		computed: {
			...mapState({
			  tabIndex: state => state.tabIndex,
			  userRole: state => state.userRole
			})
		},
		methods: {
			...mapActions([
			  'changeTabIndex'
			]),
			changeTab (e) {
				let Index = e.currentTarget.dataset.idx.toString()
				this.changeTabIndex(Index)
				switch (Index) {
					case '0':
						if (this.userRole == 4) {
							uni.redirectTo({
								url: '/pages/search/purchaseSearch'
							})
						} else {
							uni.redirectTo({
								url: '/pages/orderList/orderList'
							})
						}
						break
					case '1':
						if (this.userRole == 4) {
							uni.redirectTo({
								url: '/pages/my/my'
							})
						} else {
							uni.redirectTo({
								url: '/pages/search/search'
							})
						}
						break
					case '2':
						uni.redirectTo({
							url: '/pages/my/my'
						})
						break
					
				}
			}
		}
	}
</script>

<style scoped>
	.FooterTab{
		width: 100%;
		height: 50px;
		background: #efefef;
		position: fixed;
		bottom: 0;
		left: 0;
		padding-top:  5upx;
	}
	
	.iconImg{
		position: relative;
		display: block;
		width: 27px;
		height: 27px;
		margin: 0 auto;
		padding-top: 5upx;
	}
	.tabTxt{
		font-size: 10px;
		color: rgb(122, 126, 131);
	}
	.activeTab .tabTxt{
		color: #7ea7af;
	}
</style>

<template>
	<view class="Logout">
		<text class="UserName">{{userName}}</text>
		<!-- <uni-list>
			<uni-list-item title="当前版本" show-badge="true" :badge-text="version"></uni-list-item>
		</uni-list> -->
		<button type="warn" @click="logout" style="width: 90%;margin: 40px auto 10px auto;">退出登陆</button>
		<footerNav></footerNav>
	</view>
</template>

<script>
	import footerNav from "../../components/footer.vue"
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import {
	    mapState,
	    mapActions
	} from 'vuex'
	export default {
		data() {
			return {
			}
		},
		components: {
			footerNav,
			uniList,
			uniListItem
		},
		computed: {
			...mapState({
			  userName: state => state.userName,
			  version: state => state.version
			})
		},
		onShow: function() {
		},
		methods: {
			logout: function() {
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style>
	.Logout{
		width: 100%;
		margin: 40px auto 0 auto;
		/* margin: 40px auto;
		padding-bottom: 500upx; */
	}
	.UserName{
		width: 100%;
		text-align: center;
		font-size: 22px;
		margin-bottom: 50px;
		display: block;
	}
	.uni-list {
		background-color: #fff;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column
	}
	
	.uni-list:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}
	
	.uni-list:before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}
</style>

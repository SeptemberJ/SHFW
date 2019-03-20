<template>
	<view class="Logout">
		<text class="UserName">{{userName}}</text>
		<button type="warn" @click="logout">退出登陆</button>
	</view>
</template>

<script>
	import {
	    mapState,
	    mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
			}
		},
		components: {
		},
		computed: {
			...mapState({
			  userName: state => state.userName
			})
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
		width: 90%;
		text-align: center;
		margin: 40px auto;
	}
	.UserName{
		font-size: 22px;
		margin-bottom: 50px;
		display: block;
	}
</style>

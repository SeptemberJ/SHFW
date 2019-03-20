<template>
	<view class="Login">
		<view class="Logo">
			<image src="../../static/xuehua.png"></image>
		</view>
		<view class="InputGroup">
			<view class="uni-form-item uni-row">
				<view class="uni-icon uni-icon-person MarginR_10" style="color: #fff;"></view>
				<view class="with-fun">
					<input class="uni-input" v-model="username" placeholder="用户名"/>
				</view>
			</view>
		    <view class="uni-form-item uni-row" style="border-top: 1upx solid #fff;">
		    	<view class="uni-icon uni-icon-locked MarginR_10" style="color: #fff;"></view>
		    	<view class="with-fun">
		    		<input class="uni-input" v-model="password" placeholder="密码" :password="showPassword" />
		    		<view class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view>
		    	</view>
		    </view>
		</view>
		<button type="default" class="loginBt" @click="login">登 陆</button>
		<!-- <view class="operationBar uni-row">
		    <navigator url="../sign/sign">注册账号</navigator>
		    <text class="MarginLR_10">|</text>
		    <navigator url="../sign/sign">忘记密码</navigator>
		</view> -->
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
				username: '888',// 13814699340 13814699341 777  123  是配送的 2  888 123  是安装 1
				password: '123',// 123
				showPassword: true
			}
		},
		components: {
		},
		computed: {
			...mapState({
			  urlPre: state => state.urlPre
			})
		},
		methods: {
			...mapActions([
			  'updateUserInfo'
			]),
			changePassword: function() {
				this.showPassword = !this.showPassword;
			},
			login: function() {
				// 校验
				if (this.username == '') {
					uni.showToast({
					    image: '/static/icons/attention.png',
					    title: '用户名不能为空!'
					})
					return false
				}
				if (this.password == '') {
					uni.showToast({
					    image: '/static/icons/attention.png',
					    title: '密码不能为空!'
					})
					return false
				}
				this.loginRequest()
				
			},
			loginRequest: function() {
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url: this.urlPre + '/page/login.do',
					data: {
						username:this.username,
						password:this.password,
					},
					success: (res) => {
						switch (res.data.result) {
							case 1: //1安装    2送货
								this.updateUserInfo({'userId': res.data.id, 'userRole': res.data.ftype, 'userName': res.data.username})
								uni.switchTab({
									url: '/pages/orderList/orderList'
								})
								break
							case 2:
								uni.showToast({
								    image: '/static/icons/attention.png',
								    title: '密码错误!'
								})
								break
							  case 0:
								uni.showToast({
								    image: '/static/icons/attention.png',
								    title: '用户不存在!'
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
						console.log('request fail', err);
						uni.showModal({
							content: err.errMsg,
							showCancel: false
						});
					},
					complete: () => {
						// uni.hideLoading()
					}
				})
			}
		}
	}
</script>

<style scoped>
	.Login{
		width: 100%;
		height: 100vh;
		background: #b3c5cd;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* background-repeat: no-repeat;
		background-size: cover; */
	}
	.Logo{
		width: 100%;
		margin-top: 60px;
		margin-bottom: 80px;
		
	}
	.Logo image{
		width: 250upx;
		height: 250upx;
		display: block;
		margin: 0 auto;
	}
	.InputGroup{
		width: calc(100% - 2*35px);
		background: #7ea7af;
		padding: 0 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.InputGroup .uni-form-item{
		align-items: center;
	}
	.uni-form-item .with-fun{
		background: transparent;
		flex-grow: 1;
	}
	.uni-form-item .with-fun .uni-icon{
		color: #666666;
	}
	.uni-input{
		background: transparent;
		color: #fff !important;
	}
	.loginBt{
		width: calc(100% - 2*25px);
		border-radius: 0;
		margin-top: 40px;
	}
	.operationBar{
		width: 100%;
		text-align: center;
		margin-top: 10px;
		color: #fff;
	}
	.operationBar uni-navigator{
		width: 100px;
		display: inline-block !important;
	}
	.operationBar navigator{
		width: 100px;
		display: inline-block !important;
	}
</style>
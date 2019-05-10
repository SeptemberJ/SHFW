<template>
	<view class="Login">
		<!-- Logo -->
		<view class="Logo">
			<image src="../../static/Logo.png"></image>
		</view>
		<!-- 信息输入 -->
		<view class="InputGroup">
			<view class="uni-form-item uni-row">
				<!-- <view class="uni-icon uni-icon-person MarginR_10" style="color: #fff;"></view> -->
				<image src="../../static/icons/user.png" style="width: 20px;height: 20px;"></image>
				<view class="with-fun">
					<input class="uni-input" v-model="username" placeholder="用户名"/>
				</view>
			</view>
		    <view class="uni-form-item uni-row" style="border-top: 1upx solid #fff;">
		    	<!-- <view class="uni-icon uni-icon-locked MarginR_10" style="color: #fff;"></view> -->
				<image src="../../static/icons/password.png" style="width: 20px;height: 20px;"></image>
		    	<view class="with-fun">
		    		<input class="uni-input" v-model="password" placeholder="密码" :password="showPassword" />
		    		<!-- <view class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view> -->
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
				ing: 'https://t1.huanqiu.cn/85684d610ae55f35b206de48f7f4ec58.jpg',
				username: '', // 13814699340 13814699341 777  123  是配送的 2  888 123  是安装维修 1 3    1 123 2 123 购货 4
				password: '', // 123
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
		onLoad() {
		},
		methods: {
			...mapActions([
			  'updateUserInfo',
			  'changeTabIndex'
			]),
			changePassword: function() {
				this.showPassword = !this.showPassword
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
							case 1:
								// 登陆后初始化tabIndex
								this.changeTabIndex(0)
								// 更新用户信息
								this.updateUserInfo({'userId': res.data.id, 'userRole': res.data.ftype, 'userName': res.data.username, 'purchaseUnit': res.data.gouhuodanwei?res.data.gouhuodanwei:'' })
								// 根据用户类型跳转
								if (res.data.ftype == 4) {
									// 购货
									uni.redirectTo({
										url: '/pages/search/purchaseSearch'
									})
								} else {
									uni.redirectTo({
										url: '/pages/orderList/orderList'
									})
								}
								break
							case 2:
								uni.hideLoading()
								uni.showToast({
								    image: '/static/icons/attention.png',
								    title: '密码错误!'
								})
								break
							  case 0:
								uni.hideLoading()
								uni.showToast({
								    image: '/static/icons/attention.png',
								    title: '用户不存在!'
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
						});
					},
					complete: () => {
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
		margin-top: 40px;
		margin-bottom: 30px;
		
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
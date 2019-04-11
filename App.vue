<script>
	import {
	    mapState,
	    mapActions
	} from 'vuex'
	export default {
		onLaunch: function() {
			console.log('App Launch');
			// 当钱版本号
			var wgtVer=null
			if(plus){  
				// 获取本地应用资源版本号  
				plus.runtime.getProperty(plus.runtime.appid,(inf) => {  
					wgtVer=inf.version
					this.changeVersion(wgtVer)
					console.log("当前应用版本："+wgtVer) 
					// 检测升级
					uni.request({
						url: 'http://111.231.134.126:8081/btpdJK/page/apk.do', //检查更新的服务器地址
						data: {
						},
						success: (res) => {
							console.log('success', res);
							if (res.data.result.show_code > wgtVer) {
								// let openUrl = plus.os.name === 'iOS' ? res.data.iOS : res.data.Android;
								// 提醒用户更新
								uni.showModal({
									title: '更新提示',
									content: '是否选择更新',
									success: (showResult) => {
										if (showResult.confirm) {
											downWgt('http://111.231.134.126:8081/paidan/userfiles/apk/' + res.data.result.apk_file)
										}
									}
								})
							}
						}
					})
				})
			}else{  
				document.addEventListener('plusready',plusReady,false)
			}
// 			plus.runtime.getProperty(plus.runtime.appid,(inf) => {  
// 				this.changeVersion(inf.version)
// 			    console.log("当前应用版本："+inf.version)
// 			})
			
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			
			// 下载wgt文件  
			function downWgt(URL){
				var timeStrap = (new Date()).getTime()
				plus.nativeUI.showWaiting("下载apk文件...")
				plus.downloader.createDownload(URL, {filename:"_doc/update/"}, function(d,status){
					if ( status == 200 ) {
						console.log("下载apk成功："+d.filename)
						installWgt(d.filename)
					} else {
						console.log("下载apk失败！")
						plus.nativeUI.alert("下载apk失败！")
					}
					plus.nativeUI.closeWaiting()
				}).start()
			}
			
			// 更新应用资源
			function installWgt(path){
				plus.nativeUI.showWaiting("安装apk文件...")
				plus.runtime.install(path,{},function(){
					plus.nativeUI.closeWaiting()
					console.log("安装apk文件成功！")
					plus.nativeUI.alert("应用资源更新完成！",function(){
						plus.runtime.restart()
					})
				},function(e){
					plus.nativeUI.closeWaiting()
					console.log("安装apk文件失败["+e.code+"]："+e.message)
					plus.nativeUI.alert("安装apk文件失败["+e.code+"]："+e.message)
				})
			}
			// #endif
			// 个推测试
			uni.getProvider({
				service: 'push',
				success: function (res) {
					console.log('res.provider:' + res.provider)

					// 个推的名称为 igexin
					if (~res.provider.indexOf('igexin')) {
						uni.subscribePush({
							provider: 'igexin',
							success: function (res) {
								console.log('success:' + JSON.stringify(res))
								uni.onPush({
									provider: 'igexin',
									success: function () {
										console.log('监听透传成功')
										alert('监听透传成功')
									},
									callback: function (data) {
										console.log("接收到透传数据：" + JSON.stringify(data))
									}
								})
							}
						})
					}
				}
			})
// 			uni.onPush({
// 				provider: 'igexin',
// 				success: function () {
// 					console.log('监听透传成功2')
// 				},
// 				callback: function (data) {
// 					console.log("接收到透传数据2：" + JSON.stringify(data))
// 				}
// 			})
			// 个推测试 b49b1e384b4b8ceb804731a8ccfcc0ec
		},
		onShow: function() {
			// console.log('App Show'
			
		},
		methods: {
			...mapActions([
			  'changeVersion'
			]),
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
	@import './common/uni.css';

	/* 以下样式用于 hello uni-app 演示所需 */
	page {
		background-color: #F4F5F6;
		height: 100%;
		font-size: 28upx;
		line-height: 1.8;
	}

	.uni-header-logo {
		padding: 30upx;
		text-align: center;
		margin-top: 10upx;
	}

	.uni-header-logo image {
		width: 140upx;
		height: 140upx;
	}

	.uni-hello-text {
		color: #7A7E83;
	}

	.uni-hello-addfile {
		text-align: center;
		line-height: 300upx;
		background: #FFF;
		padding: 50upx;
		margin-top: 10px;
		font-size: 38upx;
		color: #808080;
	}
</style>

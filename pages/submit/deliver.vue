<template>
	<view style="padding-bottom: 40px;">
		<view class="uni-common-mt">
			<form>
				<!-- 图片 -->
				<view class="uni-list list-pd">
					<view class="uni-list-cell cell-pd">
						<view class="uni-uploader">
							<view class="uni-uploader-head">
								<view class="uni-uploader-title" style="color: grey;">请选择要上传的图片</view>
								<view class="uni-uploader-info">{{imageList.length}}/9</view>
							</view>
							<view class="uni-uploader-body">
								<view class="uni-uploader__files">
									<block v-for="(image,index) in imageList" :key="index">
										<view class="uni-uploader__file">
											<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
										</view>
									</block>
									<view class="uni-uploader__input-box">
										<view class="uni-uploader__input" @tap="chooseImage"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<button type="warn" :loading="loading" class="submitBt" @click="sumitInfo">提 交</button>
			</form>
		</view>
	</view>
</template>
<script>
	import {
	    mapState,
	    mapActions
	} from 'vuex'
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		data() {
			return {
				loading: false,
				orderId: '',
				// qCode:'',
				// qCodeOld:'',
				status:'',
				// note:'',
				imageList: [],
				copyTempFilePaths: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},
		computed: {
			...mapState({
			  urlPre: state => state.urlPre
			})
		},
		onLoad: function (option) {
			console.log(option)
			this.orderId = option.id
		},
		onUnload() {
			this.imageList = [],
			this.sourceTypeIndex = 2,
			this.sourceType = ['拍照', '相册', '拍照或相册'],
			this.sizeTypeIndex = 2,
			this.sizeType = ['压缩', '原图', '压缩或原图'],
			this.countIndex = 8;
		},
		methods: {
			// 选择图片
			chooseImage: async function() {
				if (this.imageList.length === 9) {
					let isContinue = await this.isFullImg();
					console.log("是否继续?", isContinue);
					if (!isContinue) {
						return;
					}
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths)
						this.copyTempFilePaths = this.imageList.concat(res.tempFilePaths)
					}
				})
			},
			// 图片是否超过限制张数
			isFullImg: function() {
				return new Promise((res) => {
					uni.showModal({
						content: "已经有9张图片了,是否清空现有图片？",
						success: (e) => {
							if (e.confirm) {
								this.imageList = [];
								res(true);
							} else {
								res(false)
							}
						},
						fail: () => {
							res(false)
						}
					})
				})
			},
			// 预览图片
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			// 提交
			sumitInfo: function(){
				if (this.imageList.length == 0) {
					uni.showToast({
						image: '/static/icons/attention.png',
						title: '图片至少一张!'
					})
					return false
				}
				this.uploadImg()
			},
			// 上传数据
			uploadImg: function(){
				uni.uploadFile({
					url: this.urlPre + '/page/psimage.do?id=' + this.orderId,
					filePath: this.imageList.splice(0, 1)[0],
					fileType: 'image',
					name: 'file',
					success: (res) => {
						if (res.data == 1) {
							if (this.imageList.length > 0) {
								this.uploadImg()
							} else {
								uni.showToast({
									title: '提交成功!',
									icon: 'success'
								})
								setTimeout(() => {
									uni.navigateBack()
								}, 1000)
							}
						} else {
							// 提交失败图片list恢复数据
							this.imageList = this.copyTempFilePaths
							uni.showToast({
								image: '/static/icons/attention.png',
								title: '图片上传失败!'
							})
						}
					},
					fail: (err) => {
						console.log('uploadImage fail', err);
						uni.showToast({
							image: '/static/icons/attention.png',
							title: '提交失败!'
						})
					}
				})
			}
		}
	}
</script>

<style>
	.cell-pd {
		padding: 22upx 30upx;
	}
	.list-pd {
		margin-top: 50upx;
	}
	.submitBt{
		width: 90%;
		margin: 80upx auto 80upx auto;
	}
</style>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		openid: null,
		userId: '',
		userName: '',
		userRole: '1', //1 3 安装维修 2 配送 4 购货  // 1  安装师傅   4  业务员   5 监理
		purchaseUnit: '',
		// urlPre: 'http://111.231.134.126:8082/btpdJK/', // 测试版
		urlPre: 'http://111.231.134.126:8081/btpdJK/',
		// urlPre: 'http://172.16.52.227:8082',
		imgPre: '',
		tabIndex: 0,
		version: '1'
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setVersion(state, version) {
			state.version = version
		},
		setUserInfo(state, Info) {
			state.userId = Info.userId
			state.userRole = Info.userRole
			state.userName = Info.userName
			state.purchaseUnit = Info.purchaseUnit
		},
		setTabIndex(state, Idx) {
			state.tabIndex = Idx
		}
	},
	actions: {
		updateUserInfo : function ({commit, state}, Info) {
			commit('setUserInfo', Info)
		},
		changeTabIndex : function ({commit, state}, Idx) {
			commit('setTabIndex', Idx)
		},
		changeVersion : function ({commit, state}, version) {
			commit('setVersion', version)
		},
		// lazy loading openid
		getUserOpenId: async function ({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function () { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		}
	}
})

export default store

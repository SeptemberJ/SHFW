import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		loginProvider: "",
		openid: null,
		userId: '',
		userName: 'liubai',
		userRole: '',
		urlPre: 'http://172.16.52.99:8082',
		// urlPre: 'http://172.16.52.61:8082',
		// urlPre: 'http://118.25.191.241:8088/shJK',
		// urlPre2: 'http://118.25.191.241:8088/slpdJK'
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
		setUserInfo(state, Info) {
			state.userId = Info.userId
			state.userRole = Info.userRole
			state.userName = Info.userName
		}
	},
	actions: {
		updateUserInfo : function ({commit, state}, Info) {
			commit('setUserInfo', Info)
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

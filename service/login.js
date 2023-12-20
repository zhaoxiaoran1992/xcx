import {
	myLoginRequest
} from "./index"

export function getLoginCode() {
	return new Promise((resolve, reject) => {
		uni.login({
			"provider": "weixin",
			"onlyAuthorize": true, // 微信登录仅请求授权认证
			timeout: 1000,
			success: res => {
				const {
					code
				} = res
				resolve(code)
			},
			fail: err => {
				console.log(err)
				reject(err)
			}
		})
	})
}

export function codeToToken(code) {
	return myLoginRequest.post("/wechat/WeChatLogin", {
		code
	})
}

export function checkToken() {
	return myLoginRequest.post("/auth", {}, true)
}

export function postFavorRequest(id) {
	return myLoginRequest.post("/api/favor", {
		id
	}, true)
}

export function checkSession() {
	return new Promise((resolve) => {
		uni.checkSession({
			success: () => {
				resolve(true)
			},
			fail: () => {
				resolve(false)
			}
		})
	})
}

export function getUserInfo() {
	return new Promise((resolve, reject) => {
		wx.getUserProfile({
			desc: '你好啊,李银河',
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
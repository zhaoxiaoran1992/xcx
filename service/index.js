//封装uni.request
import { TOKEN_KEY } from '../constants/token-const.js'

const token = uni.getStorageSync(TOKEN_KEY)

const BASE_URL = "http://123.207.32.32:9001"
// 登录
const LOGIN_BASE_URL = "http://192.168.100.148:8050"

class MyRequest {
  constructor(baseURL, authHeader = {}) {
    this.baseURL = baseURL
    this.authHeader = authHeader
  }
  request(url, method, params, isAuth = false, header = {}) {
    const finalHeader = isAuth ? { ...this.authHeader, ...header }: header
    return new Promise((resolve, reject) => {
      uni.request({
        url: this.baseURL + url,
        method: method,
        header: finalHeader,
        data: params,
        success: function(res) {
          resolve(res.data)
        },
        fail: reject
      })
    })
  }

  get(url, params, isAuth = false, header) {
    return this.request(url, "GET", params, isAuth, header)
  }

  post(url, data, isAuth = false, header) {
    return this.request(url, "POST", data, isAuth, header)
  }
}
const myRequest = new MyRequest(BASE_URL)
const myLoginRequest = new MyRequest(LOGIN_BASE_URL, {
  token
})
export {
	myRequest,
  myLoginRequest
}

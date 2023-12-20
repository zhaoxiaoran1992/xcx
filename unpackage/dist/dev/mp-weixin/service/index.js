"use strict";
const common_vendor = require("../common/vendor.js");
const constants_tokenConst = require("../constants/token-const.js");
const token = common_vendor.index.getStorageSync(constants_tokenConst.TOKEN_KEY);
const LOGIN_BASE_URL = "http://192.168.100.148:8050";
class MyRequest {
  constructor(baseURL, authHeader = {}) {
    this.baseURL = baseURL;
    this.authHeader = authHeader;
  }
  request(url, method, params, isAuth = false, header = {}) {
    const finalHeader = isAuth ? { ...this.authHeader, ...header } : header;
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: this.baseURL + url,
        method,
        header: finalHeader,
        data: params,
        success: function(res) {
          resolve(res.data);
        },
        fail: reject
      });
    });
  }
  get(url, params, isAuth = false, header) {
    return this.request(url, "GET", params, isAuth, header);
  }
  post(url, data, isAuth = false, header) {
    return this.request(url, "POST", data, isAuth, header);
  }
}
const myLoginRequest = new MyRequest(LOGIN_BASE_URL, {
  token
});
exports.myLoginRequest = myLoginRequest;

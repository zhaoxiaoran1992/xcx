"use strict";
const common_vendor = require("../common/vendor.js");
const service_index = require("./index.js");
function getLoginCode() {
  return new Promise((resolve, reject) => {
    common_vendor.index.login({
      "provider": "weixin",
      "onlyAuthorize": true,
      // 微信登录仅请求授权认证
      timeout: 1e3,
      success: (res) => {
        const {
          code
        } = res;
        resolve(code);
      },
      fail: (err) => {
        console.log(err);
        reject(err);
      }
    });
  });
}
function codeToToken(code) {
  return service_index.myLoginRequest.post("/wechat/WeChatLogin", {
    code
  });
}
function checkToken() {
  return service_index.myLoginRequest.post("/auth", {}, true);
}
function checkSession() {
  return new Promise((resolve) => {
    common_vendor.index.checkSession({
      success: () => {
        resolve(true);
      },
      fail: () => {
        resolve(false);
      }
    });
  });
}
exports.checkSession = checkSession;
exports.checkToken = checkToken;
exports.codeToToken = codeToToken;
exports.getLoginCode = getLoginCode;

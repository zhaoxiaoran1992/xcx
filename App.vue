<script>
	import { getLoginCode, codeToToken, checkToken, checkSession } from './service/login.js'
	import { TOKEN_KEY } from './constants/token-const.js'
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
			this.handleLogin()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			handleLogin: async function() {
				this.loginAction()
			    const token = uni.getStorageSync(TOKEN_KEY)
			    // token有没有过期
			    const checkResult = await checkToken()
			    // 判断session是否过期
			    const isSessionExpire = await checkSession()
			    if (!token || checkResult.errorCode || !isSessionExpire) {
			      this.loginAction()
			    }
			  },
			
			  loginAction: async function() {
			    // 1.获取code
			    const code = await getLoginCode()
			
			    // 2.将code发送给服务器
			    const result = await codeToToken(code)
			    const token = result.token
			    uni.setStorageSync(TOKEN_KEY, token)
			  }
		}
		
	}
</script>

<style lang="scss">
	// /*每个页面公共css */
	@import "@/uni_modules/uview-plus/index.scss";
	// /* #ifndef APP-NVUE */
	// @import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>

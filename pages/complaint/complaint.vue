<template>
	<view class="container">
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item name="name">
				<view class="text" style="margin-bottom: 10px">行业领域：</view>
				<uni-data-checkbox :value="formData.name" :localdata="industry" selectedColor="#1abc39"></uni-data-checkbox>
			</uni-forms-item>
			<view class="title">
				填写说明:
				<view>请根据投诉问题所属行业领域选择相应分类并填报相关线索、带*”的内容为必填项，其他为选填项，若需对多个单位进行投诉，请逐条填写。</view>
			</view>
			<uni-forms-item name="hobbys">
				<view class="agree">
					<uni-data-checkbox multiple v-model="formData.hobbys" :localdata="hobby" selectedTextColor='#000'></uni-data-checkbox>
					<view style='margin-left: 15px;color: #007aff;' @click="navigateTo('../provision/provision')">《劳动监察投诉须知》</view>
				</view>
			</uni-forms-item>
		</uni-forms>
		<button type="default" @click="submit" style="background-color: #007aff; color: #fff">下一步</button>
	</view>
	<u-tabbar :value="tabbarData" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
		<u-tabbar-item text="首页" icon="home-fill" @click="redirectTo('/pages/index/index')"></u-tabbar-item>
		<u-tabbar-item text="我要投诉" icon="chat-fill" ></u-tabbar-item>
	</u-tabbar>
</template>

<script>
export default {
	data() {
		return {
			tabbarData:1,
			industry: [
				{
					text: '工程建设领域',
					value: '0'
				},
				{
					text: '非工程建设领域',
					value: '1'
				}
			],
			hobby: [
				{
					text: '同意使用须知:',
					value: 0
				},
			],
			// 表单数据
			formData: {
				name: '0',
				hobbys: []
			},
			rules: {
				hobbys: {
					rules: [
						{
						format: 'array'
					},
					{
						validateFunction: function(rule, value, data, callback) {
							if (value.length < 1) {
								callback('请勾选使用须知')
							}
							return true
						}
					}
					]
				}
			}
		};
	},
	methods: {
		navigateTo(url){
			uni.navigateTo({
				url: url
			});
		},
		redirectTo(url){
					uni.redirectTo({
						url
					});
				},
		/**
		 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
		 * @param {String} name 字段名称
		 * @param {String} value 表单域的值
		 */
		// binddata(name,value){
		// 通过 input 事件设置表单指定 name 的值
		//   this.$refs.form.setValue(name, value)
		// },
		// 触发提交表单
		submit() {
			this.$refs.form
				.validate()
				.then((res) => {
					console.log('表单数据信息：', res);
					uni.navigateTo({
						url: '../complaintForm/complaintForm?name='+this.formData.name
					});
				})
				.catch((err) => {
					console.log('表单错误信息：', err);
				});
		}
	}
};
</script>

<style lang="less">
page {
	min-height: 100%;
}
.container {
	padding: 40rpx;
	font-size: 28rpx;
	line-height: 48rpx;
	background-color: #efeff4;
	height: 100%;
	.title {
		font-size: 14px;
		color: #b0b4bc;
		margin-bottom: 200px;
	}
	.agree{
		display: flex;
		align-items: center;
	}
	
	.checklist-group {
		display: flex;
		flex-direction: column !important;
		.checklist-box {
			margin: 10px 0 !important;
		}
		
		// .radio__inner {
		// 	width: 12px !important;
		// 	height: 12px !important;
		// 	.radio__inner-icon {
		// 		width: 6px !important;
		// 		height: 6px !important;
		// 	}
		// }
	}
}
</style>

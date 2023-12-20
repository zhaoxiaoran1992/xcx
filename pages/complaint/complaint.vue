<template>
	<view class="container">
		<u-form labelPosition="left" :model="userInfo" :rules="rules" ref="uForm">
			<u-form-item prop="userInfo.name" borderBottom ref="item1">
				<text class="u-block__title">行业领域:</text>
				<u-radio-group v-model="userInfo.name" placement="column" size="14px">
					<u-radio shape="circle" label="工程建设领域" name="0" labelSize="12px"></u-radio>
					<u-radio shape="circle" label="非工程建设领域" name="1" labelSize="12px"></u-radio>
				</u-radio-group>
			</u-form-item>
			<view class="title">
				填写说明:
				<view>请根据投诉问题所属行业领域选择相应分类并填报相关线索、带*”的内容为必填项，其他为选填项，若需对多个单位进行投诉，请逐条填写。</view>
			</view>
			<u-form-item prop="userInfo.name" borderBottom ref="item1">
				<view class="agree">
					<u-checkbox-group v-model="checkboxValue1" placement="column">
						<u-checkbox :customStyle="{ marginBottom: '8px' }" label="同意使用须知" name="0"></u-checkbox>
					</u-checkbox-group>
					<view style="margin-left: 15px; color: #007aff" @click="navigateTo('../provision/provision')">《劳动监察投诉须知》</view>
				</view>
			</u-form-item>
		</u-form>

		<u-button @click="submit">下一步</u-button>
	</view>
	<u-tabbar :value="tabbarData" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
		<u-tabbar-item text="首页" icon="home-fill" @click="redirectTo('/pages/index/index')"></u-tabbar-item>
		<u-tabbar-item text="我要投诉" icon="chat-fill"></u-tabbar-item>
	</u-tabbar>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
const tabbarData = ref(1);
const uForm = ref();
const userInfo = reactive({
	name: '0'
});
const rules = reactive({
	'userInfo.name': {
		type: 'string',
		required: true,
		message: '请填写姓名',
		trigger: ['blur', 'change']
	},
	'userInfo.sex': {
		type: 'string',
		max: 1,
		required: true,
		message: '请选择男或女',
		trigger: ['blur', 'change']
	}
});
const checkboxValue1 = ref([]);

const redirectTo = (url: string) => {
	uni.redirectTo({
		url
	});
};
const navigateTo = (url: string) => {
	uni.navigateTo({
		url
	});
};
console.log('uni======>', uni);
const submit = () => {
	uni.navigateTo({
		url: '../complaintForm/complaintForm?name=' + userInfo.name
	});
	uForm.value
		.validate()
		.then((res: any) => {
			uni.$u.toast('校验通过');
			uni.navigateTo({
				url: '../complaintForm/complaintForm?name=' + userInfo.name
			});
		})
		.catch((errors: any) => {
			uni.$u.toast('校验失败');
		});
};
// export default {
// 	data() {
// 		return {
//
// 			industry: [
// 				{
// 					text: '工程建设领域',
// 					value: '0'
// 				},
// 				{
// 					text: '非工程建设领域',
// 					value: '1'
// 				}
// 			],
// 			hobby: [
// 				{
// 					text: '同意使用须知:',
// 					value: 0
// 				}
// 			],
// 			// 表单数据
// 			formData: {
// 				name: '0',
// 				hobbys: []
// 			},
// 			rules: {
// 				hobbys: {
// 					rules: [
// 						{
// 							format: 'array'
// 						},
// 						{
// 							validateFunction: function (rule, value, data, callback) {
// 								if (value.length < 1) {
// 									callback('请勾选使用须知');
// 								}
// 								return true;
// 							}
// 						}
// 					]
// 				}
// 			}
// 		};
// 	},
// 	methods: {
//
// 		redirectTo(url) {
// 			uni.redirectTo({
// 				url
// 			});
// 		},
// 		/**
// 		 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
// 		 * @param {String} name 字段名称
// 		 * @param {String} value 表单域的值
// 		 */
// 		// binddata(name,value){
// 		// 通过 input 事件设置表单指定 name 的值
// 		//   this.$refs.form.setValue(name, value)
// 		// },
// 		// 触发提交表单
// 		submit() {
// 			this.$refs.form
// 				.validate()
// 				.then((res) => {
// 					console.log('表单数据信息：', res);
// 					uni.navigateTo({
// 						url: '../complaintForm/complaintForm?name=' + this.formData.name
// 					});
// 				})
// 				.catch((err) => {
// 					console.log('表单错误信息：', err);
// 				});
// 		}
// 	}
// };
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
	.agree {
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

$u: any; [x: string]: any;

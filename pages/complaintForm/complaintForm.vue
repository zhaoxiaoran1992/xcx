<template>
	<view class="container">
		<uni-forms ref="form" :modelValue="formData" :rules="rules" label-width="120px">
			<uni-group title="基本信息" margin-top="20">
				<uni-forms-item label="反映人姓名" required name="name">
					<uni-easyinput :inputBorder="false" v-model="formData.name" placeholder="请输入反映人姓名" />
				</uni-forms-item>
				<uni-forms-item label="反映人联系方式" required name="name">
					<uni-easyinput :inputBorder="false" v-model="formData.name" placeholder="请输入反映人联系方式" maxlength="13" />
				</uni-forms-item>
				<uni-forms-item label="反映人身份证号" required name="name">
					<uni-easyinput :inputBorder="false" v-model="formData.name" placeholder="请输入反映人身份证号" />
				</uni-forms-item>
				<uni-forms-item label="事发地" required name="name">
					<uni-data-picker
						:inputBorder="false"
						placeholder="请选择事发地"
						popup-title="请选择事发地"
						:localdata="dataTree"
						v-model="formData.name"
						@change="onchange"
					></uni-data-picker>
				</uni-forms-item>
				<uni-forms-item label="事发时间" required name="name">
					<uni-datetime-picker
						type="date"
						:end="dayjs().format('YYYY-MM-DD')"
						:border="false"
						v-model="formData.name"
						@change="onchange"
						style='padding-left: 10px;'
					>
					<uni-easyinput solt='default' :inputBorder="false" v-model="formData.name" placeholder="请选择事发时间" />
					</uni-datetime-picker>
					
				</uni-forms-item>
				<uni-forms-item label="信访涉及人数" required name="name">
					<uni-easyinput :inputBorder="false" v-model="formData.name" placeholder="请输入信访涉及人数" />
				</uni-forms-item>
				<uni-forms-item label="投诉单位名称" required name="name">
					<uni-easyinput :inputBorder="false" v-model="formData.name" placeholder="请输入投诉单位名称" />
				</uni-forms-item>
				<uni-forms-item label="单位负责人姓名" required name="name">
					<uni-easyinput :inputBorder="false" v-model="formData.name" placeholder="请输入单位负责人姓名" />
				</uni-forms-item>
				<uni-forms-item label="单位负责人联系方式" required name="name">
					<uni-easyinput :inputBorder="false" v-model="formData.name" placeholder="请输入单位负责人联系方式" maxlength="13" />
				</uni-forms-item>
				<uni-forms-item label="单位地址" required name="name">
					<uni-easyinput :inputBorder="false" v-model="formData.name" placeholder="请输入单位地址" />
				</uni-forms-item>
				<uni-forms-item label="单位行业分类" required name="name">
					<uni-data-picker
						:inputBorder="false"
						placeholder="请选择单位行业分类"
						popup-title="请选择单位行业分类"
						:localdata="dataTree"
						v-model="formData.name"
						@change="onchange"
					></uni-data-picker>
				</uni-forms-item>
			</uni-group>
			<uni-group title="工程建设领域额外填写项" margin-top="20" v-if="dd">
				
				<uni-forms-item label="涉及项目名称" required name="name">
					<uni-data-picker
						:inputBorder="false"
						placeholder="请选择涉及项目名称"
						popup-title="请选择涉及项目名称"
						:localdata="dataTree"
						v-model="formData.name"
						@change="onchange"
					></uni-data-picker>
				</uni-forms-item>
				<uni-forms-item label="项目投资分类" required name="name">
					<uni-data-picker
						:inputBorder="false"
						placeholder="请选择项目投资分类"
						popup-title="请选择项目投资分类"
						:localdata="dataTree"
						v-model="formData.name"
						@change="onchange"
					></uni-data-picker>
				</uni-forms-item>
				<uni-forms-item label="项目主管单位分类" required name="name">
					<uni-data-picker
						:inputBorder="false"
						placeholder="请选择项目主管单位分类"
						popup-title="请选择项目主管单位分类"
						:localdata="dataTree"
						v-model="formData.name"
						@change="onchange"
					></uni-data-picker>
				</uni-forms-item>
			</uni-group>
			<uni-group title="投诉内容" margin-top="20" v-if="dd">
				
				<uni-forms-item label="投诉分类" required name="name">
					<classify></classify>
				</uni-forms-item>
				<uni-forms-item label="基本情况摘要" required name="name">
					<uni-easyinput type="textarea" autoHeight v-model="formData.name" placeholder="请输入基本情况摘要"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="投诉附件" required name="name">
					<uni-file-picker limit="9" file-mediatype="video" title="最多选择9个视频"></uni-file-picker>
				</uni-forms-item>
			</uni-group>
		</uni-forms>
		<button type="default" @click="submit" style="background-color: #007aff; color: #fff;margin:15px;">下一步</button>
	</view>
</template>

<script>
import dayjs from 'dayjs';
import classify from './cpts/classify.vue'
export default {
	components:{classify},
	data() {
		return {
			dd:true,
			dayjs,
			formData: {
				name: ''
			},
			dataTree: [
				{
					text: '一年级',
					value: '1-0',
					children: [
						{
							text: '1.1班',
							value: '1-1'
						},
						{
							text: '1.2班',
							value: '1-2'
						}
					]
				},
				{
					text: '二年级',
					value: '2-0',
					children: [
						{
							text: '2.1班',
							value: '2-1'
						},
						{
							text: '2.2班',
							value: '2-2'
						}
					]
				},
				{
					text: '三年级',
					value: '3-0',
					disable: true
				}
			],
			rules: {
				hobbys: {
					rules: [
						{
							format: 'array'
						},
						{
							validateFunction: function (rule, value, data, callback) {
								if (value.length < 1) {
									callback('请勾选使用须知');
								}
								return true;
							}
						}
					]
				}
			}
		};
	},
	methods: {
		onchange(e) {
			console.log('onchange:', e);
		},
		// 触发提交表单
		submit() {
			this.$refs.form
				.validate()
				.then((res) => {
					console.log('表单数据信息：', res);
				})
				.catch((err) => {
					console.log('表单错误信息：', err);
				});
		}
	},
	onLoad: function (option) {
		//option为object类型，会序列化上个页面传递的参数
		console.log(option.name); //打印出上个页面传递的参数。
		this.dd=option.name==0?true:false
	}
};
</script>

<style lang="less">
page {
	min-height: 100%;
	padding-bottom: 50px;
}
.container {
	font-size: 28rpx;
	line-height: 48rpx;
	background-color: #fff;
	height: 100%;
	.input-value-border {
		border: none !important;
	}
	.icon-calendar{
		display:none;
	}
}
</style>

<template>
	<view>
		<uni-easyinput :inputBorder="false" v-model="name" :placeholder="placeholder" @focus="toggle('bottom')" />
		<uni-popup ref="popup" type="bottom" background-color="#fff">底部弹出 Popup</uni-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			placeholder: '请选择',
			type: 'center',
			msgType: 'success',
			messageText: '这是一条成功提示',
			value: ''
		};
	},
	methods: {
		change() {},
		toggle(type) {
			this.type = type;
			// open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
			this.$refs.popup.open(type);
		}
	}
};
</script>

<style lang="less">
</style>

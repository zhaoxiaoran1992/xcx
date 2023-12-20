<template>
	<view class="container">
		<u-navbar title="投诉维权" placeholder="true">
			<template #left>
				<u-icon name="scan" size="20" bold="true" @click="scanLogin"></u-icon>
			</template>
		</u-navbar>
		<view class="content">
			<image src="../../static/headerImg.png" class="header-image" />
			<view class="index_login">
				<view class="index_login_left">
					<u-avatar icon="account-fill" fontSize="30"></u-avatar>
					<view>
						<text>微信用户</text>
					</view>
					<view style="width: 90px">
						<u-button type="primary" text="点击去投诉" size="mini" color="green" @click="redirectTo('/pages/complaint/complaint')"></u-button>
					</view>
				</view>
				<view class="index_login_right">
					<view class="index_login_right_look" style="margin-bottom: 10px" @click="navigateTo('/pages/guide/guide')">
						<view>
							<u-text text="投诉维权指南"></u-text>
							<u-text text="去查看" color="#c9c9c9" size="12px"></u-text>
						</view>
						<u-icon name="arrow-right"></u-icon>
					</view>
					<view class="index_login_right_look" @click="navigateTo('/pages/department/department')">
						<view>
							<u-text text="有关部门公示"></u-text>
							<u-text text="去查看" color="#c9c9c9" size="12px"></u-text>
						</view>
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
			</view>
			<u-subsection :list="list" mode="button"  :current="curNow" @change="sectionChange"></u-subsection>
			<view class="u-page">
					<u-list
						@scrolltolower="scrolltolower"
					>
						<u-list-item
							v-for="(item, index) in indexList"
							:key="index"
						>
							<u-cell
								:title="`列表长度-${index + 1}`"
							>
								<template #icon>
									<u-avatar
										shape="square"
										size="35"
										:src="item.url"
										customStyle="margin: -3px 5px -3px 0"
									></u-avatar>
								</template>
							</u-cell>
						</u-list-item>
					</u-list>
				</view>
		</view>
		
		<u-tabbar :value="tabbarData" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item text="首页" icon="home-fill"></u-tabbar-item>
			<u-tabbar-item text="我要投诉" icon="chat-fill" @click="redirectTo('/pages/complaint/complaint')"></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue';
const tabbarData = ref(0);
const curNow=ref(0)
const scanLogin = () => {
	uni.scanCode({
		success: async (res) => {
			console.log('条码类型：' + res.scanType);
			console.log('条码内容：' + res.result);
		}
	});
};
const list = ref([
	{
		name: '已投诉'
	},
	{
		name: '处理中'
	},
	{
		name: '已处理'
	}
]);

const sectionChange=(index:number)=>{
	curNow.value = index
};
const navigateTo = (url: string) => {
	uni.navigateTo({
		url
	});
};
const redirectTo = (url: string) => {
	uni.redirectTo({
		url
	});
};
const indexList = reactive([]);
const urls = [
  'https://cdn.uviewui.com/uview/album/1.jpg',
  'https://cdn.uviewui.com/uview/album/2.jpg',
  'https://cdn.uviewui.com/uview/album/3.jpg',
  'https://cdn.uviewui.com/uview/album/4.jpg',
  'https://cdn.uviewui.com/uview/album/5.jpg',
  'https://cdn.uviewui.com/uview/album/6.jpg',
  'https://cdn.uviewui.com/uview/album/7.jpg',
  'https://cdn.uviewui.com/uview/album/8.jpg',
  'https://cdn.uviewui.com/uview/album/9.jpg',
  'https://cdn.uviewui.com/uview/album/10.jpg',
];


const scrolltolower = () => {
  loadmore();
};

const loadmore = () => {
  for (let i = 0; i < 30; i++) {
    indexList.push({
      url: urls[uni.$u.random(0, urls.length - 1)],
    });
  }
};
loadmore();
</script>

<style lang="less">
.header-image {
	width: 100%;
	height: 60px;
}
.container {
	min-height: 100%;
	width: 100%;
	.content {
		padding: 10px;
		.header-image {
			width: 100%;
			height: 60px;
		}
		.index_login {
			display: flex;
			justify-content: space-between;
			margin-bottom: 10px;
			.index_login_left {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				box-shadow: 0 0px 4px 0px #c9c9c9;
				border-radius: 5px;
				& > view {
					margin: 5px 0;
				}
			}
			.index_login_right_look {
				box-shadow: 0 0px 4px 0px #c9c9c9;
				border-radius: 5px;
				line-height: 20px;
				padding: 8px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}
			& > view {
				width: 48%;
			}
		}
	}
}
</style>

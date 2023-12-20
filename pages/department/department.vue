<template>
	<view>
		<view class="department" v-for="(item, index) in allArr" :key="index">
			<view style='font-size: 16px;font-weight: bold;'>{{ item.unit }}</view>
			<view style='color: #ab9595;border-bottom: 1px solid #c9c9c9;'>{{ item.address }}</view>
			<view>
				联系电话: {{ item.Telephone.length>10?item.Telephone:'0792-'+item.Telephone }}
				<span class="phone">
					<u-icon name="phone-fill" bold='true' color="#1cd66c" @click="makePhoneCall(item.Telephone)"></u-icon>
				</span>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			allArr: [
				{
					unit: '九江市劳动保障监察支队',
					address: '市民服务中心西附楼C120-122',
					Telephone: '8587940'
				},
				{
					unit: '共青城市劳动保障监察大队',
					address: '共青城市高新区科技一大道66号（园区管委会大楼）一楼',
					Telephone: '4318506'
				},
				{
					unit: '经开区综合执法局劳动监察岗',
					address: '长江大道330号原管委会三楼',
					Telephone: '8362110'
				},
				{
					unit: '柴桑区劳动保障监察大队',
					address: '柴桑区庐山西路22号人社局二楼',
					Telephone: '6828502'
				},
				{
					unit: '濂溪区劳动保障监察大队',
					address: '濂溪区十里大道1388号',
					Telephone: '8251753'
				},
				{
					unit: '彭泽县劳动保障监察大队',
					address: '彭泽县龙兴路467号人社局3楼',
					Telephone: '5666761'
				},
				{
					unit: '武宁县劳动保障监察大队',
					address: '武宁县人力资源和社会保障局西区4号楼',
					Telephone: '7705761'
				},
				{
					unit: '浔阳区劳动保障监察大队',
					address: '浔阳区庐峰东路38号三楼',
					Telephone: '8573883'
				},
				{
					unit: '都昌县劳动保障监察大队',
					address: '都昌县万里大道391号都昌县人力资源和社会保障局',
					Telephone: '5223212'
				},
				{
					unit: '瑞昌市劳动保障监察大队',
					address: '瑞昌市建设路60号',
					Telephone: '4221191'
				},
				{
					unit: '德安县劳动保障监察大队',
					address: '德安县东风路185号',
					Telephone: '4334029'
				},
				{
					unit: '永修县劳动保障监察大队',
					address: '永修县新政府大楼东附楼B215',
					Telephone: '3221977'
				},
				{
					unit: '八里湖新区劳动保障监察大队',
					address: '八里湖新区东组团安置小区多元调解中心一楼',
					Telephone: '3906631'
				},
				{
					unit: '修水县劳动保障监察大队',
					address: '修水县义宁镇久久路60号4楼',
					Telephone: '7808661'
				},
				{
					unit: '庐山市劳动保障监察大队',
					address: '庐山市南康镇沿山新区人社局3楼308',
					Telephone: '2557921'
				},
				{
					unit: '湖口县劳动保障监察大队',
					address: '湖口县海正北路湖口县人力资源和社会保障局',
					Telephone: '3660976'
				},
				{
					unit: '庐山西海风景名胜区综合执法大队',
					address: '武宁县巾口乡湖滨大道庐山西海管委会104办公室',
					Telephone: '13672265550'
				}
			]
		};
	},
	methods: {
		makePhoneCall(val) {
			const  phoneNumber=val.length>10?val:'0792-'+val 
			uni.makePhoneCall({
				phoneNumber
			});
		}
	}
};
</script>

<style lang="less">
page{
	padding-bottom: 30px;
}
.department {
	margin: 10px;
	padding: 10px;
	border-radius: 5px;
	box-shadow: 0 0px 4px 0px #c9c9c9;
	font-size: 14px;
	line-height: 30px;
}
.phone {
	display: inline-block;
	.u-icon{
		display: inline-block;
		width: 20px;
		height: 20px;
		border: 1rpx solid #c9c9c9;
		border-radius: 50%;
		text-align: center;
		line-height: 20px;
		.uicon-phone-fill{
			position: relative;
			    left: 2px;
		}
	}
	
}
</style>

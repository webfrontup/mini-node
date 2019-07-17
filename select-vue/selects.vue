
<template>
	<div class="selects">
		<div class="select-head">
			<span class="select-head-cont">{{siteTxt}}</span>
			<span class="select-icon">▼</span>
		</div>
		<ul class="option">
			<li
				class="option-item"
				v-for="(item,key) in siteList"
				@click="changeSite(item)"
				:key="key"
			>{{item.siteName}}</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: "vSelect",
	data() {
		return {
            lang: 'zh',
			siteList: [
				{
					siteCode: "zh",
					siteName: "中文"
				},
				{
					siteCode: "en",
					siteName: "English"
				}
			],
			siteTxt: this.lang === "zh" ? "中文" : "English"
		};
	},
	methods: {
		changeSite(item) {
			// 做点什么。。。
		}
	}
};
</script>

<style scoped>
	.selects {
		position: relative;
	}
	.select-head {
		overflow: hidden;
		/*width: 90px;*/
		height: 40px;
		font-size: 14px;
		color: #202020;
		box-sizing: border-box;
		padding: 0 10px;
		line-height: 40px;
	}
	.select-head .select-head-cont {
		float: left;
		padding-right: 10px;
	}
	.select-head .select-icon {
		float: right;
		color: #535af8;
	}
	.selects:hover .option {
		display: block;
	}
	.option {
		position: absolute;
		left: 0;
		font-size: 14px;
		width: 74px;
		color: #63666e;
		background: #ffffff;
		line-height: 25px;
		display: none;
		z-index: 20000;
		box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.09);
		border-radius: 8px;
		padding: 10px 0;
		text-align: left;
	}
	.option-item {
		border-bottom: 0.5px solid rgba(197, 197, 197, 0.27);
		padding: 5px;
		text-indent: 8px;
	}
	.option-item:last-child {
		border: none;
	}
	.option-item:hover {
		color: #535af8;
	}
</style>
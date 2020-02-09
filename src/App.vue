<template>
	<div id="app" style="height: 100%;">
		<el-container direction="vertical" style="height: 100%;">
			<Header></Header>
			<el-container direction="horizontal">
				<el-aside width="200px">
					<SideBar></SideBar>
				</el-aside>
				<el-main style="height: 100%;">
					<router-view style="height: 100%;"></router-view>
				</el-main>
			</el-container>
		</el-container>

	</div>
</template>

<script>
	import Header from './components/Header.vue'
	import SideBar from './components/SideBar.vue'


	export default {
		name: 'app',
		components: {
			Header,
			SideBar,

		}
	}
</script>

<style>
	html {
		height: 100%;
		margin: 0px;
	}

	body {
		margin: 0px;
		height: 100%;
		color: #606266;
		font-size: 14px;
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
	}
</style>

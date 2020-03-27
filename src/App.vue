<template>
	<div id="app" style="height: 100%;">
		<el-container direction="vertical" style="height: 100%;">
			<Header></Header>
			<el-container direction="horizontal">
				<el-main style="height: 100%;">
					<router-view style="height: 100%;"></router-view>
				</el-main>
			</el-container>
		</el-container>

	</div>
</template>

<script>
	import Header from './components/Header.vue'
	export default {
		name: 'app',
		components: {
			Header,
		}
	}
</script>

<style>
	html {
		height: 100%;
		margin: 0;
	}

	body {
		margin: 0;
		height: 100%;
		color: #606266;
		font-size: 14px;
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
	}
</style>

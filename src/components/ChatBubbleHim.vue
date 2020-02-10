<template>
	<div>
		<div>
			<span style="display: inline-block;">
				<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
				<p style="margin-bottom: 20px; float: right;"><span class="contact-name">Toxicaker</span><span class="contact-time">10:15</span></p>
			</span>
		</div>
		<p class="contact-message">dsadasdasdsdsadasdasdasdsadsasaddasdsaasdsadadqwcsacasdsadasdsacqwcqwcqwcqwdsadasdsadascqwaaa</p>
	</div>
</template>
<script>
	export default {
		name: 'ChatBubbleHim',
		data() {
			return {

			};
		}
	}
</script>
<style scoped="scoped">
	.contact {
		display: inline-block;
		margin-left: 10px;
	}
	
	.contact-name{
		margin-left: 10px;
	}

	.contact p {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.contact-time {
		color: #909399;
		margin-left: 20px;
	}

	.contact-message {
		color: #909399;
		display: inline-block;
		max-width: 200px;
		margin-left: 40px;
		margin-top: 0px;
		border-radius: 30px;
		padding: 20px;
		background: #eee;
		color: #303133;
		border-top-left-radius: 3px;
		word-wrap: break-word;
	}
	
</style>

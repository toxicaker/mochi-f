<template>
	<div style="overflow: hidden;">
		<div style="float: right;">
			<div>
				<span>
					<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="float: right;"></el-avatar>
					<span style="float: right;margin-top: 10px;" ><span class="contact-time">10:30</span><span class="contact-name">Toxicaker</span></span>
				</span>
			</div>
			<p class="contact-message">dsadasdasdsdsadasdasdasdsadsasaddasdsaasdsadadqwcsacasdsadasdsacqwcqwcqwcqwdsadasdsadascqwaaa</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'ChatBubbleMe',
		data() {
			return {

			};
		}
	}
</script>
<style scoped="scoped">
	.contact {
		display: inline-block;
	}
	
	.contact-name{
		margin-right: 10px;
	}

	.contact p {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.contact-time {
		color: #909399;
		margin-right:20px
	}

	.contact-message {
		
		color: #909399;
		display: inline-block;
		max-width: 200px;
		margin-right: 40px;
		margin-top: 0px;
		border-radius: 30px;
		padding: 20px;
		background: #409EFF;
		color: #FFFFFF;
		border-top-right-radius: 3px;
		word-wrap: break-word;
	}
</style>

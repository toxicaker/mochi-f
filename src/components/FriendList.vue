<template>
	<div>
		<el-input placeholder="Search"></el-input>
		<ul style="list-style: none;padding-left: 0px;">
			<li>
				<span>
					<span style="width: 10%;"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></span>
					<div class="contact">
						<p><span class="contact-name">Toxicaker</span><span class="contact-time">10:15</span></p>
						<p class="contact-messgae">message</p>
					</div>
				</span>
			</li>
		</ul>
	</div>

</template>
<script>
	export default {
		name: 'FriendList',
		data() {
			return {

			};
		}
	}
</script>
<style scoped="scoped">
	.contact{
		display: inline-block;
		width: 90%;
		margin-left: 10px;
		
	}
	.contact p {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.contact-name {
		color: #303133;
		font-size: 16px;

	}

	.contact-time {
		color: #909399;
		float: right;
	}

	.contact-messgae {
		color: #909399;

	}
</style>

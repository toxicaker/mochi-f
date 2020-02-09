<template>
	<el-row style="height: 100%;">
		<el-col style="height: 100%;">
			<el-menu default-active="/chat" class="el-menu-vertical-demo" router style="height: 100%;">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-chat-dot-round"></i>
						<span>MIM</span>
					</template>
					<el-menu-item index="/chat">Chat<el-badge :value="3" class="badge"></el-badge>
					</el-menu-item>
					<el-menu-item index="/friends" @click="goTo('/friends')">Friends</el-menu-item>
					<el-menu-item index="/groups">Groups</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-col>
	
	</el-row>
	
</template>
<script>
	export default {
		name: 'SideBar',
		data() {
			return {
				activeIndex: '1'
			};
		},
		methods: {
			goTo(path) {
				this.$router.replace(path)
			}
		}
	}
</script>
<style scoped="scoped">
	.badge {
		margin-left: 10px;
		margin-bottom: 5px;
	}
</style>

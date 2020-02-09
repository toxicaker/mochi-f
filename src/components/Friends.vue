<template>
	<el-row :gutter="20" style="height: 100%;">
		<el-col :span="16" style="height: 100%;">
			<ChatWindow></ChatWindow>
		</el-col>
		<el-col :span="8" style="border-left: 1px solid #e6e6e6; height: 100%;">
			<FriendList></FriendList>
		</el-col>
	</el-row>
</template>
<script>
	import FriendList from './FriendList.vue'
	import ChatWindow from './ChatWindow.vue'
	export default {
		name: 'Friends',
		components: {
			FriendList,
			ChatWindow
		},
		data() {
			return {

			};
		}
	}
</script>
<style scoped="scoped">

</style>

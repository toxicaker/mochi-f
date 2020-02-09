<template>
	<div style="height: 100%;">
		<div class="infinite-list-wrapper" style="overflow:auto;height: 90%;">
			<ul class="list"  infinite-scroll-disabled="disabled" style="list-style: none; padding:0;">
				<li>
					<ChatBubbleHim></ChatBubbleHim>
				</li>
				<li>
					<ChatBubbleHim></ChatBubbleHim>
				</li>
				<li>
					<ChatBubbleMe></ChatBubbleMe>
				</li>
				<li>
					<ChatBubbleHim></ChatBubbleHim>
				</li>
				<li>
					<ChatBubbleMe ></ChatBubbleMe>
				</li>
			
			</ul>
		</div>
		<el-input type="textarea" :rows="2" placeholder="Please input" v-model="textarea">
		</el-input>
	</div>
</template>
<script>
	import ChatBubbleMe from './ChatBubbleMe.vue'
	import ChatBubbleHim from './ChatBubbleHim.vue'
	export default {
		name: 'ChatWindow',
		components: {
			ChatBubbleHim,
			ChatBubbleMe
		},
		data() {
			return {
				textarea: ''
			};
		}
	}
</script>
<style scoped="scoped">
	.contact{
		display: inline-block;
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
	
	.contact-messgae {
		color: #909399;
		
	
	}
</style>

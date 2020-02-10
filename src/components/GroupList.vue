<template>
    <div>
        <el-input placeholder="Search"></el-input>
        <ul style="list-style: none;padding-left: 0;">
            <li v-for="group in groups" :key="group.id">
				<span>
					<span style="width: 10%;"><el-avatar
                            shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></span>
					<div class="contact">
						<p><span class="contact-name">{{group.name}}</span><span class="contact-time">{{time(group.lastMessageTime)}}</span></p>
						<p class="contact-message">{{group.lastMessage === ''? '-' : group.lastMessage}}</p>
					</div>
				</span>
            </li>
        </ul>
    </div>

</template>
<script>
    import axios from "axios";
    import {getToken, getTimeStr, getUserInfo} from "../utils";

    export default {
        name: 'GroupList',
        data() {
            return {
                groups: []
            };
        },
        created() {
            const url = this.apiHost + '/api/groups/list/' + getUserInfo().id;
            let myVue = this;
            axios.get(url, {headers: {"mochi-token": getToken()}}).then(function (response) {
                if (response.data.code === 1) {
                    myVue.groups = response.data.data;
                } else {
                    myVue.$message.error(response.data.message);
                }
            }).catch(function (error) {
                myVue.$message.error(error.toString());
            });
        },
        methods: {
            time: function (timestamp) {
                return getTimeStr(timestamp)
            }
        }
    }
</script>
<style scoped="scoped">
    .contact {
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

    .contact-message {
        color: #909399;
    }
</style>

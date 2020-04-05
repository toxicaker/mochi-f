<template>
    <el-row :gutter="20" style="height: 100%;">
        <el-col :span="18" style="height: 100%;">
            <h1>{{ problem.number }}. {{ problem.title }}</h1>
            <span>
                <el-tag size="mini" type="danger" v-if="problem.difficulty === 'Hard'">{{ problem.difficulty }}</el-tag>
            <el-tag size="mini" type="warning"
                    v-else-if="problem.difficulty === 'Medium'">{{ problem.difficulty }}</el-tag>
            <el-tag size="mini" type="success" v-else>{{ problem.difficulty }}</el-tag></span>
            <div style="margin-top: 20px" v-html="problem.content" class="content"></div>
        </el-col>
        <LeetCodeSideBar></LeetCodeSideBar>
    </el-row>
</template>
<script>
    import axios from "axios";
    import {getToken} from "../../utils";
    import LeetCodeSideBar from "../LeetCodeSideBar";

    export default {
        name: 'LeetCodeProblem',
        components: {LeetCodeSideBar},
        methods: {},
        data() {
            return {
                problem: {}
            };
        },
        created() {
            const url = this.apiHost + '/api/leetcode/problems/' + this.$route.params.id;
            let myVue = this;
            axios.get(url, {headers: {"mochi-token": getToken()}}).then(function (response) {
                if (response.data.code === 1) {
                    myVue.problem = response.data.data;
                } else {
                    myVue.$message.error(response.data.message);
                }
            }).catch(function (error) {
                myVue.$message.error(error.toString());
            });
        },
    }
</script>
<style>
    .content {
        line-height: 1.5;
    }

    .content code {
        background-color: #f7f9fa;
        padding: 2px 4px;
        font-size: 13px;
        border-radius: 3px;
        font-family: monospace;
    }

    .content pre {
        background-color: #f7f9fa;
        padding: 10px;
        font-size: 13px;
        border-radius: 3px;
        font-family: monospace;
    }
</style>

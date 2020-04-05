<template>
    <el-col :span="6" style="height: 100%;">
        <div>
            <h1>Topics</h1>
            <el-tag size="small" style="margin: 5px; cursor: pointer" v-for="tag in tags" :key="tag.id" @click="goTo('/leetcode/tag/' + tag.id)">{{tag.name}} ({{tag.size}})</el-tag>
        </div>
        <div>
            <h1>Company</h1>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
            <el-tag size="small" style="margin: 5px">Apple 100</el-tag>
        </div>
    </el-col>
</template>

<script>
    import axios from 'axios';
    import {getToken} from '../utils';

    export default {
        name: 'LeetCodeSideBar',
        data() {
            return {
                loading: false,
                tags: []
            };
        },
        created() {
            this.loading = true;
            let myVue = this;
            const url = this.apiHost + '/api/leetcode/tags';
            axios.get(url, {headers: {"mochi-token": getToken()}}).then(function (response) {
                if (response.data.code === 1) {
                    myVue.tags = response.data.data;
                } else {
                    myVue.$message.error(response.data.message);
                }
            }).catch(function (error) {
                myVue.$message.error(error.toString());
            });
            myVue.loading = false;
        },
        methods: {
            goTo(path) {
                window.location.href = path
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

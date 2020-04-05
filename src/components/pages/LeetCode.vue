<template>
    <el-row :gutter="20" style="height: 100%;">
        <el-col :span="18" style="height: 100%;">
            <el-input placeholder="Search question titles, description or IDs" style="width: 500px" v-model="keyword"
                      @keyup.enter.native="search(0)">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-table :data="tableData"
                      stripe
                      style="width: 100%"
                      v-loading="loading"
                      @filter-change="filterTags">
                <el-table-column prop="number"
                                 label="#"
                                 width="100">
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="Title">
                    <template slot-scope="scope">
                        <el-link type="primary" :href="'/leetcode/problem/'+ scope.row.id">{{scope.row.title}}</el-link>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="Type"
                        width="150"
                        column-key="type"
                        :filter-multiple="false"
                        :filters="[{ text: 'Normal', value: 'Normal' }, { text: 'Premium', value: 'Premium' }]"
                        filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-tag
                                :type="scope.row.type === 'Normal' ? 'info' : 'primary'"
                                disable-transitions>{{scope.row.type}}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="acceptance"
                        label="Acceptance"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="difficulty"
                        label="Difficulty"
                        width="150"
                        column-key="diff"
                        :filter-multiple="false"
                        :filters="[{ text: 'Easy', value: 'Easy' }, { text: 'Medium', value: 'Medium' }, { text: 'Hard', value: 'Hard' }]"
                        filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-tag
                                :type="scope.row.difficulty === 'Easy' ? 'success' : scope.row.difficulty === 'Medium' ? 'warning' : 'danger'"
                                disable-transitions>{{scope.row.difficulty}}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="frequency"
                        label="Frequency"
                        width="150">
                    <template slot-scope="scope">
                        <el-progress :text-inside="true" :stroke-width="20" :percentage="scope.row.frequency"
                                     status="success"></el-progress>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    style="margin-top: 20px"
                    background
                    layout="prev, pager, next"
                    :page-count="totalPage"
                    :current-page="page + 1"
                    @current-change="requestAndRenderData">
            </el-pagination>
        </el-col>
        <LeetCodeSideBar></LeetCodeSideBar>
    </el-row>
</template>
<script>
    import axios from "axios";
    import {getToken} from "../../utils";
    import LeetCodeSideBar from "../LeetCodeSideBar";

    export default {
        name: 'LeetCode',
        components: {LeetCodeSideBar},
        methods: {
            // eslint-disable-next-line no-unused-vars
            filterTags(filters) {
                for(let i in filters){
                    if(i === 'type'){
                        this.type = filters[i][0] === undefined ? '' : filters[i][0].toLowerCase();
                    }else if(i === 'diff'){
                        this.difficulty = filters[i][0] === undefined ? '' : filters[i][0].toLowerCase();
                    }
                }
                this.requestAndRenderData(1);
            },
            requestAndRenderData(page) {
                this.loading = true;
                page = page - 1;
                if (this.keyword !== '' && this.keyword !== null) {
                    this.search(page);
                    return;
                }
                const url = this.apiHost + '/api/leetcode/problems?page=' + page + '&type=' + this.type + '&difficulty=' + this.difficulty;
                let myVue = this;
                axios.get(url, {headers: {"mochi-token": getToken()}}).then(function (response) {
                    if (response.data.code === 1) {
                        myVue.tableData = response.data.data.data;
                        myVue.totalNum = response.data.data.totalNum;
                        myVue.totalPage = response.data.data.totalPage;
                        myVue.page = response.data.data.page;
                    } else {
                        myVue.$message.error(response.data.message);
                    }
                }).catch(function (error) {
                    myVue.$message.error(error.toString());
                });
                this.loading = false;
            },
            search(page) {
                this.loading = true;
                if (this.keyword === '' || this.keyword === null) {
                    this.requestAndRenderData(1);
                    return;
                }
                let url = this.apiHost + '/api/leetcode/problems/search/' + this.keyword + "?page=" + page + '&type=' + this.type + '&difficulty=' + this.difficulty;
                let myVue = this;
                axios.get(url, {headers: {"mochi-token": getToken()}}).then(function (response) {
                    if (response.data.code === 1) {
                        myVue.tableData = response.data.data.data;
                        myVue.totalNum = response.data.data.totalNum;
                        myVue.totalPage = response.data.data.totalPage;
                        myVue.page = response.data.data.page;
                    } else {
                        myVue.$message.error(response.data.message);
                    }
                }).catch(function (error) {
                    myVue.$message.error(error.toString());
                });
                this.loading = false;
            }
        },
        created() {
            if (this.$route.query.page === '' || this.$route.query.page === undefined)
                this.requestAndRenderData(1);
            else
                this.requestAndRenderData(this.$route.query.page);
        },
        data() {
            return {
                tableData: [],
                totalNum: 0,
                totalPage: 0,
                page: 0,
                keyword: '',
                type: '',
                difficulty: '',
                loading: false
            };
        }
    }
</script>
<style scoped="scoped">

</style>

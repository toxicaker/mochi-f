<template>
    <el-row :gutter="20" style="height: 100%;">
        <el-col :span="18" style="height: 100%;">
            <el-input placeholder="Search question titles, description or IDs" style="width: 500px" v-model="keyword">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-table
                    :data="tableData.filter(data => data.number.toString() === keyword || !keyword || data.title.toLowerCase().includes(keyword.toLowerCase()))"
                    stripe
                    style="width: 100%"
                    v-loading="loading">
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
                        :filter-method="filterType"
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
                        :filter-method="filterDiff"
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
<!--            <el-pagination-->
<!--                    style="margin-top: 20px"-->
<!--                    background-->
<!--                    layout="prev, pager, next"-->
<!--                    :page-count="totalPage"-->
<!--                    :current-page="page + 1"-->
<!--                    @current-change="requestAndRenderData">-->
<!--            </el-pagination>-->
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
            filterType(value, row) {
                return row.type === value;
            },
            filterDiff(value, row) {
                return row.difficulty === value;
            },
        },
        created() {
            this.loading = true;
            const url = this.apiHost + '/api/leetcode/tags/' + this.$route.params.tagId + '/problems';
            let myVue = this;
            console.log(url);
            axios.get(url, {headers: {"mochi-token": getToken()}}).then(function (response) {
                if (response.data.code === 1) {
                    myVue.tableData = response.data.data;
                } else {
                    myVue.$message.error(response.data.message);
                }
            }).catch(function (error) {
                myVue.$message.error(error.toString());
            });
            this.loading = false;
        },
        data() {
            return {
                tableData: [],
                keyword: '',
                loading: false
            };
        }
    }
</script>
<style scoped="scoped">

</style>

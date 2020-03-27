<template>
    <el-row :gutter="20" style="height: 100%;">
        <el-col :span="18" style="height: 100%;">
            <el-input placeholder="Search question titles, description or IDs" style="width: 500px">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-table :data="tableData"
                      stripe
                      style="width: 100%">
                <el-table-column prop="number"
                                 label="#"
                                 width="50">
                </el-table-column>
                <el-table-column
                        prop="title"
                        label="Title">
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="Type"
                        width="150"
                        :filters="[{ text: 'Normal', value: 'Normal' }, { text: 'Premium', value: 'Premium' }]"
                        :filter-method="filterType"
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
                        :filters="[{ text: 'Easy', value: 'Easy' }, { text: 'Medium', value: 'Medium' }, { text: 'Hard', value: 'Hard' }]"
                        :filter-method="filterDiff"
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
                    :total="1000">
            </el-pagination>
        </el-col>
        <el-col :span="6" style="height: 100%;">
            <div>
                <h1>Topics</h1>
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
    </el-row>
</template>
<script>
    export default {
        name: 'LeetCode',
        methods: {
            filterDiff(value, row) {
                return row.difficulty === value;
            },
            filterType(value, row) {
                return row.type === value;
            }
        },
        data() {
            return {
                tableData: [{
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Premium',
                    acceptance: '89.82%',
                    difficulty: 'Hard',
                    frequency: '80.6',
                }, {
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Premium',
                    acceptance: '89.82%',
                    difficulty: 'Medium',
                    frequency: '57.9',
                }, {
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Normal',
                    acceptance: '89.82%',
                    difficulty: 'Easy',
                    frequency: '10',
                }, {
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Premium',
                    acceptance: '89.82%',
                    difficulty: 'Hard',
                    frequency: '20',
                },{
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Premium',
                    acceptance: '89.82%',
                    difficulty: 'Hard',
                    frequency: '20',
                },{
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Premium',
                    acceptance: '89.82%',
                    difficulty: 'Hard',
                    frequency: '20',
                },{
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Premium',
                    acceptance: '89.82%',
                    difficulty: 'Hard',
                    frequency: '20',
                },{
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Premium',
                    acceptance: '89.82%',
                    difficulty: 'Hard',
                    frequency: '20',
                },{
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Premium',
                    acceptance: '89.82%',
                    difficulty: 'Hard',
                    frequency: '20',
                },{
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Premium',
                    acceptance: '89.82%',
                    difficulty: 'Hard',
                    frequency: '20',
                },{
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Premium',
                    acceptance: '89.82%',
                    difficulty: 'Hard',
                    frequency: '20',
                },{
                    number: '1',
                    title: 'How Many Numbers Are Smaller Than the Current Number',
                    type: 'Premium',
                    acceptance: '89.82%',
                    difficulty: 'Hard',
                    frequency: '20',
                }]
            };
        }
    }
</script>
<style scoped="scoped">

</style>

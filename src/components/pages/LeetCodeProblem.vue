<template>
    <el-row :gutter="20" style="height: 100%;">
        <el-col :span="18" style="height: 100%;" class="content">
            <h1>65. Valid Number</h1>
            <span><el-tag size="mini" type="danger">Hard</el-tag></span>
            <div style="margin-top: 20px">
                <div><p>Validate if a given string can be interpreted as&nbsp;a decimal number.</p>

                    <p>Some examples:<br>
                        <code>"0"</code> =&gt; <code>true</code><br>
                        <code>" 0.1 "</code> =&gt; <code>true</code><br>
                        <code>"abc"</code> =&gt; <code>false</code><br>
                        <code>"1 a"</code> =&gt; <code>false</code><br>
                        <code>"2e10"</code> =&gt; <code>true</code><br>
                        <code>" -90e3&nbsp; &nbsp;"</code> =&gt; <code>true</code><br>
                        <code>" 1e"</code> =&gt; <code>false</code><br>
                        <code>"e3"</code> =&gt; <code>false</code><br>
                        <code>" 6e-1"</code> =&gt; <code>true</code><br>
                        <code>" 99e2.5&nbsp;"</code> =&gt; <code>false</code><br>
                        <code>"53.5e93"</code> =&gt; <code>true</code><br>
                        <code>" --6 "</code> =&gt; <code>false</code><br>
                        <code>"-+3"</code> =&gt; <code>false</code><br>
                        <code>"95a54e53"</code> =&gt; <code>false</code></p>

                    <p><strong>Note:</strong> It is intended for the problem statement to be ambiguous. You should
                        gather all requirements up front before implementing one. However, here is a list of characters
                        that can be in a valid decimal number:</p>

                    <ul>
                        <li>Numbers 0-9</li>
                        <li>Exponent - "e"</li>
                        <li>Positive/negative sign - "+"/"-"</li>
                        <li>Decimal point - "."</li>
                    </ul>

                    <p>Of course, the context of these characters also matters in the input.</p>

                    <p><strong>Update (2015-02-10):</strong><br>
                        The signature of the <code>C++</code> function had been updated. If you still see your function
                        signature accepts a <code>const char *</code> argument, please click the reload button to reset
                        your code definition.
                        The signature of the <code>C++</code> function had been updated. If you still see your function
                        signature accepts a <code>const char *</code> argument, please click the reload button to reset
                        your code definition.
                        The signature of the <code>C++</code> function had been updated. If you still see your function
                        signature accepts a <code>const char *</code> argument, please click the reload button to reset
                        your code definition.</p>
                </div>
            </div>
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
        name: 'LeetCodeProblem',
        methods: {},
        data() {
            return {};
        }
    }
</script>
<style scoped="scoped">
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
</style>

<template>
    <el-menu :default-active="activeIndex" mode="horizontal">
        <el-menu-item class="brand" index="1">Mochi</el-menu-item>
        <el-submenu index="2" style="float: right;" v-if="isLoginStatus()">
            <template slot="title"><i class="el-icon-user-solid"></i>{{userInfo.nickname}}</template>
            <el-menu-item index="2-1">Profile</el-menu-item>
            <el-menu-item index="2-2">Logout</el-menu-item>
        </el-submenu>
        <el-menu-item style="float: right;" @click="loginVisible = true" v-else>Login</el-menu-item>
        <el-dialog title="Login" :visible.sync="loginVisible" width="30%">
            <el-input id="username" v-model="username" style="margin-bottom: 10px;">
                <template slot="prepend">Username</template>
            </el-input>
            <el-input id="password" v-model="password" type="password" style="margin-top: 10px;">
                <template slot="prepend">Password</template>
            </el-input>
            <p style="margin-top: 20px;" align="right"><a href="#" style="margin-right: 20px;color: #409EFF;">Forget
                password?</a>
                <a href="#" style="margin-right: 5px; color: #409EFF;">Sign up</a></p>
            <span slot="footer" class="dialog-footer">
				<el-button @click="loginVisible = false">Cancel</el-button>
				<el-button type="primary" @click="onLogin()" v-loading="loading">Login</el-button>
			</span>
        </el-dialog>
    </el-menu>
</template>

<script>
    import axios from 'axios';
    import {getUserInfo, isLogin, setUserInfo} from '../utils';

    export default {
        name: 'Header',
        data() {
            return {
                activeIndex: '1',
                loginVisible: false,
                username: '',
                password: '',
                loading: false,
                userInfo: getUserInfo(),
            };
        },

        methods: {
            onLogin: function () {
                let myVue = this;
                this.loading = true;
                if (this.username === '' || this.password === '') {
                    this.$message.error('Username or password cannot be null');
                    this.loading = false;
                    return;
                }
                const payload = {
                    username: this.username,
                    password: this.password,
                };
                const url = this.apiHost + '/api/auth/sign-in';
                axios.post(url, payload).then(function (response) {
                    if (response.data.code === 1) {
                        myVue.loginVisible = false;
                        myVue.$message.success('Success!');
                        myVue.userInfo.userId = response.data.data.id;
                        myVue.userInfo.username = response.data.data.username;
                        myVue.userInfo.token = response.data.data.token;
                        myVue.userInfo.nickname = response.data.data.nickname;
                        setUserInfo(response.data.data);
                    } else {
                        myVue.$message.error('Oops, ' + response.data.message);
                    }
                }).catch(function (error) {
                    myVue.$message.error(error.toString());
                })
                    .then(function () {
                        myVue.loading = false;
                    });
            },
            isLoginStatus: function () {
                return isLogin()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-header {
        line-height: 60px;
        background-color: #409EFF;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }

    .brand {
        margin-right: 50px;
        font-size: 20px;
    }

    .icon-active {
        color: #409EFF
    }
</style>

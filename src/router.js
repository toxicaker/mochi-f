import Vue from 'vue'
import VueRouter from 'vue-router'
import Friends from './components/pages/Friends.vue'
import Groups from './components/pages/Groups.vue'
import LeetCode from "./components/pages/LeetCode";
import LeetCodeProblem from "./components/pages/LeetCodeProblem";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/friends',
        name: 'friends',
        component: Friends
    }, {
        path: '/groups',
        name: 'groups',
        component: Groups
    }, {
        path: '/leetcode',
        name: 'leetcode',
        component: LeetCode
    }, {
        path: '/leetcode-problem',
        name: 'leetcode-problem',
        component: LeetCodeProblem
    }]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Friends from './components/Friends.vue'
import Groups from './components/Groups.vue'

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
    }]
})

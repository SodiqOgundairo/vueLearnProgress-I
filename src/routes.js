import {createWebHistory, createRouter} from 'vue-router'
import Home from './components/Routing.vue'
import Profile from './components/routing/Profile.vue'
import PageNotFound from  './components/PageNotFound.vue'
import ApiPost from  './components/ApiPost.vue'
import ApiLogIn from  './components/ApiLogIn.vue'
import MultipleSlots from  './components/MultipleSlots.vue'
// import ApiDashBoard from  './components/ApiDashBoard.vue'
import ApiLogOut from  './components/ApiLogOut.vue'
import AsyncComp from  './components/AsyncComp.vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const routes = [
    {
        name: 'Routing',
        path: '/',
        component: Home
    },
    {
        name: 'Profile',
        path: '/profile/:name',
        component: Profile
    },
    {
        name: 'Login',
        path: '/login',
        component: ApiLogIn
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    },
    {
        name: 'Register',
        path: '/register',
        component: ApiPost
    },
    // {
    //     name: 'Logon',
    //     path: '/logon',
    //     component: ApiConfirmPwd
    // },
    {
        name: 'Logout',
        path: '/logout',
        component: ApiLogOut
    },
    {
        name: 'MultipleSlots',
        path: '/mutli-slot',
        component: MultipleSlots
    },
    {
        name: 'AsyncComp',
        path: '/async',
        component: AsyncComp
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        // component: ApiDashBoard,
        component: () => 
        import(/* webpackChunkName: "dashboard" */ './components/ApiDashBoard.vue'),
      meta: {
        authRequired: true,
    }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
}) 

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/',
            });
        }
    } else {
        next();
    }
});

export default router
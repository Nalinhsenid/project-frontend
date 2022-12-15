import { createRouter, createWebHistory } from "vue-router";

// import EmployeesList from "./pages/managers/EmployeesList.vue";
// import EmployeeRegistration from "./pages/managers/EmployeeRegistration.vue";
// import LoginPage from './pages/auth/LoginPage.vue';
// import NotFound from "./pages/NotFound.vue";
// import LeaveRequests from "./pages/managers/LeaveRequests.vue";
// import EmployeeLeaveHistory from "./pages/employees/EmployeeLeaveHistory.vue";
// import LeaveBalance from "./pages/employees/LeaveBalance.vue";
// import AddLeave from "./pages/employees/AddLeave.vue";
// import ProfilePage from "@/pages/ProfilePage";
// import RegisterPage from "@/pages/auth/RegisterPage";



// component: () => import('./user-profile/UserProfile')
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: () => import('./pages/auth/LoginPage.vue') },
        { path: '/logout', redirect: '/login' },

        { path: '/signup', component: () => import('@/pages/auth/RegisterPage')  },
        { path: '/profile', component: () => import('@/pages/ProfilePage')},
        { path: '/register', component: () => import('./pages/managers/EmployeeRegistration.vue') },
        { path: '/requests', component: () => import('./pages/managers/LeaveRequests.vue')  },
        { path: '/employees', component: () => import('./pages/managers/EmployeesList.vue')},
        { path:'/employees/:id',component: () => import('./pages/managers/EmployeeEdit.vue')},
        { path: '/leavehistory', component: () => import('./pages/employees/EmployeeLeaveHistory.vue') },
        { path: '/leavebalance', component: () => import('./pages/employees/LeaveBalance.vue') },
        { path: '/addleave', component: () => import('./pages/employees/AddLeave.vue') },
        { path: '/:notFound(.*)', component: () => import('./pages/NotFound.vue') },

    ]

});
router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/signup'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;
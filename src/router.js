import { createRouter, createWebHistory } from "vue-router";

import EmployeesList from "./pages/managers/EmployeesList.vue";
import EmployeeRegistration from "./pages/managers/EmployeeRegistration.vue";
import LoginPage from './pages/auth/LoginPage.vue';
import NotFound from "./pages/NotFound.vue";
import LeaveRequests from "./pages/managers/LeaveRequests.vue";
import EmployeeLeaveHistory from "./pages/employees/EmployeeLeaveHistory.vue";
import LeaveBalance from "./pages/employees/LeaveBalance.vue";
import AddLeave from "./pages/employees/AddLeave.vue";




const router = createRouter({
    history: createWebHistory(),

    routes: [
        { path: '/', redirect: '/employees' },
        { path: '/logout', component: null },
        { path: '/employees', component: EmployeesList},
        { path: '/register', component: EmployeeRegistration },
        { path: '/requests', component: LeaveRequests },
        { path: '/login', component: LoginPage },
        { path: '/leavehistory', component: EmployeeLeaveHistory },
        { path: '/leavebalance', component: LeaveBalance },
        { path: '/addleave', component: AddLeave },
        { path: '/:notFound(.*)', component: NotFound },

    ]

});

export default router;
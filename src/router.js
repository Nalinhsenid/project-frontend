import { createRouter, createWebHistory } from "vue-router";

import EmployeesList from "./pages/managers/EmployeesList.vue";
import EmployeeDetails from "./pages/managers/EmployeeDetails.vue";
import EmployeeRegistration from "./pages/managers/EmployeeRegistration.vue";
import NotFound from "./pages/NotFound.vue";


const router = createRouter({
    history: createWebHistory(),

    routes: [
        { path: '/', redirect: '/employees' },
        { path: '/logout', component: null },
        { path: '/employees', component: EmployeesList},
        { path: '/employees/:id', component: EmployeeDetails },
        { path: '/register', component: EmployeeRegistration },
        { path: '/requests', component: null },
        { path: '/:notFound(.*)', component: NotFound }


    ]

});

export default router;
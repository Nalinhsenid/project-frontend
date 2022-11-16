import {  createStore} from "vuex";

import EmployeesModule  from "./modules/Employees/index.js";


const store = createStore({
    modules: {
        employees:EmployeesModule
    }
});

export default store;
export default {
    employees(state){
        return state.employees;
    },

    hasEmployees(state){
        return state.employees && state.employees.length > 0;
    }
};
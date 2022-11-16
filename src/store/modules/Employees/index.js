
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';



export default {
    namespaced: true,
    state() {
        return{
            employees: [
                {
                    id: 'c1',
                    employeeName: 'Nalin',
                    totalLeaves: {
                        casualLeaves:7,
                        sickLeaves: 7,
                        annualLeaves: 14
                    },
                    remainingLeaves: {
                        casualLeaves:4,
                        sickLeaves: 4,
                        annualLeaves: 10
                    }
                },
                {
                    id: 'c2',
                    employeeName: 'Nalin2',
                    totalLeaves: {
                        casualLeaves:3,
                        sickLeaves: 3,
                        annualLeaves: 9
                    }
                }

            ]
        }

    },
    mutations,
    actions,
    getters

};
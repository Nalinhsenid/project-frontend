<template>
  <the-header :pageTopic="pageTopic"></the-header>
  <EmployeeNavBar></EmployeeNavBar>
  <section>
    <div class="h2 text-center">Leave Timeline</div>
    <div class="container my-5">
      <div class="employee-list-table">
        <b-table-simple responsive>
          <b-thead>
            <b-tr>
              <b-th class="text-center">Leave Date</b-th>
              <b-th class="text-center">Full Day or Half Day</b-th>
              <b-th class="text-center">Leave type</b-th>
              <b-th class="text-center">Status</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="leave in allEmployeeLeaves" :key="leave.id">
              <b-td class="align-middle text-center">{{ leave.leaveDate.substr(0,10) }}</b-td>
              <b-td class="align-middle text-center">{{days.find(({value}) => value === leave.leaveAmount).text}}</b-td>
              <b-td class="align-middle text-center">{{(leaves.find(({value}) => value === leave.leaveType)).text}}</b-td>
              <b-td>
                <div class="mt-3 text-center" v-if="leave.isApproved">
                  <b-button class="btn-success">Accepted</b-button>
                </div>
                <div class="mt-3 text-center" v-if="leave.isApproved === false">
                  <b-button class="btn-info">Pending</b-button>
                </div>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import employeeService from "@/services/employee.service";
import EmployeeNavBar from "@/components/EmployeeNavBar";
// import { useRoute } from 'vue-router';


export default {
  components: {
    TheHeader,
    EmployeeNavBar
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    this.currentEmployeeId = this.currentUser.employeeId;
    this.getLeaveRequestsOfEmployee();

  },
  data(){
    return{
      pageTopic:"hSenid LMS",
      allEmployeeLeaves :[],
      currentEmployeeId : '',
      leaves : [{text:'Annual Leave',value: 'ANNUAL_LEAVE'},{text:'Casual Leave',value: 'CASUAL_LEAVE'},{text:'Sick Leave',value: 'SICK_LEAVE'}],
      days : [{text:'Full Day',value: 1},{text:'Half Day',value: 0.5}]

    }
  },
  methods:{
    getLeaveRequestsOfEmployee() {
      employeeService.getALlLeaveRequestsOfEmployee(this.currentEmployeeId).then(response => {
        this.allEmployeeLeaves = response.data;
      }).catch(error => {
        console.log(error);
      })
    }
  }

};
</script>

<style>

.crud-operation-btn {
  align-content: center;
  text-align: center;
}
</style>





<template>
  <the-header :pageTopic="pageTopic"></the-header>
  <ManagerNavBar></ManagerNavBar>
  <section>
    <div class="h2 text-center">Leave Requests</div>
    <div class="container my-5">
      <div class="employee-list-table">
        <b-table-simple responsive>
          <b-thead>
            <b-tr>
              <b-th class="text-center">Employee ID</b-th>
              <b-th class="text-center">Name</b-th>
              <b-th class="text-center">Date</b-th>
              <b-th class="text-center">Leave Type</b-th>
              <b-th class="text-center">Leave Amount</b-th>
              <b-th class="text-center"></b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="request in leaveRequests" :key = request.id>
              <b-td class="align-middle text-center">{{request.employeeId}}</b-td>
              <b-td class="align-middle text-center">{{request.employeeName}}</b-td>
              <b-td class="align-middle text-center">{{request.leaveDate.substr(0,10)}}</b-td>
              <b-td class="align-middle text-center">{{(leaves.find(({value}) => value === request.leaveType)).text}}</b-td>
              <b-td class="align-middle text-center">{{request.leaveAmount}}</b-td>
              <b-td class="align-middle text-center">
                <div class="mt-3 text-center" v-if="request.isApproved === false">
                  <b-button-group class="crud-operation-btn">
                    <a :href="'/requests/' + request.id" class="btn btn-primary stretched-link">Accept</a>
                    <a :href="'/requests/' + request.id" class="btn btn-danger stretched-link">Reject</a>
                  </b-button-group>
                </div>
                <div class="mt-3 text-center" v-if="request.isApproved">
                  <b-button class="btn-success">Accepted</b-button>
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
import {onMounted, ref} from "vue";
import TheHeader from "@/components/TheHeader.vue";
import employeeService from "@/services/employee.service";
import ManagerNavBar from "@/components/ManagerNavBar";

export default {
  components: {
    ManagerNavBar,
    TheHeader,
  },
  setup() {
    const pageTopic = ref("hSenid LMS");
    const leaveRequests = ref([]);
    const leaves =[{text:'Annual Leave',value: 'ANNUAL_LEAVE'},{text:'Casual Leave',value: 'CASUAL_LEAVE'},{text:'Sick Leave',value: 'SICK_LEAVE'}]

    onMounted( ()=>{
      getLeaveRequests();
    })

    const getLeaveRequests = ()=> {
      employeeService.getALlLeaveRequests().then(response => {
        let data = response.data;
        // console.log(Object.values(data));
        leaveRequests.value = data;
      }).catch(error => {
        console.log(error);
      })
    }
    return {
      pageTopic,
      leaveRequests,
      getLeaveRequests,
      leaves
    };
  },
};
</script>

<style>
</style>
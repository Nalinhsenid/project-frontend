<template>
  <the-header :pageTopic="pageTopic"></the-header>
  <section>
    <b-container class="bv-example-row my-5">
      <b-row class="justify-content-center mt-3">
        <b-col col lg="2">
          <b-button pill variant="outline-danger"
            ><router-link to="/employees" class="text-decoration-none"
              >All Employees</router-link
            ></b-button
          >
        </b-col>
        <b-col col lg="2"
          ><b-button pill variant="outline-danger"
            ><router-link to="/requests" class="text-decoration-none"
              >Requests</router-link
            >
          </b-button></b-col
        >
        <b-col col lg="2"
          ><b-button pill variant="outline-danger"
            ><router-link to="/register" class="text-decoration-none"
              >Add Employee</router-link
            >
          </b-button></b-col
        >
      </b-row>
    </b-container>
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
              <b-td class="align-middle text-center">Nalin</b-td>
              <b-td class="align-middle text-center">{{request.leaveDate}}</b-td>
              <b-td class="align-middle text-center">{{request.leaveType}}</b-td>
              <b-td class="align-middle text-center">{{request.leaveAmount}}</b-td>
              <b-td class="align-middle text-center">
                <div class="mt-3 text-center">
                  <b-button-group class="crud-operation-btn">
                    <b-button variant="success">Accept</b-button>
                    <b-button variant="danger">Reject</b-button>
                  </b-button-group>
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

export default {
  components: {
    TheHeader,
  },
  setup() {
    const pageTopic = ref("hSenid LMS - Manager");
    const leaveRequests = ref([]);

    onMounted( ()=>{
      getLeaveRequests();
    })

    const getLeaveRequests = ()=> {
      employeeService.getALlLeaveRequests().then(response => {
        leaveRequests.value = response.data;
      }).catch(error => {
        console.log(error);
      })
    }
    return {
      pageTopic,
      leaveRequests,
      getLeaveRequests
    };
  },
};
</script>

<style>
</style>
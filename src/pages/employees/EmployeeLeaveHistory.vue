<template>
  <the-header :pageTopic="pageTopic"></the-header>
  <section>
    <b-container class="bv-example-row my-5">
      <b-row class="justify-content-center mt-3">
        <b-col col lg="2">
          <b-button pill variant="outline-danger">
            <router-link to="/leavehistory/H06" class="text-decoration-none">Leave History</router-link>
          </b-button>
        </b-col>
        <b-col col lg="2">
          <b-button pill variant="outline-danger">
            <router-link to="/leavebalance" class="text-decoration-none">Leave Balance</router-link>
          </b-button>
        </b-col>
        <b-col col lg="2">
          <b-button pill variant="outline-danger">
            <router-link to="/addleave" class="text-decoration-none">Request a leave</router-link>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <div class="h2 text-center">Leave History</div>
    <div class="container my-5">
      <div class="employee-list-table">
        <b-table-simple responsive>
          <b-thead>
            <b-tr>
              <b-th class="text-center">Leave Date</b-th>
              <b-th class="text-center">Full Day or Half Day</b-th>
              <b-th class="text-center">Leave type</b-th>
              <b-th class="text-center">Description</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td class="align-middle text-center">16-09-2022</b-td>
              <b-td class="align-middle text-center">Full Day</b-td>
              <b-td class="align-middle text-center">Casual</b-td>
              <b-td class="align-middle text-center">Private reason</b-td>
            </b-tr>
            <b-tr>
              <b-td class="align-middle text-center">16-09-2022</b-td>
              <b-td class="align-middle text-center">Full Day</b-td>
              <b-td class="align-middle text-center">Casual</b-td>
              <b-td class="align-middle text-center">Private reason</b-td>
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
import { useRoute } from 'vue-router';


export default {
  components: {
    TheHeader
  },
  setup() {
    const pageTopic = ref("hSenid LMS");
    const employeeLeaveBalance =ref([]);
    const route = useRoute();


    onMounted( ()=>{
      getLeaveRequestsOfEmployee();
    })

    const getLeaveRequestsOfEmployee = ()=> {
      employeeService.getALlLeaveRequestsOfEmployee(route.params.id).then(response => {
        employeeLeaveBalance.value = response.data;
      }).catch(error => {
        console.log(error);
      })
    }

    return {
      pageTopic,
      employeeLeaveBalance
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





<template>
  <the-header :pageTopic ="pageTopic"></the-header>
  <section>
    <b-container class="bv-example-row my-5">
      <b-row class="justify-content-center mt-3">
        
        <b-col col lg="2">
          <b-button pill variant="outline-danger"><router-link to="/employees" class="text-decoration-none">All Employees</router-link></b-button>
        </b-col>
        <b-col col lg="2"
          ><b-button pill variant="outline-danger"
            ><router-link to="/requests" class="text-decoration-none">Requests</router-link> </b-button
          ></b-col
        >
        <b-col col lg="2"
          ><b-button pill variant="outline-danger"
            ><router-link to="/register" class="text-decoration-none">Add Employee</router-link> </b-button
          ></b-col
        >
      </b-row>
    </b-container>
    <div class="h2 text-center">All employees</div>
    <div class="container my-5">
      <div class="employee-list-table">
        <b-table-simple responsive>
          <b-thead>
            <b-tr>
              <b-th sticky-column></b-th>
              <b-th class="text-center">Employee ID</b-th>
              <b-th class="text-center">Name</b-th>
              <b-th class="text-center">Position</b-th>
              <b-th class="text-center"></b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="employee in employeeData" :key = employee.num>
              <b-th sticky-column class="align-middle text-center">{{ employee.num }}</b-th>
              <b-td class="align-middle text-center">{{employee.employeeId}}</b-td>
              <b-td class="align-middle text-center">{{ employee.employeeName }}</b-td>
              <b-td class="align-middle text-center">{{employee.employeePosition}}</b-td>
              <b-td class="align-middle text-center">
                <div class="mt-3 text-center ">
                  <b-button-group class="crud-operation-btn">
                    <b-button variant="success">View</b-button>
                    <b-button variant="info">Edit</b-button>
                    <b-button variant="warning">Delete</b-button>
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
import { ref } from "vue";
import TheHeader from "@/components/TheHeader.vue";


export default {
  components: {
    TheHeader
  },
  setup(){
    const employeeData = ref([
      {
        num: 1,
        employeeId: 'H01',
        employeeName: 'Nalin',
        employeePosition: 'Software Engineer'
      },
      {
        num: 2,
        employeeId: 'H02',
        employeeName: 'Danula',
        employeePosition: 'Software Engineer'
      }
    ])
    const pageTopic = ref("hSenid LMS - Manager");

    return{
      pageTopic,
      employeeData
    }
  }

};
</script>
  
<style>

.crud-operation-btn{
  align-content: center;
  text-align: center;
}
</style>





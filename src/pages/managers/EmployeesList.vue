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
<!--              <b-th sticky-column></b-th>-->
              <b-th class="text-center">Employee ID</b-th>
              <b-th class="text-center">Name</b-th>
              <b-th class="text-center">Position</b-th>
              <b-th class="text-center"></b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="employee in employeeData" :key = employee.id>
<!--              <b-th sticky-column class="align-middle text-center">{{ employee.id }}</b-th>-->
              <b-td class="align-middle text-center">{{employee.id}}</b-td>
              <b-td class="align-middle text-center">{{ employee.name }}</b-td>
              <b-td class="align-middle text-center">{{employee.position}}</b-td>
              <b-td class="align-middle text-center">
                <div class="mt-3 text-center ">
                  <b-button-group class="crud-operation-btn">
                    <b-button variant="info">Edit</b-button>
                    <b-button variant="warning" @click="deleteEmployee">Delete</b-button>
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
import { ref , onMounted} from "vue";
import TheHeader from "@/components/TheHeader.vue";
import employeeService from "@/services/employee.service";


export default {
  setup(){

    const employeeData = ref([]);
    const pageTopic = ref("hSenid LMS");


    onMounted( ()=>{
      getEmployees();
    })
    const getEmployees = ()=>{
      employeeService.getALlEmployees().then( response => {
        employeeData.value = response.data;
        console.log(employeeData.value)
      }).catch( error =>{
        console.log(error);
      })
    }

    // const deleteEmployee =() => {
    //   employeeService.deleteEmployee($ref(key))
    //       .then( res => {
    //         console.log(res.data)
    //       })
    //       .catch( e => {
    //         console.log(e)
    //       })
    // }


    return{
      pageTopic,
      employeeData,
      getEmployees,
      // deleteEmployee
    }
  },
  components: {
    TheHeader
  }

};
</script>
  
<style>

.crud-operation-btn{
  align-content: center;
  text-align: center;
}
</style>





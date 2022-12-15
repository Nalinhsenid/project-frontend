<template>
  <the-header :pageTopic ="pageTopic"></the-header>
  <ManagerNavBar></ManagerNavBar>

  <section>
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
                    <button class="btn btn-info" @click="updateEmployee(employee.id)">Update</button>
                    <button class="btn btn-danger" @click="deleteEmployee(employee.id)">Delete</button>
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
import ManagerNavBar from "@/components/ManagerNavBar";
// import { useRouter} from "vue-router";
import EmployeeService from "@/services/employee.service";

export default {
  setup(){

    const employeeData = ref([]);
    const pageTopic = ref("hSenid LMS");
    const currentEmployee =ref(null);
    // const route = useRoute();
    // const router =useRouter();
    onMounted( ()=>{
      getEmployees();
    })
    const getEmployees = ()=>{
      employeeService.getALlEmployees().then( response => {
        employeeData.value = response.data;
      }).catch( error =>{
        console.log(error);
      })
    }
    const getEmployee =(id) => {
      EmployeeService.getEmployee(id)
          .then(response => {
            currentEmployee.value= response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
    const updateEmployee =(id) => {
      getEmployee(id)
      employeeService.updateEmployee(id,currentEmployee.value)
          .then( res => {
            console.log(res.data)
            console.log(currentEmployee.value)
          })
          .catch( e => {
            console.log(e)
          })
    }

    const deleteEmployee =(id) => {
      employeeService.deleteEmployee(id)
          .then( res => {
            // router.push('employees');
            console.log(res.data)
          })
          .catch( e => {
            console.log(e)
          })
    }


    return{
      pageTopic,
      employeeData,
      getEmployees,
      deleteEmployee,
      getEmployee,
      updateEmployee
    }
  },
  components: {
    TheHeader,
    ManagerNavBar
  }

};
</script>
  
<style>

.crud-operation-btn{
  align-content: center;
  text-align: center;
}
</style>





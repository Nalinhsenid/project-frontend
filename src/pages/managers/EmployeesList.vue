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
                    <button class="btn btn-info" @click="editEmployee(employee.id)">Update</button>
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
import { useRouter} from "vue-router";
// import EmployeeService from "@/services/employee.service";

export default {
  setup(){

    const employeeData = ref([]);
    const pageTopic = ref("hSenid LMS");
    const router =useRouter();
    // const isConfirmed ='';

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
    // const confirmDelete =(employeeId) => {
    //   context.root.$bvModal.msgBoxConfirm('Are you sure?')
    //       .then(value => {
    //         isConfirmed.value = value;
    //         console.log(isConfirmed.value);
    //         if(isConfirmed.value === true){
    //           deleteEmployee(employeeId);
    //         }
    //
    //       })
    //       .catch(err => {
    //         console.log('error occurred')
    //         console.log(err)
    //       })
    // }


    const deleteEmployee =(id) => {
      employeeService.deleteEmployee(id)
          .then( res => {
            // router.push('employees');
            // router.push('/employees');

            console.log(res.data)
          })
          .catch( e => {
            console.log(e)
          })
    }

    const editEmployee = (employeeId) => {
      router.push('/employees/'+employeeId);
    }



    return{
      pageTopic,
      employeeData,
      getEmployees,
      deleteEmployee,
      editEmployee,
      // confirmDelete
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





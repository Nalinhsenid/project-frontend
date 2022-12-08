<template>
  <the-header :pageTopic="pageTopic"></the-header>
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
  <div class="h2 text-center my-4">Add Employee</div>
  <b-card>
    <form @submit.prevent = "addEmployee">
      <div class="container col-md-4 my-5 form">
        <div role="group" class="my-4">
          <label for="input-live">Employee Id:</label>
          <b-form-input
              id="input-live"
              v-model="employeeId"
              :state="employeeIdState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter employee id"
              trim
          ></b-form-input>

          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback">
            Enter Employee ID of 3 letters
          </b-form-invalid-feedback>
        </div>
        <div role="group" class="my-4">
          <label for="input-live">Employee Name:</label>
          <b-form-input
              id="input-live"
              v-model="employeeName"
              :state="employeeNameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter your name"
              trim
          ></b-form-input>

          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 3 letters
          </b-form-invalid-feedback>

        </div>
        <div role="group" class="my-4">
          <label for="input-live">Employee Email:</label>
          <b-form-input
              id="input-live"
              v-model="employeeEmail"
              :state="true"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter employee email"
              trim
          ></b-form-input>
        </div>
        <div role="group" class="my-4">
          <label for="input-live">Employee Position:</label>
          <b-form-input
              id="input-live"
              v-model="employeePosition"
              :state="true"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter your name"
              trim
          ></b-form-input>
        </div>
        <b-button block variant="primary" type="submit" >Add Employee</b-button>
        <!--      <b-button block class="mx-auto align-items-center justify-content-center" variant="outline-success" type="submit">Add Employee</b-button>-->
      </div>

    </form>
  </b-card>

</template>
  
  <script>
import { computed, ref } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import employeeService from "@/services/employee.service";

export default {
  components: {
    TheHeader,
  },
  setup() {
    const pageTopic = ref("hSenid LMS - HR Admin");
    const employeeId = ref("");
    const employeeName = ref("");
    const employeePosition = ref("");
    const employeeEmail =ref('')
    // const dataE =ref({
    //   id: '',
    //   name: '',
    //   email: '',
    //   position: ''
    // })

    const employeeNameState = computed(function () {
      return employeeName.value.length > 2 ? true : false;
    });

    const employeeIdState = computed(function () {
      return employeeId.value.length == 3 ? true : false;
    });

    const addEmployee = ()=>{
      let employeeData = {
        id: employeeId.value,
        name: employeeName.value,
        email: employeeEmail.value,
        position: employeePosition.value
      }
      employeeService.createEmployee(employeeData)
          .then(response => {
            console.log(response);
          })
          .catch(e => {
            console.log(e)
          })

    }

    return {
      pageTopic,
      employeeNameState,
      employeeName,
      employeeId,
      employeeIdState,
      employeePosition,
      addEmployee
    };
  },
};
</script>
  
  <style>
</style>
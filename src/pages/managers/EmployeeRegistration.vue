<template>
  <the-header :pageTopic="pageTopic"></the-header>

  <ManagerNavBar></ManagerNavBar>
  <div class="h2 text-center my-4">Add Employee</div>
  <div class="container card w-25 p-3">
    <form @submit.prevent="addEmployee">
      <div class="">
        <div role="group" class="my-4">
          <label for="input-live">Employee Id:</label>
          <b-form-input
              id="input-live"
              v-model="employeeId"
              :state="employeeIdState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter employee id"
              trim
              required
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
              required
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
              type="email"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter employee email"
              trim
              required
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
              required
          ></b-form-input>
        </div>
        <b-button block variant="primary" type="submit" class="mx-3">Add Employee</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

        <!--      <b-button block class="mx-auto align-items-center justify-content-center" variant="outline-success" type="submit">Add Employee</b-button>-->
      </div>

    </form>
  </div>

</template>

<script>
import {computed, ref} from "vue";
import TheHeader from "@/components/TheHeader.vue";
import ManagerNavBar from "@/components/ManagerNavBar";
import employeeService from "@/services/employee.service";

export default {
  components: {
    TheHeader,
    ManagerNavBar
  },
  setup() {
    const pageTopic = ref("hSenid LMS");
    const employeeId = ref("");
    const employeeName = ref("");
    const employeePosition = ref("");
    const employeeEmail = ref('')


    const employeeNameState = computed(function () {
      return employeeName.value.length > 2 ? true : false;
    });

    const employeeIdState = computed(function () {
      return employeeId.value.length == 3 ? true : false;
    });
    const setInitialFormData =()=>{
      employeeId.value ='';
      employeeName.value = '';
      employeePosition.value ='';
      employeeEmail.value='';
    }

    const addEmployee = () => {
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
      addEmployee,
      employeeEmail,
      setInitialFormData
    };
  },
};
</script>

<style>
</style>
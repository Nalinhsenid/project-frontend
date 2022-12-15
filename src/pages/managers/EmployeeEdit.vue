<template>
  <the-header :pageTopic="pageTopic"></the-header>

  <ManagerNavBar></ManagerNavBar>
  <div class="h2 text-center my-4">Update Employee</div>
  <div class="container card w-25 p-3">
    <form @submit.prevent="updateEmployee">
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
              disabled
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
              aria-describedby="input-live-help input-live-feedback"
              type="email"
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
        <b-button block variant="primary" type="submit" class="mx-3">Update</b-button>
<!--        <b-button type="reset" variant="danger">Reset</b-button>-->
      </div>

    </form>
  </div>

</template>

<script>
import {computed, ref, onMounted} from "vue";
import TheHeader from "@/components/TheHeader.vue";
import ManagerNavBar from "@/components/ManagerNavBar";
import employeeService from "@/services/employee.service.js";
import {useRoute, useRouter} from "vue-router";

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
    const currentEmployee =ref(null);
    const route = useRoute();
    const router =useRouter();





    onMounted(()=>{
      getEmployee(route.params.id)
    })


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

    const getEmployee =(id) => {
      employeeService.getEmployee(id)
          .then(response => {
            currentEmployee.value= response.data;
            employeeId.value = currentEmployee.value.id;
            employeeName.value =currentEmployee.value.name;
            employeeEmail.value = currentEmployee.value.email;
            employeePosition.value = currentEmployee.value.position;
            console.log(currentEmployee.value)
          })
          .catch(e => {
            console.log(e);
          });
    }
    const updateEmployee =() => {
      let employeeData = {
        id: employeeId.value,
        name: employeeName.value,
        email: employeeEmail.value,
        position: employeePosition.value
      }
      employeeService.updateEmployee(route.params.id,employeeData)
          .then( res => {
            console.log(res.data)
            router.push('/employees');


          })
          .catch( e => {
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
      employeeEmail,
      setInitialFormData,
      getEmployee,
      updateEmployee
    };
  },
};
</script>

<style>
</style>
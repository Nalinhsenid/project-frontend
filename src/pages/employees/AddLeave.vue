<template>
  <the-header :pageTopic="pageTopic"></the-header>
  <EmployeeNavBar></EmployeeNavBar>
  <section>
    <div class="h2 text-center  mb-5">Request a Leave</div>

    <div class="container w-25  card p-3 align-items-center">
      <form @submit.prevent="addLeaveRequest" >
        <b-form-group>
          <label for="input-employeeId" class="pb-2">Employee Id:</label>
          <b-form-input
              id="input-employeeId"
              v-model="employeeId"
              :state="employeeIdState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter employee id"
              trim
              required
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-group>
            <label for="input-employeeName" class="pb-2">Employee Name:</label>
            <b-form-input
                id="input-employeeName"
                v-model="employeeName"
                :state="employeeNameState"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Enter employee Name"
                trim
                required
            ></b-form-input>
          </b-form-group>
          <div>
            <label for="dateOfLeave" class="pb-2">Choose a date</label>
            <b-form-input id="dateOfLeave" type="date" class="form-control" v-model="leaveDateValue" :min="min"></b-form-input>
          </div>
        </b-form-group>
        <b-form-group id="input-group-3" label="Leave Type :" label-for="input-3 "
                      class="d-flex align-items-center gap-3">
          <b-form-select
              id="input-3"
              v-model="leaveType"
              :options="leaves"
              required
          ></b-form-select>
        </b-form-group>
        <b-form-group label="Leave Duration : " v-slot="{ ariaDescribedby }" class="align-items-center">
          <b-form-radio v-model="leaveAmount" :aria-describedby="ariaDescribedby" name="radio-inline" value=1 class="" >Full Day
          </b-form-radio>
          <b-form-radio v-model="leaveAmount" :aria-describedby="ariaDescribedby" name="radio-inline" value=0.5 class="" >Half Day
          </b-form-radio>
        </b-form-group>
        <b-button type="submit" variant="primary" class="mx-3">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </form>
    </div>
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import EmployeeNavBar from "@/components/EmployeeNavBar";
import employeeService from "@/services/employee.service";


export default {
  components: {
    EmployeeNavBar,
    TheHeader
  },
  data() {
    const now = new Date()
    const today = now.getFullYear() +'-'+(now.getMonth()+1)+'-'+ now.getDate();



    return {
      pageTopic: 'hSenid LMS',
      min: today,
      leaves: [{text: 'Select One', value: null}, {text:'Annual Leave',value: 'ANNUAL_LEAVE'},{text:'Casual Leave',value: 'CASUAL_LEAVE'},{text:'Sick Leave',value: 'SICK_LEAVE'}],
      employeeId:'',
      employeeName:'',
      leaveDateValue: '',
      leaveType:'',
      leaveAmount:0
    }
  },
  mounted() {
    console.log(this.min);
  },
  methods: {
    setInitialFormData(){
      this.employeeId ='';
      this.employeeName = '';
      this.leaveDateValue ='';
      this.leaveType=null;
      this.leaveAmount =0;
    },
    addLeaveRequest() {
      let leaveRequestData = {
        employeeId: this.employeeId,
        leaveDate: this.leaveDateValue,
        employeeName: this.employeeName,
        leaveType: this.leaveType,
        leaveAmount: +this.leaveAmount,
        isApproved:false
      }
      employeeService.createLeaveRequest(leaveRequestData)
          .then(response => {
            console.log(response);
            this.setInitialFormData()
          })
          .catch(e => {
            console.log(e)
          })
    }
  }


};
</script>
<style>
</style>
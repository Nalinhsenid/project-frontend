<template>
    <the-header :pageTopic="pageTopic"></the-header>
    <EmployeeNavBar></EmployeeNavBar>
    <section>
      <div class="h2 text-center">Leave Balance</div>
    </section>
  <div class="container w-50 mt-5">
    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <!--              <b-th sticky-column></b-th>-->
          <b-th class="text-center">Leave Type</b-th>
          <b-th class="text-center">Leave Balance</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td class="align-middle text-center">Casual Leaves</b-td>
          <b-td class="align-middle text-center">{{casualLeaves}}</b-td>
        </b-tr>
        <b-tr>
          <b-td class="align-middle text-center">Annual Leaves</b-td>
          <b-td class="align-middle text-center">{{ annualLeaves }}</b-td>
        </b-tr>
        <b-tr>
          <b-td class="align-middle text-center">Sick Leaves</b-td>
          <b-td class="align-middle text-center">{{ sickLeaves}}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
  </template>
  
  <script>
  import TheHeader from "@/components/TheHeader.vue";
  import EmployeeNavBar from "@/components/EmployeeNavBar";
  import employeeService from "@/services/employee.service";
  
  
  export default {
    components: {
      TheHeader,
      EmployeeNavBar,
    },
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    mounted() {
      this.currentEmployeeId = this.currentUser.employeeId;
      this.getAcceptedLeaveRequestsOfEmployee();
    },
    data(){
      return{
        pageTopic :"hSenid LMS",
        employeeLeaveBalance :[],
        currentEmployeeId : '',
        casualLeaves:7,
        annualLeaves:14,
        sickLeaves:7
      }
    },
    methods:{
      getAcceptedLeaveRequestsOfEmployee() {
        employeeService.getALlAcceptedLeaveRequestsOfEmployee(this.currentEmployeeId).then(response => {
          this.employeeLeaveBalance = response.data;
          let resultArray = Object.values(this.employeeLeaveBalance);
          for(const [key,value] of Object.entries(resultArray)){
            if(value.leaveType === "CASUAL_LEAVE"){
              this.casualLeaves -= value.leaveAmount;
            }else if(value.leaveType === "ANNUAL_LEAVE"){
              this.annualLeaves -= value.leaveAmount;
            }else if(value.leaveType === "SICK_LEAVE"){
              this.sickLeaves -= value.leaveAmount;
            }else{
              console.log(key);
            }
          }
        }).catch(error => {
          console.log(error);
        })
      }
    }
  
  };
  </script>
  <style>
  </style>
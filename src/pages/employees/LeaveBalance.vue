<template>
    <the-header :pageTopic="pageTopic"></the-header>
    <section>
      <b-container class="bv-example-row my-5">
        <b-row class="justify-content-center mt-3">
          <b-col col lg="2">
            <b-button pill variant="outline-danger"
              ><router-link to="/leavehistory" class="text-decoration-none"
                >Leave History</router-link
              ></b-button
            >
          </b-col>
          <b-col col lg="2"
            ><b-button pill variant="outline-danger"
              ><router-link to="/leavebalance" class="text-decoration-none"
                >Leave Balance</router-link
              >
            </b-button></b-col
          >
          <b-col col lg="2"
            ><b-button pill variant="outline-danger"
              ><router-link to="/addleave" class="text-decoration-none"
                >Request a leave</router-link
              >
            </b-button></b-col
          >
        </b-row>
      </b-container>
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
          <b-td class="align-middle text-center">7</b-td>
        </b-tr>
        <b-tr>
          <b-td class="align-middle text-center">Annual Leaves</b-td>
          <b-td class="align-middle text-center">14</b-td>
        </b-tr>
        <b-tr>
          <b-td class="align-middle text-center">Sick Leaves</b-td>
          <b-td class="align-middle text-center">7</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import TheHeader from "@/components/TheHeader.vue";
  
  
  export default {
    components: {
      TheHeader
    },
    setup(){
      const pageTopic = ref("hSenid LMS");
  
      return{
        pageTopic,
      }
    }
  
  };
  </script>
  <style>
  </style>
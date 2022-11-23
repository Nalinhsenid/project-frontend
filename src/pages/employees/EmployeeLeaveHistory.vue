<template>
  <the-header :pageTopic="pageTopic"></the-header>
  <section>
    <b-container class="bv-example-row my-5">
      <b-row class="justify-content-center mt-3">
        <b-col col lg="2">
          <b-button pill variant="outline-danger">
            <router-link to="/leavehistory" class="text-decoration-none">Leave History</router-link>
          </b-button>
        </b-col>
        <b-col col lg="2">
          <b-button pill variant="outline-danger">
            <router-link to="/leavebalance" class="text-decoration-none">Leave Balance</router-link>
          </b-button>
        </b-col>
        <b-col col lg="2">
          <b-button pill variant="outline-danger">
            <router-link to="/addleave" class="text-decoration-none">Request a leave</router-link>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <div class="h2 text-center">Leave History</div>
    <div class="container my-5">
      <div class="employee-list-table">
        <b-table-simple responsive>
          <b-thead>
            <b-tr>
              <b-th sticky-column></b-th>
              <b-th class="text-center">Leave Date</b-th>
              <b-th class="text-center">Leave type</b-th>
              <b-th class="text-center">Description</b-th>
              <b-th class="text-center"></b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th sticky-column class="align-middle text-center">01</b-th>
              <b-td class="align-middle text-center">16-09-2022</b-td>
              <b-td class="align-middle text-center">Casual</b-td>
              <b-td class="align-middle text-center">Private reason</b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column class="align-middle text-center">02</b-th>
              <b-td class="align-middle text-center">16-06-2022</b-td>
              <b-td class="align-middle text-center">Sick</b-td>
              <b-td class="align-middle text-center">Medical</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </div>
  </section>
</template>

<script>
import {ref} from "vue";
import TheHeader from "@/components/TheHeader.vue";


export default {
  components: {
    TheHeader
  },
  setup() {
    const pageTopic = ref("hSenid LMS - Employee");

    return {
      pageTopic,
    }
  }

};
</script>

<style>

.crud-operation-btn {
  align-content: center;
  text-align: center;
}
</style>





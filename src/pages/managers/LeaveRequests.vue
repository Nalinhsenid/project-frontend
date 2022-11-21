<template>
  <the-header :pageTopic="pageTopic"></the-header>
  <section>
    <b-container class="bv-example-row my-5">
      <b-row class="justify-content-center mt-3">
        <b-col col lg="2">
          <b-button pill variant="outline-danger"
            ><router-link to="/employees" class="text-decoration-none"
              >All Employees</router-link
            ></b-button
          >
        </b-col>
        <b-col col lg="2"
          ><b-button pill variant="outline-danger"
            ><router-link to="/requests" class="text-decoration-none"
              >Requests</router-link
            >
          </b-button></b-col
        >
        <b-col col lg="2"
          ><b-button pill variant="outline-danger"
            ><router-link to="/register" class="text-decoration-none"
              >Add Employee</router-link
            >
          </b-button></b-col
        >
      </b-row>
    </b-container>
    <div class="h2 text-center">Leave Requests</div>
    <div class="container my-5">
      <div class="employee-list-table">
        <b-table-simple responsive>
          <b-thead>
            <b-tr>
              <b-th sticky-column></b-th>
              <b-th class="text-center">Employee ID</b-th>
              <b-th class="text-center">Name</b-th>
              <b-th class="text-center">Date</b-th>
              <b-th class="text-center"></b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th sticky-column class="align-middle text-center">01</b-th>
              <b-td class="align-middle text-center">H01</b-td>
              <b-td class="align-middle text-center">Nalin</b-td>
              <b-td class="align-middle text-center">12-10-2022</b-td>
              <b-td class="align-middle text-center">
                <div class="mt-3 text-center">
                  <b-button-group class="crud-operation-btn">
                    <b-button variant="success">Accept</b-button>
                    <b-button variant="danger">Reject</b-button>
                  </b-button-group>
                </div>
              </b-td>
            </b-tr>
            <b-tr>
              <b-th sticky-column class="align-middle text-center">02</b-th>
              <b-td class="align-middle text-center">H02</b-td>
              <b-td class="align-middle text-center">Nalin2</b-td>
              <b-td class="align-middle text-center">12-10-2022</b-td>
              <b-td class="align-middle text-center">
                <div class="mt-3 text-center">
                  <b-button-group class="crud-operation-btn">
                    <b-button variant="success">Accept</b-button>
                    <b-button variant="danger">Reject</b-button>
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
import { ref } from "vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  setup() {
    const pageTopic = ref("hSenid LMS - Manager");

    return {
      pageTopic,
    };
  },
};
</script>

<style>
</style>
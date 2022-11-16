<template>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register an Employee</router-link>
    </div>
    <ul v-if="hasEmployees">
      <li v-for= "employee in filteredEmployees" :key="employee.id">
        {{employee.id}}
      </li>
    </ul>
    <h3 v-else> No Employees Found</h3>
  </section>

  
</template>
  
<script>
export default {
  computed:{
    filteredEmployees(){
      return this.$store.getters['employees/employees'];
    },
    hasEmployees(){
      return this.$store.getters['employees/hasEmployees'];
    }
  }
};
</script>
  
<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>







<!-- 
<section>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center mt-3">
      <b-col col lg="2"><b-button pill variant="outline-danger">All Employees</b-button></b-col>
      <b-col col lg="2" md="auto"><b-button pill variant="outline-danger">Leave Requests</b-button></b-col>
      <b-col col lg="2"><b-button pill variant="outline-danger">Add Employee</b-button></b-col>
    </b-row>
  </b-container>

  <div class="employee-list-table">
    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <b-th sticky-column></b-th>
          <b-th>ID</b-th>
          <b-th>Name</b-th>
          <b-th>Position</b-th>
          <b-th></b-th>

        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-th sticky-column>01</b-th>
          <b-td>H01</b-td>
          <b-td>Nalin</b-td>
          <b-td>SE</b-td>
          <b-td>
            <div class="mt-3">
              <b-button-group>
                <b-button variant="success">View</b-button>
                <b-button variant="info">Edit</b-button>
                <b-button variant="warning">Delete</b-button>
              </b-button-group>
            </div>
          </b-td>
        </b-tr>
        <b-tr>
          <b-th sticky-column>02</b-th>
          <b-td>H02</b-td>
          <b-td>Nalin2</b-td>
          <b-td>SE</b-td>
          <b-td>
            <div class="mt-3">
              <b-button-group>
                <b-button variant="success">View</b-button>
                <b-button variant="info">Edit</b-button>
                <b-button variant="warning">Delete</b-button>
              </b-button-group>
            </div>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</section> -->
<template>
  <b-container class="bv-example-row my-5">
    <b-row class="justify-content-center mt-3">

      <b-col col lg="2">
        <router-link to="/employees" class="text-decoration-none" >
<!--          @click="()=>{this.$router.go()}"-->
          <b-button pill variant="outline-primary" >All Employees</b-button>
        </router-link>
      </b-col>
      <b-col col lg="2"
      >
        <router-link to="/requests" class="text-decoration-none" >
          <b-button pill variant="outline-primary"
          >Requests
          </b-button>
        </router-link>
      </b-col
      >
      <b-col col lg="2"
      >

        <router-link to="/register" class="text-decoration-none" >
          <b-button pill variant="outline-primary"
          >Create an Employee
          </b-button>
        </router-link>

      </b-col
      >
    </b-row>
  </b-container>
</template>
  
<script>
export default {
};
</script>
  
<style scoped>
</style>
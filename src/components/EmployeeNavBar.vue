<template>
  <b-container class="bv-example-row my-5">
    <b-row class="justify-content-center mt-3">
      <b-col col lg="2">

        <router-link to="/leavehistory" class="text-decoration-none">
          <b-button pill variant="outline-danger" class="text-primary">Leave Timeline
          </b-button>
        </router-link>
      </b-col>
      <b-col col lg="2">
        <router-link to="/leavebalance" class="text-decoration-none">
          <b-button pill variant="outline-danger" class="text-primary">Leave Balance</b-button>
        </router-link>
      </b-col>
      <b-col col lg="2">

        <router-link to="/addleave" class="text-decoration-none">
          <b-button pill variant="outline-danger" class="text-primary">Request a Leave</b-button>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
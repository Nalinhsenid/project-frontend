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
    <div class="h2 text-center">Request a Leave</div>
  </section>
</template>

<script>
import { ref } from "vue";
import TheHeader from "@/components/TheHeader.vue";


export default {
  components: {
    TheHeader
  },
  setup(){
    const pageTopic = ref("hSenid LMS - Employee");

    return{
      pageTopic,
    }
  }

};
</script>
<style>
</style>
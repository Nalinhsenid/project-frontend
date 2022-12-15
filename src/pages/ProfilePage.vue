<template>
  <the-header :pageTopic ="pageTopic"></the-header>
  <section>
    <div v-if="isRoleAdmin === true">
        <ManagerNavBar></ManagerNavBar>
    </div>
    <b-container class="bv-example-row my-5" v-if="isRoleAdmin === false">
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
  </section>
  <div class="container" v-if="isRoleAdmin === true">
    <header class="jumbotron text-center mb-5">
      <h3>
        <strong>{{currentUser.username.toUpperCase()}}</strong> Profile
      </h3>
    </header>
    <p class="text-center mb-5">
      You are logged as an HR admin of hSenid Software Lanka. You are authorized to perform following tasks

    </p>
    <b-list-group class="w-50 text-center mx-auto">
      <b-list-group-item href="#" variant="success" class="mb-4">Create employee profiles</b-list-group-item>
      <b-list-group-item href="#" variant="danger" class="mb-4">View all employees</b-list-group-item>
      <b-list-group-item href="#" variant="warning" class="mb-4">View all leave requests</b-list-group-item>
      <b-list-group-item href="#" variant="info" class="mb-4">Accept or reject leave requests</b-list-group-item>
    </b-list-group>
  </div>
  <div class="container" v-if="isRoleAdmin === false">
    <header class="jumbotron text-center mb-5">
      <h3>
        <strong>{{currentUser.username.toUpperCase()}}</strong> Profile
      </h3>
    </header>
    <p class="text-center mb-5">
      You are logged as an employee of hSenid Software Lanka. You are authorized to perform following tasks

    </p>
    <b-list-group class="w-50 text-center mx-auto">
      <b-list-group-item href="#" variant="success" class="mb-4">Request a leave</b-list-group-item>
      <b-list-group-item href="#" variant="danger" class="mb-4">View your leave requests</b-list-group-item>
      <b-list-group-item href="#" variant="warning" class="mb-4">View your leave balance</b-list-group-item>
      <b-list-group-item href="#" variant="info" class="mb-4">Delete leave requests</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import {ref} from "vue";
import TheHeader from "@/components/TheHeader";
import ManagerNavBar from "@/components/ManagerNavBar";

export default {
  components: {
    ManagerNavBar,
    TheHeader
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    if(this.currentUser.roles[0] === 'ROLE_ADMIN'){
      this.isRoleAdmin = true;
    }

  },
  setup(){
    const pageTopic = ref("Your Profile");
    const isRoleAdmin = ref(false)

    return{
      pageTopic,
      isRoleAdmin
    }
  }

}
</script>

<style scoped>

</style>
<template>
  <the-header :pageTopic ="pageTopic"></the-header>
  <section>
    <b-container class="bv-example-row my-5">
      <b-row class="justify-content-center mt-3">

        <b-col col lg="2">
          <b-button pill variant="outline-danger"><router-link to="/employees" class="text-decoration-none">All Employees</router-link></b-button>
        </b-col>
        <b-col col lg="2"
        ><b-button pill variant="outline-danger"
        ><router-link to="/requests" class="text-decoration-none">Requests</router-link> </b-button
        ></b-col
        >
        <b-col col lg="2"
        ><b-button pill variant="outline-danger"
        ><router-link to="/register" class="text-decoration-none">Add Employee</router-link> </b-button
        ></b-col
        >
      </b-row>
    </b-container>
  </section>
  <div class="h2 text-center">Profile content</div>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>
  </div>
</template>

<script>
import {ref} from "vue";
import TheHeader from "@/components/TheHeader";

export default {
  components: {
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
  },
  setup(){
    const pageTopic = ref("Profile");
    return{
      pageTopic
    }
  }

}
</script>

<style scoped>

</style>
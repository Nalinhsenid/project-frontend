<template>
  <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
// import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>

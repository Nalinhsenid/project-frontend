import { createApp } from 'vue';

import router from './router';
import store from "./store/index.js";
import App from './App.vue';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app =createApp(App);

app.use(router);
// app.use(BootstrapVue);
// app.use(IconsPlugin);
app.use(BootstrapVue3);
app.use(store);

app.mount('#app');

// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//
// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
//
// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)
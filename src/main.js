import { createApp } from 'vue';

import router from './router';
import store from "./store/index.js";
import App from './App.vue';
import BootstrapVue3 from 'bootstrap-vue-3'
// import BVModalPlugin from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app =createApp(App);

app.use(router);
app.use(BootstrapVue3);
// app.use(BVModalPlugin)
app.use(store);

app.mount('#app');

import Vue from 'vue';
import router from './router';
import store from './store';
import socket from './socket';

new Vue({
  router,
  store,
  socket,
}).$mount('#app');
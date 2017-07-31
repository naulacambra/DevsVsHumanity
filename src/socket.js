
import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';

Vue.use(VueSocketio, 'https://everlyrusher.com/DevsVsHumanity');

export default {
    connect: () => {
      console.log('socket connected')
    },
    customEmit: val => {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
};
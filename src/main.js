import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // pastikan Anda memiliki router.js yang benar

const app = createApp(App);

app.use(router); // gunakan router

app.mount('#app'); // hanya satu pemanggilan untuk mount

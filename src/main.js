import { createApp } from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css"; 
import UUID from 'vue-uuid'  

createApp(App).use(Antd).use(UUID).mount('#app')

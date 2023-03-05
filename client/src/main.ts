import { createApp } from 'vue';
import App from './App.vue';
import BcComponents from './components';
import I18 from './languages/index';
import router from './routes';
import { pinia } from './store';
import './style.css';
import './theme/index';
import 'element-plus/dist/index.css';

const app = createApp(App);
// pinia 状态
app.use(pinia);
// const router = createRouter();
// 路由
app.use(router);
// UI
// app.use(Antd);
// 国际化
app.use(I18);

app.mount('#app');

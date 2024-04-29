import { createWebHistory, createRouter } from "vue-router";
import Login from './components/Login.vue';
import Home from './components/HomeRouter.vue';
import Sign from './components/Sign.vue';
const routes = [
  {
    path: "/",
    name: 'Home',
    component: Home,
  },
  {
    path: "/sign",
    name: 'Sign',
    component: Sign,
  },
  {
    path: "/login",
    name: 'Login',
    component: Login,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
import { createWebHistory, createRouter } from "vue-router";
import Login from './components/Login.vue';
import Home from './components/HomeRouter.vue';
import Sign from './components/Sign.vue';
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/sign",
    component: Sign,
  },
  {
    path: "/login",
    component: Login,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
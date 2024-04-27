import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/HomeRouter.vue';
import Detail from './components/DetailList.vue';
const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';
// import EnterpriseView from '../pages/EnterpriseView.vue';

const routes = [
  { path: '/', component: HomeView },
  // { path: '/empresa', component: EnterpriseView },
  // { path: '/product/:id', component: ProductView},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;

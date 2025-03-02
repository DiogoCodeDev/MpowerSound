import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';

const routes = [
  { path: '/', component: HomeView },
  // { path: '/product/:id', component: ProductView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;

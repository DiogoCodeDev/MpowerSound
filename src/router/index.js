import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';
import ProductView from '../pages/ProductView.vue';
import ProductGallery from '../pages/ProductGallery.vue';
import EnterpriseView from '../pages/EnterpriseView.vue';
import SupportView from '../pages/SupportView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/empresa', component: EnterpriseView },
  { path: '/suporte', component: SupportView },
  { path: '/product-gallery/:filter', component: ProductGallery },
  { path: '/product/:id', component: ProductView},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;

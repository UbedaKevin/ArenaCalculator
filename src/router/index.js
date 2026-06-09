import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CalculatorView from '../views/CalculatorView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: CalculatorView,
  },
  {
    path: '/tier-list',
    name: 'tierlist',
    component: () => import('../views/TierListView.vue'),
  },
  {
    path: '/class-guide',
    name: 'classguide',
    component: () => import('../views/ClassGuideView.vue'),
  },
  {
    path: '/ladder',
    name: 'ladder',
    component: () => import('../views/LadderView.vue'),
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('../views/ToolsView.vue'),
  },
  {
    path: '/meta',
    name: 'meta',
    component: () => import('../views/MetaView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('../views/NotFoundView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

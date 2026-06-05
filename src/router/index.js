import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CalculatorView from '../views/CalculatorView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  // },
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

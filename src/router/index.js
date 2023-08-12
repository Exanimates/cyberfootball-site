import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Tournaments from '../views/Tournaments.vue';
import Contacts from '../views/Contacts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/tournaments', component: Tournaments },
  { path: '/contacts', component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

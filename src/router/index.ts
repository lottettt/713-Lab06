import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/eventListView.vue'
import eventDetailView from '../views/eventDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'event-list-view',
    component: EventListView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/event/:id',
    name: 'event-detail-view',
    component: eventDetailView,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import IndexPage from '../pages/IndexPage.vue';
import ProjectPage from '../pages/ProjectPage.vue'; // <-- ProjectPage is imported here
// import CustomerPage from '../pages/CustomerPage.vue';

// Define the routes with type `RouteRecordRaw` for type safety
const routes: Array<RouteRecordRaw> = [
  {
    path: '/', // <-- URL path for the ProjectPage component
    name: 'Index',
    component: IndexPage, // <-- ProjectPage component is linked to this route
  },
  {
    path: '/projects',
    name: 'Project',
    component: ProjectPage, // Add the route for the CustomerPage
  },
];

// Create and export the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // <-- Using history mode for clean URLs
  routes, // <-- Routes array, where ProjectPage is part of
});

export default router;

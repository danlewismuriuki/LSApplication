// import { route } from 'quasar/wrappers';
// import {
//   createMemoryHistory,
//   createRouter,
//   createWebHashHistory,
//   createWebHistory,
// } from 'vue-router';

// import routes from './routes';

// /*
//  * If not building with SSR mode, you can
//  * directly export the Router instantiation;
//  *
//  * The function below can be async too; either use
//  * async/await or return a Promise which resolves
//  * with the Router instance.
//  */

// export default route(function (/* { store, ssrContext } */) {
//   const createHistory = process.env.SERVER
//     ? createMemoryHistory
//     : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

//   const Router = createRouter({
//     scrollBehavior: () => ({ left: 0, top: 0 }),
//     routes,

//     // Leave this as is and make changes in quasar.conf.js instead!
//     // quasar.conf.js -> build -> vueRouterMode
//     // quasar.conf.js -> build -> publicPath
//     history: createHistory(process.env.VUE_ROUTER_BASE),
//   });

//   return Router;
// });

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

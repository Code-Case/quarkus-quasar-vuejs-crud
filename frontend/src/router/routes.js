const routes = [

  { path: "/", component: () => import("pages/Index.vue") },
  { path: "/users", name: "user", component: () => import("pages/UserPage") },
  { path: "/news", name: "news", component: () => import("pages/NewsPage") },
  { path: "*", component: () => import("pages/Error404.vue") },

];

export default routes;

const routes = [

  { path: "/", component: () => import("pages/Index.vue") },
  { path: "/users", name: "usereditor", component: () => import("pages/UserPage") },
  { path: "/news", name: "newsstream", component: () => import("pages/NewsPage") },
  { path: "*", component: () => import("pages/Error404.vue") },

];

export default routes;

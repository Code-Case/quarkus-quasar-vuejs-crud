const routes = [

  { path: "/", component: () => import("pages/Index.vue") },
  { path: "/users", name: "usereditor", component: () => import("pages/Users.vue") },
  { path: "/news", name: "newsstream", component: () => import("pages/News.vue") },
  { path: "*", component: () => import("pages/Error404.vue") },

];

export default routes;

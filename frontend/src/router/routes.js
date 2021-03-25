const routes = [

  { path: "/", name: "home", component: () => import("pages/Index.vue") },
  { path: "/profil", name: "profil", component: () => import("pages/UserPage") },
  { path: "/news", name: "news", component: () => import("pages/NewsPage") },
  { path: "*", component: () => import("pages/Error404.vue") }

];

export default routes;

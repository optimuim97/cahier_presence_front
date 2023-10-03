const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "/", component: () => import("pages/Dashboard.vue") }],
  },
  {
    path: "/admin",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/admin", component: () => import("pages/Dashboard.vue") },
    ],
  },
  {
    path: "/register",
    component: () => import("pages/Register.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

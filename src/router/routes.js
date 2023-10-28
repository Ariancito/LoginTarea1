const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
    children: [
      { path: "login", component: () => import("pages/LoginTarea.vue") },
    ],
  },

  {
    path: "/login",
    component: () => import("pages/LoginTarea.vue"),
  },

  //ESTA ES LA TAREA PROFE, LOGIN EN ENTORNO DE YOUTUBE /Layout/login -------------------------------
  {
    path: "/Layout",
    component: () => import("layouts/YoutubeLogin.vue"),
    children: [
      { path: "login", component: () => import("pages/LoginTarea.vue") },
    ],
  },

  // ------------------------------------------------------------------------------------------------

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

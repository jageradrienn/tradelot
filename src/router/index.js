import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      redirect: { name: "dashboard" },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/offers",
      name: "offers",
      component: () => import("../views/OffersView.vue"),
    },
    {
      path: "/opportunities",
      name: "opportunities",
      component: () => import("../views/OpportunitiesView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/SettingsView.vue"),
      children: [
        {
          path: "",
          redirect: { name: "myprofile" }
        },
        {
          path: "myprofile",
          name: "myprofile",
          component: () => import("../components/Myprofile.vue"),
        },
        {
          path: "changepw",
          name: "changepw",
          component: () => import("../components/ChangePw.vue"),
        },
        {
          path: "teammembers",
          name: "teammembers",
          component: () => import("../components/TeamMembers.vue"),
        },
      ],
    },
  ],
});

export default router;

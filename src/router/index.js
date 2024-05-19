import { createRouter, createWebHistory } from "vue-router";
import EventListView from "@/views/EventListView.vue";
import AboutView from "@/views/AboutView.vue";
import EventLayout from "@/views/event/Layout.vue";
import EventDetails from "@/views/event/Details.vue";
import EventRegister from "@/views/event/Register.vue";
import EventEdit from "@/views/event/Edit.vue";

import CreateEventview from "@/views/CreateEventview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: "/event/:id",
      name: "event-layout",
      props: true,
      component: EventLayout,
      children: [
        {
          path: "",
          name: "event-details",
          component: EventDetails,
        },
        {
          path: "",
          name: "event-register",
          component: EventRegister,
        },
        {
          path: "",
          name: "event-edit",
          component: EventEdit,
        },
      ],
    },
    {
      path: "/event/create-event",
      name: "create-event",
      props: true,
      component: CreateEventview,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
  ],
});

export default router;

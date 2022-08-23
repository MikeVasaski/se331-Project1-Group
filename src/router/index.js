import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import EventDetails from "@/views/event/EventDetail.vue";
import EventLayout from "@/views/event/EventLayout.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NProgress from "nprogress";
import EventService from "@/service/EventService.js";
import GStore from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
    }),
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },

  {
    path: "/",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    beforeEnter: (to) => {
      return EventService.getPeople(to.params.id) //return and params.id
        .then((response) => {
          GStore.people = response.data;
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              name: "404Resource",
              params: { resource: "people" },
            };
          } else {
            return { name: "NetworkError" };
          }
        });
    },
    children: [
      {
        path: "people/:id",
        name: "EventDetails",
        component: EventDetails,
        props: true,
      },
      {
        path: "people/:id",
        name: "Doctor",
        component: EventDoctor,
        props: true,
      },
      {
        path: "people/:id",
        name: "Vaccine",
        component: EventVaccine,
        props: true,
      },
    ],
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFoundView,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;

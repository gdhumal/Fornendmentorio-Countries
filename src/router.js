import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Country from "./components/Country.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },
    // {
    //   path: "/country",
    //   component: Country,
    //   props: true
    // },
    {
      path: "/country/:name",
      name: "country",
      component: Country,
    },
  ],
});

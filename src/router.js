import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Price from "./views/Price.vue";
import Report from "./views/Report.vue";
import Admin from "./views/Admin.vue";
import AdminList from "./components/admin/list.vue";
import ReportComplete from "./views/ReportComplete.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/price",
      component: Price
    },
    {
      path: "/report",
      component: Report
    },
    {
      path: "/admin",
      component: Admin
    },
    {
      path: "/report-complete",
      component: ReportComplete
    },
    {
      path: "/admin-home",
      components: {
        maincontent : AdminList
      }
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

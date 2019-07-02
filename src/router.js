import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Price from "./views/Price.vue";
import Report from "./views/Report.vue";
import Admin from "./views/Admin.vue";
import AdminList from "./components/admin/list.vue";
import AdminAdd from "./components/admin/add.vue";
import AdminCheckList from "./components/admin/checklist.vue";
import AdminMessage from "./components/admin/message.vue";
import AdminCalendar from "./components/admin/calender.vue";


import ReportComplete from "./views/ReportComplete.vue";

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
      component: Admin,
      children: [
        {
          path: "checklist",
          component: AdminCheckList
        },
        {
          path: "add",
          component: AdminAdd
        },
        {
          path: "list",
          component: AdminList
        },
        {
          path: "message",
          component: AdminMessage
        },
        {
          path: "calender",
          component: AdminCalendar
        },
      ]
    },
    {
      path: "/report-complete",
      component: ReportComplete
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

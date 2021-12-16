import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import ProductDetail from "../views/ProductDetail.vue";
import Authentication from "../views/Authentication.vue";
import ResultList from "../views/ResultList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "ResultList",
    component: ResultList,
  },
  {
    path: "/productDetail",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/Authentication",
    name: "Authentication",
    component: Authentication,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

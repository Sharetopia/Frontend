import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../screens/Home.vue";
import ProductDetail from "../screens/ProductDetail.vue";
import Auth from "../screens/Auth.vue";
import Authentication from "../screens/Authentication.vue";
import ResultList from "../screens/ResultList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Auth,
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

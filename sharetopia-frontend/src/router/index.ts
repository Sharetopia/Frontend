import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeScreen from "../screens/HomeScreen.vue";
import ProductDetailScreen from "../screens/ProductDetailScreen.vue";
import Auth from "../screens/Auth.vue";
import Authentication from "../screens/AuthenticationScreen.vue";
import SearchResultScreen from "../screens/SearchResultScreen.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeScreen,
  },
  {
    path: "/login",
    name: "Login",
    component: Auth,
  },
  {
    path: "/search",
    name: "ResultList",
    component: SearchResultScreen,
  },
  {
    path: "/productDetail",
    name: "ProductDetail",
    component: ProductDetailScreen,
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: Authentication,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

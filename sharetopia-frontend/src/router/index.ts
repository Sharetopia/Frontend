import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainScreen from "../screens/MainScreen.vue";
import ProductDetailComponent from "../components/ProductDetailComponent.vue";
import AuthenticationScreen from "../screens/AuthenticationScreen.vue";
import SearchResultComponent from "../components/SearchResultComponent.vue";
import LoginComponent from "@/components/LoginComponent.vue";
import RegistrationComponent from "@/components/RegistrationComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: MainScreen,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
    ],
  },
  {
    path: "/search",
    name: "ResultList",
    component: MainScreen,
    children: [
      {
        path: "",
        component: SearchResultComponent,
      },
    ],
  },
  {
    path: "/productDetail",
    name: "ProductDetail",
    component: MainScreen,
    children: [
      {
        path: "",
        component: ProductDetailComponent,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: AuthenticationScreen,
    children: [
      {
        path: "",
        component: LoginComponent,
      },
    ],
  },
  {
    path: "/registration",
    name: "AuthenticationScreen",
    component: AuthenticationScreen,
    children: [
      {
        path: "",
        component: RegistrationComponent,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

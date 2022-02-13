import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainScreen from "../screens/MainScreen.vue";
import MainCenteredScreen from "../screens/MainCenteredScreen.vue";
import ProductDetailComponent from "../components/ProductDetailComponent.vue";
import AuthenticationScreen from "../screens/AuthenticationScreen.vue";
import SearchResultComponent from "../components/SearchResultComponent.vue";
import LoginComponent from "@/components/LoginComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import MyRentsComponent from "@/components/MyRentsComponent.vue";
import MyAdvertsComponent from "@/components/MyAdvertsComponent.vue";
import ProfileEditComponent from "@/components/ProfileEditComponent.vue";

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
    path: "/my",
    name: "MyOverview",
    component: MainScreen,
    children: [
      {
        path: "bookings",
        component: MyRentsComponent,
      },
      {
        path: "adverts",
        component: MyAdvertsComponent,
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
    path: "/profileEdit",
    name: "profileEdit",
    component: MainCenteredScreen,
    children: [
      {
        path: "",
        component: ProfileEditComponent,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

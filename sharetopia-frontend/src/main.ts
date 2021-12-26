import { createApp } from "vue";
// import Amplify from "aws-amplify";
// import {
//   applyPolyfills,
//   defineCustomElements,
// } from "@aws-amplify/ui-components/loader";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import aws_exports from "./aws-exports";
//
// Amplify.configure(aws_exports);
// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });

createApp(App).use(store).use(router).mount("#app");

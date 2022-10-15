import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/main.css";
import "./assets/base.css";

const app = createApp(App);

app.use(router).use(store).mount("#app");

import { createApp } from "vue";

import "./main.css";
import "virtual:uno.css";

import App from "./App.vue";
import router from "./plugins/router";

createApp(App).use(router).mount("#app");

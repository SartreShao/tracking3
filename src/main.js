import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AV from "leancloud-storage";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

AV.init({
  appId: "aO6MQp5g8ncVqL2K1Igp1KQA-MdYXbMMI",
  appKey: "kKLi62t5UmHx1ZieDvV764MF",
  serverURL: "https://api.tracking3.com"
});

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount("#app");

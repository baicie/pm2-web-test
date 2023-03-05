import { App } from "vue";
import * as components from "./components";
import "./index.d.ts";

export function install(app: App) {
  Object.keys(components).forEach(function (key) {
    // @ts-ignore
    const component = components[key];
    app.component(key, component);
    // app.config.globalProperties.$message = components.message;
    return app;
  });
}

export default {
  install: install,
};

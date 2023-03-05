import { I as defineComponent, c as createElementBlock, o as openBlock, ar as createApp } from "./@vue.87e0fdf9.js";
import { i as installer } from "./element-plus.13472490.js";
import "./lodash-es.202932be.js";
import "./@vueuse.48bf529b.js";
import "./@element-plus.c37adcc3.js";
import "./@popperjs.8eb851c6.js";
import "./@ctrl.ab5a38b7.js";
import "./dayjs.dc3edacb.js";
import "./async-validator.3256c125.js";
import "./memoize-one.ba052a03.js";
import "./escape-html.18ec2d56.js";
import "./normalize-wheel-es.a50d6d2e.js";
import "./@floating-ui.cd99e3a9.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, "App");
    };
  }
});
const app = createApp(_sfc_main);
app.use(installer);
app.mount("#app");

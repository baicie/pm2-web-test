import {
  createRouter as _createRouter,
  createMemoryHistory,
  createWebHistory,
} from "vue-router";
import { afterEach, beforeEach } from "./helper";
import routes from "./routes";
// import config from "../../config.js";

const base = "/client/";

const router = _createRouter({
  // @ts-ignore
  history: import.meta.env.SSR
    ? createMemoryHistory(base)
    : createWebHistory(base),
  routes,
});

router.beforeEach(beforeEach);
router.afterEach(afterEach);

export default router;

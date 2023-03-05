import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import NProgress from "nprogress";
import { useEnv } from "../utils";
const { isSSR } = useEnv();
export function beforeEach(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  console.log(`[route] from ${from.fullPath} to ${to.fullPath}`);
  if (to.path !== from.path) {
    isSSR ? "" : NProgress.start();
  }
  next();
}

export function afterEach(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  if (to.path !== from.path) {
    isSSR ? "" : NProgress.done();
    isSSR ? "" : (document.documentElement.scrollTop = 0);
  }
}

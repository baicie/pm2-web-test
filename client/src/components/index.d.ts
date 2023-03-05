import { BcPage } from "./components";

declare module "vue" {
  export interface GlobalComponents {
    // XtxSkeleton: typeof XtxSkeleton;
    BcPage: typeof BcPage;
  }
}

export {};

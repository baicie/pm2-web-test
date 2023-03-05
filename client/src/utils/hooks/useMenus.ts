import { groupBy, sortBy } from "lodash-es";
import { ComputedRef, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export const useMenus = (): {
  menus: ComputedRef<any[]>;
  dataSource: ComputedRef<any[]>;
  currentMenuIndex: ComputedRef<number>;
  activeMenuItem: ComputedRef<string>;
} => {
  const route = useRoute();
  const router = useRouter();
  const routes = router.getRoutes();

  const menus = computed(() => {
    const path = route.path;
    const category = path.split("/")[1];

    const ms = routes;

    return ms;
  });

  const activeMenuItem = computed(() => {
    return route.path.split("-cn")[0];
  });

  const currentMenuIndex = computed(() => {
    return menus.value.findIndex((m) => m.path === activeMenuItem.value);
  });

  const dataSource = computed(() => {
    const group = groupBy(menus.value, (m: any) => m.type || m.category);
    const keys: string[] = Object.keys(group);
    const newMenus = keys.map((key) => {
      return {
        title: key,
        //   order: typeOrder[key] && typeOrder[key].order,
        //   enTitle: typeOrder[key] && typeOrder[key].en,
        children: sortBy(group[key], "title"),
      };
    });
    //   .sort((a, b) => a.order - b.order);
    return keys.length === 1 ? menus.value : newMenus;
  });
  return { menus, dataSource, activeMenuItem, currentMenuIndex };
};

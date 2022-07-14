import type { RouteRecordNormalized } from 'vue-router';
import pinia, { useAppStore } from '@/store'

const modules = import.meta.globEager('./modules/*.ts');
const externalModules = import.meta.globEager('./externalModules/*.ts');

function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default;
    if (!defaultModule) return;
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    result.push(...moduleList);
  });
  return result;
}

const appStore = useAppStore(pinia);

export const appRoutes: RouteRecordNormalized[] = formatModules(modules, []);
// export const appRoutes: RouteRecordNormalized[] = appStore.serverMenu;

export const appExternalRoutes: RouteRecordNormalized[] = formatModules(
  externalModules,
  []
);

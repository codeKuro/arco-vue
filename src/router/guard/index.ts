import type { Router } from 'vue-router';
import { setRouteEmitter } from '@/utils/route-listener';
import setupPermissionGuard from './permission';
import setupServerPermissionGuard from './serverPermission';

function setupPageGuard(router: Router) {
  router.beforeEach(async (to) => {
    // emit route change
    console.log(111111111111)
    setRouteEmitter(to);
  });
}

export default function createRouteGuard(router: Router) {
  setupPageGuard(router);
  setupServerPermissionGuard(router);
  setupPermissionGuard(router);
}

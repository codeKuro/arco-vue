import { DEFAULT_LAYOUT } from '@/router/constans';

export default {
  path: '/server',
  name: 'Server',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.server',
    requiresAuth: true,
    icon: 'icon-list',
    order: 1,
  },
  children: [
    {
      path: '/menu-management',
      name: 'MenuManagement',
      component: () => import('@/views/server/menu-management/index.vue'),
      meta: {
        locale: 'menu.server.menuManagement',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

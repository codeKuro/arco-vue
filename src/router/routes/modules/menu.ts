import { DEFAULT_LAYOUT } from '@/router/constans';

export default {
  path: '/menu',
  name: 'menu',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.menu',
    requiresAuth: true,
    icon: 'icon-list',
    order: 1,
  },
  children: [
    {
      path: 'menu-list', // The midline path complies with SEO specifications
      name: 'MenuList',
      component: () => import('@/views/menu/menu-list/index.vue'),
      meta: {
        locale: 'menu.menu.menuList',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

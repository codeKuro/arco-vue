import { DEFAULT_LAYOUT } from '@/router/constans';

export default {
  path: '/authority',
  name: 'Authority',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.authority',
    requiresAuth: true,
    icon: 'icon-list',
    order: 2,
  },
  children: [
    {
      path: '/role-management',
      name: 'RoleManagement',
      component: () => import('@/views/authority/role-management/index.vue'),
      meta: {
        locale: 'menu.authority.roleManagement',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: '/administrators-management',
      name: 'AdministratorsManagement',
      component: () => import('@/views/authority/administrators-management/index.vue'),
      meta: {
        locale: 'menu.authority.administratorsManagement',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

import { DEFAULT_LAYOUT } from '@/router/constans';

export default {
  path: '/enterprise',
  name: 'Enterprise',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.enterprise',
    requiresAuth: true,
    icon: 'icon-list',
    order: 3,
  },
  children: [
    {
      path: '/enterprise-management',
      name: 'EnterpriseManagement',
      component: () => import('@/views/enterprise/enterprise-management/index.vue'),
      meta: {
        locale: 'menu.enterprise.enterpriseManagement',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: '/enterprise-member-management',
      name: 'EnterpriseMemberManagement',
      component: () => import('@/views/enterprise/enterprise-member-management/index.vue'),
      meta: {
        locale: 'menu.enterprise.enterpriseMemberManagement',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

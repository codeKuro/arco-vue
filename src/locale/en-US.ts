import localeMessageBox from '@/components/message-box/locale/en-US';
import localeLogin from '@/views/login/locale/en-US';

import localeWorkplace from '@/views/dashboard/workplace/locale/en-US';

import localeMonitor from '@/views/dashboard/monitor/locale/en-US';

import localeSearchTable from '@/views/list/search-table/locale/en-US';
import localeCardList from '@/views/list/card/locale/en-US';

import localeMenuManagement from '@/views/server/menu-management/locale/en-US';

import localeRoleManagement from '@/views/authority/role-management/locale/en-US';
import localeAdministratorsManagement from '@/views/authority/administrators-management/locale/en-US';

import localeEnterpriseManagement from '@/views/enterprise/enterprise-management/locale/en-US';
import localeEnterpriseMemberManagement from '@/views/enterprise/enterprise-member-management/locale/en-US';

import localeStepForm from '@/views/form/step/locale/en-US';
import localeGroupForm from '@/views/form/group/locale/en-US';

import localeBasicProfile from '@/views/profile/basic/locale/en-US';

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/en-US';
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/en-US';

import localeSuccess from '@/views/result/success/locale/en-US';
import localeError from '@/views/result/error/locale/en-US';

import locale403 from '@/views/exception/403/locale/en-US';
import locale404 from '@/views/exception/404/locale/en-US';
import locale500 from '@/views/exception/500/locale/en-US';

import localeUserInfo from '@/views/user/info/locale/en-US';
import localeUserSetting from '@/views/user/setting/locale/en-US';

import localeSettings from './en-US/settings';

export default {
  'menu.dashboard': 'Dashboard',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.server': 'Service Management',
  'menu.authority': 'Authority Management',
  'menu.enterprise': 'Enterprise Management',
  'menu.server.Server': 'Service Management',
  'menu.server.MenuManagement': 'Menu Management',
  'menu.server.Authority': 'Authority Management',
  'menu.server.RoleManagement': 'Role Management',
  'menu.server.AdministratorsManagement': 'Administrators Management',
  'menu.server.Enterprise': 'Enterprise Management',
  'menu.server.EnterpriseManagement': 'Enterprise Management',
  'menu.server.EnterpriseMemberManagement': 'Enterprise Member Management',
  'menu.server.User': 'User Center',
  'menu.server.Setting': 'User Setting',
  'menu.menu': 'Menu',
  'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': 'FAQ',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,

  ...localeMonitor,
  ...localeSearchTable,
  ...localeCardList,
  ...localeMenuManagement,
  ...localeRoleManagement,
  ...localeAdministratorsManagement,
  ...localeEnterpriseManagement,
  ...localeEnterpriseMemberManagement,
  ...localeStepForm,
  ...localeGroupForm,
  ...localeBasicProfile,
  ...localeDataAnalysis,
  ...localeMultiDAnalysis,
  ...localeSuccess,
  ...localeError,
  ...locale403,
  ...locale404,
  ...locale500,
  ...localeUserInfo,
  ...localeUserSetting,
};

import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';

import localeMonitor from '@/views/dashboard/monitor/locale/zh-CN';

import localeSearchTable from '@/views/list/search-table/locale/zh-CN';
import localeCardList from '@/views/list/card/locale/zh-CN';

import localeMenuManagement from '@/views/server/menu-management/locale/zh-CN';

import localeRoleManagement from '@/views/authority/role-management/locale/zh-CN';
import localeAdministratorsManagement from '@/views/authority/administrators-management/locale/zh-CN';

import localeEnterpriseManagement from '@/views/enterprise/enterprise-management/locale/zh-CN';
import localeEnterpriseMemberManagement from '@/views/enterprise/enterprise-member-management/locale/zh-CN';

import localeStepForm from '@/views/form/step/locale/zh-CN';
import localeGroupForm from '@/views/form/group/locale/zh-CN';

import localeBasicProfile from '@/views/profile/basic/locale/zh-CN';

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/zh-CN';
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/zh-CN';

import localeSuccess from '@/views/result/success/locale/zh-CN';
import localeError from '@/views/result/error/locale/zh-CN';

import locale403 from '@/views/exception/403/locale/zh-CN';
import locale404 from '@/views/exception/404/locale/zh-CN';
import locale500 from '@/views/exception/500/locale/zh-CN';

import localeUserInfo from '@/views/user/info/locale/zh-CN';
import localeUserSetting from '@/views/user/setting/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.server': '服务管理',
  'menu.authority': '权限管理',
  'menu.enterprise': '企业管理',
  'menu.server.Server': '服务管理',
  'menu.server.MenuManagement': '节点管理',
  'menu.server.Authority': '权限管理',
  'menu.server.RoleManagement': '角色管理',
  'menu.server.AdministratorsManagement': '管理员管理',
  'menu.server.Enterprise': '企业管理',
  'menu.server.EnterpriseManagement': '企业管理',
  'menu.server.EnterpriseMemberManagement': '企业成员管理',
  'menu.server.User': '个人中心',
  'menu.server.Setting': '用户设置',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
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

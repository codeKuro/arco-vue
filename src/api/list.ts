import axios from 'axios';
import qs from 'query-string';
import type { DescData } from '@arco-design/web-vue/es/descriptions/interface';

export interface PolicyRecord {
  id: string;
  pid: number;
  type: number;
  appName: string;
  uri: string;
  name: string;
  identify: string;
  isMenu: number;
  icon: string;
  urlQuery: string;
  target: string;
  remark: string;
  status: number;
  sort: number;
  scopes: string;
}

export interface PolicyParams extends Partial<PolicyRecord> {
  scopes: string;
}

export interface PolicyListRes {
  nodeTree: PolicyRecord[];
}

export function queryPolicyList(params: PolicyParams) {
  return axios.get<PolicyListRes>('/admin/v1/auth/node-tree', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}
export interface TreeItem {
  title: string;
  key: string;
  children?: TreeItem[];
}
export interface ServiceRecord {
  id: number;
  title: string;
  description: string;
  name?: string;
  actionType?: string;
  icon?: string;
  data?: DescData[];
  enable?: boolean;
  expires?: boolean;
}
export function queryInspectionList() {
  return axios.get('/api/list/quality-inspection');
}

export function queryTheServiceList() {
  return axios.get('/api/list/the-service');
}

export function queryRulesPresetList() {
  return axios.get('/api/list/rules-preset');
}

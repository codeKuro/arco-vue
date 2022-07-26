import axios from 'axios';
import qs from 'query-string';

export interface MenuRecord {
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
  checkProduct: number;
}

export interface MenuParams {
  scopes: string;
}

export interface MenuListRes {
  nodeTree: MenuRecord[];
}

export interface TreeItem {
  title: string;
  key: string;
  children?: TreeItem[];
}
export interface MenuRecordRes {
  id: string;
}

export interface MenuStatusRes {
  id: string;
  status: number;
}

export interface MenuDeleteRes {
  affectRows: number;
  totla: number;
}

export interface MenuIdList {
  ids: number[];
}

export function queryMenuList(params: MenuParams) {
  return axios.get<MenuListRes>('/admin/v1/auth/node-tree', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}

export function createMenuRecord(data: MenuRecord) {
  return axios.post<MenuRecordRes>('/admin/v1/auth/node-create', data);
}

export function getMenuRecord(params: MenuRecordRes) {
  return axios.get<MenuRecord>('/admin/v1/auth/get-node', { params });
}

export function updateMenuRecord(data: MenuRecord) {
  return axios.post<MenuRecordRes>('/admin/v1/auth/node-update', data);
}

export function deleteMenuRecord(data: MenuIdList) {
  return axios.post<MenuDeleteRes>('/admin/v1/auth/delete-node', data);
}

export function updateMenuStatusRecord(data: MenuRecordRes) {
  return axios.post<MenuStatusRes>('/admin/v1/auth/set-node-status', data);
}

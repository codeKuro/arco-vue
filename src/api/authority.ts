import axios from 'axios';
import qs from 'query-string';

export interface RoleRecord {
  id: string;
  type: number;
  appName: string;
  name: string;
  identify: string;
  remark: string;
  status: number;
  sort: number;
  scopes: string;
  createdAt: string;
  isSupperRole: number;
  nodeIds: string;
}

export interface AdministratorsRecord {
  id: string;
  username: string;
  nickname: string;
  password: string;
  mobile: string;
  email: string;
  avatar: string;
  // isSuperRole: number;
  // isSuperAdmin: number;
  // roleNames: string;
  // roleIds: string;
  status: number;
}

export interface RoleParams {
  scopes: string;
}

export interface RoleListRes {
  roleList: RoleRecord[];
}

export interface RoleRecordRes {
  id: string;
}

export interface RoleStatusRes {
  id: string;
  status: number;
}

export interface RoleDeleteRes {
  affectRows: number;
  totla: number;
}

export interface RoleIdList {
  ids: number[];
}

export interface AdministratorsParams extends Partial<AdministratorsRecord> {
  page: number;
  size: number;
}

export interface AdministratorsListRes {
  list: AdministratorsRecord[];
  total: number;
}

export interface AdministratorsRecordRes {
  id: string;
}

export interface AdministratorsStatusRes {
  id: string;
  status: number;
}

export function queryRoleList(params: RoleParams) {
  return axios.get<RoleListRes>('/admin/v1/auth/role-index', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}

export function createRoleRecord(data: RoleRecord) {
  return axios.post<RoleRecordRes>('/admin/v1/auth/create-role', data);
}

export function getRoleRecord(params: RoleRecordRes) {
  return axios.get<RoleRecord>('/admin/v1/auth/role-detail', { params });
}

export function updateRoleRecord(data: RoleRecord) {
  return axios.post<RoleRecordRes>('/admin/v1/auth/role-update', data);
}

export function updateRoleStatusRecord(data: RoleRecordRes) {
  return axios.post<RoleStatusRes>('/admin/v1/auth/set-role-status', data);
}

export function deleteRoleRecord(data: RoleIdList) {
  return axios.post<RoleDeleteRes>('/admin/v1/auth/delete-role', data);
}

export function queryAdministratorsList(params: AdministratorsParams) {
  return axios.get<AdministratorsListRes>('/admin/v1/account-list', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}

export function createAdministratorsRecord(data: AdministratorsRecord) {
  return axios.post<AdministratorsRecordRes>('/admin/v1/create-account', data);
}

export function updateAdministratorsRecord(data: AdministratorsRecord) {
  return axios.post<AdministratorsRecordRes>('/admin/v1/update-account', data);
}

export function updateAdministratorsStatusRecord(
  data: AdministratorsRecordRes
) {
  return axios.post<AdministratorsStatusRes>(
    '/admin/v1/set-account-status',
    data
  );
}

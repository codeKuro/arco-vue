import axios from 'axios';
import qs from 'query-string';

export interface EnterpriseRecord {
  id: string;
  name: string;
  nickname: string;
  password: string;
  email: string;
  maxTeamNum: number;
  teamNum: number;
  maxMemberNum: number;
  memberNum: number;
  productNum: number;
  status: number;
  createdAt: string;
}

export interface EnterpriseMemberRecord {
  id: string;
  nickname: string;
  email: string;
  emailVerified: number;
  lastLoginIp: string;
  lastLoginAt: string;
  relationCompanyNum: number;
  topId: string;
  status: number;
  createdAt: string;
}

export interface EnterpriseParams extends Partial<EnterpriseRecord> {
  page: number;
  size: number;
}

export interface EnterpriseListRes {
  list: EnterpriseRecord[];
  total: number;
}

export interface EnterpriseMemberListRes {
  list: EnterpriseMemberRecord[];
  total: number;
}

export interface EnterpriseConfigRes {
  maxTeamNum: number;
  maxMemberNum: number;
}

export interface EnterpriseRecordRes {
  id: string;
}

export interface EnterpriseStatusRes {
  id: string;
  status: number;
}

export function queryEnterpriseList(params: EnterpriseParams) {
  return axios.get<EnterpriseListRes>('/admin/v1/company-list', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}

export function queryEnterpriseMemberList(params: EnterpriseParams) {
  return axios.get<EnterpriseMemberListRes>('/admin/v1/member-list', {
    params,
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}

export function getEnterpriseRecord() {
  return axios.get<EnterpriseConfigRes>('/admin/v1/company-rule', {
    paramsSerializer: (obj) => {
      return qs.stringify(obj);
    },
  });
}

export function createEnterpriseRecord(data: EnterpriseRecord) {
  return axios.post<EnterpriseRecordRes>('/admin/v1/create-company', data);
}

export function updateEnterpriseRecord(data: EnterpriseRecordRes) {
  return axios.post<EnterpriseStatusRes>('/admin/v1/set-company-status', data);
}

export function updateEnterpriseMemberRecord(data: EnterpriseRecordRes) {
  return axios.post<EnterpriseStatusRes>('/admin/v1/set-member-status', data);
}

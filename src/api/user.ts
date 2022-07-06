import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  username: string;
  password: string;
  captchaId: string;
  captcha: string;
}

export interface LoginRes {
  token: string;
}

export interface infoData {
  nickname: string;
  password: string;
  mobile: string;
  email: string;
}

export interface infoRes {
  id: string;
}

export function login(data: LoginData) {
  return axios.post<LoginRes>('/admin/v1/login', data);
}

export function logout() {
  return axios.get<LoginRes>('/admin/v1/logout');
}

export function getUserInfo() {
  return axios.get<UserState>('/admin/v1/admin-info');
}

export function updateUserInfo(data: infoData) {
  return axios.post<infoRes>('/admin/v1/update-admin-info', data);
}

export function getMenuList() {
  return axios.get<RouteRecordNormalized[]>('/admin/v1/get-menu');
}

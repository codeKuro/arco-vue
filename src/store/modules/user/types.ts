export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  username?: string;
  nickname?: string;
  avatar?: string;
  email?: string;
  id?: string;
  mobile?: string;
}

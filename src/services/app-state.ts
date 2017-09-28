import { User } from '../models/user';

export interface AppState {
  userList     : User[];
  selectedUser : User;
}

import {Usuario} from '../interfaces/authInterfaces';

export interface AddError {
  type: 'addError';
  payload: string;
}

export interface removeError {
  type: 'removeError';
}

export interface singUp {
  type: 'signUp';
  payload: {user: Usuario; token: string};
}
export interface logOut {
  type: 'logOut';
}

export interface noAutenticated {
  type: 'no-Autenticated';
}

export type AuthActions =
  | AddError
  | removeError
  | singUp
  | noAutenticated
  | logOut;

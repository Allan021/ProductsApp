import {Usuario} from '../interfaces/authInterfaces';
import {AuthActions} from '../types/AuthTypes';

export interface AuthState {
  status: 'is-loading' | 'autenticated' | 'not-autenticated';
  user: Usuario | null;
  token: string | null;
  errorMessage: string;
}

export const AuthReducer = (
  state: AuthState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
    case 'addError':
      return {...state, errorMessage: action.payload};

    case 'removeError':
      return {...state, errorMessage: ''};

    case 'signUp':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        status: 'autenticated',
      };

    case 'logOut':
    case 'no-Autenticated':
      return {
        ...state,
        user: null,
        token: null,
        errorMessage: '',
        status: 'not-autenticated',
      };
    default:
      return state;
  }
};

import React, {createContext, useEffect, useReducer} from 'react';
import coffeApi from '../api/CoffeApi';
import {LoginData, LoginResponse, Usuario} from '../interfaces/authInterfaces';
import {AuthReducer, AuthState} from './AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AuthContextProps = {
  status: 'is-loading' | 'autenticated' | 'not-autenticated';
  user: Usuario | null;
  token: string | null;
  errorMessage: string;

  logout: () => void;
  signUp: (loginData: LoginData) => void;
  addError: (payload: string) => void;
  removeError: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);

const initialState: AuthState = {
  status: 'is-loading',
  user: null,
  token: null,
  errorMessage: '',
};
export const AuthProvider = ({children}: any) => {
  useEffect(() => {
    checkToken();
  }, []);

  const logout = () => {};
  const signUp = async ({email: correo, password}: LoginData) => {
    try {
      const {data} = await coffeApi.post<LoginResponse>('/auth/login', {
        correo,
        password,
      });

      dispatch({
        type: 'signUp',
        payload: {user: data.usuario, token: data.token},
      });

      //despues del login se crea el token
      await AsyncStorage.setItem('token', data.token);
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Informacion Incorrecta',
      });
    }
  };

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token === null) {
      return dispatch({type: 'no-Autenticated'});
    }
    const resp = await coffeApi.get<LoginResponse>('/auth');

    if (resp.status !== 200) {
      return dispatch({type: 'no-Autenticated'});
    }
    const data = resp.data;
    dispatch({
      type: 'signUp',
      payload: {user: data.usuario, token: data.token},
    });
  };

  const addError = (payload: string) => {
    dispatch({type: 'addError', payload});
  };
  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{logout, signUp: signUp, addError, removeError, ...state}}>
      {children}
    </AuthContext.Provider>
  );
};

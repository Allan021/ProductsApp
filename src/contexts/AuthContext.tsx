import React, {createContext, useEffect, useReducer} from 'react';
import coffeApi from '../api/CoffeApi';
import {
  LoginData,
  LoginResponse,
  RegisterData,
  Usuario,
} from '../interfaces/authInterfaces';
import {AuthReducer, AuthState} from './AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AuthContextProps = {
  status: 'is-loading' | 'autenticated' | 'not-autenticated';
  user: Usuario | null;
  token: string | null;
  errorMessage: string;
  signUp: (regsiterData: RegisterData) => void;
  logout: () => void;
  signIn: (loginData: LoginData) => void;
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

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logOut'});
  };
  const signIn = async ({email: correo, password}: LoginData) => {
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

  const signUp = async ({nombre, correo, password}: RegisterData) => {
    try {
      const {data} = await coffeApi.post<LoginResponse>('/usuarios', {
        nombre,
        correo,
        password,
      });

      dispatch({
        type: 'signUp',
        payload: {user: data.usuario, token: data.token},
      });
      console.log(data);

      //despues del login se crea el token
      await AsyncStorage.setItem('token', data.token);
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'El correo ya esta ingresado',
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
      value={{logout, signIn, addError, removeError, signUp, ...state}}>
      {children}
    </AuthContext.Provider>
  );
};

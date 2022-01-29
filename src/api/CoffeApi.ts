import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
const baseURL: string = 'https://coffe-react-native-backend.herokuapp.com/api';

const coffeApi = axios.create({
  baseURL,
});

coffeApi.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    if (config.headers) {
      config.headers['x-token'] = token;
    }
  }
  return config;
});
export default coffeApi;

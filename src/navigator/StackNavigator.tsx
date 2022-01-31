import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {ProtectedScreen} from '../screens/ProtectedScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {AuthContext} from '../contexts/AuthContext';
import {LoadingScreen} from '../screens/LoadingScreen';
import {ProductNavigator} from './ProductNavigator';
const Stack = createStackNavigator();
export const Navigation = () => {
  const {status} = useContext(AuthContext);

  if (status === 'is-loading') return <LoadingScreen />;

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#fff',
          elevation: 0,
        },
        headerShown: false,
      }}>
      {status !== 'autenticated' ? (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      ) : (
        <Stack.Screen name="ProductNavigator" component={ProductNavigator} />
      )}
    </Stack.Navigator>
  );
};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {ProtectedScreen} from '../screens/ProtectedScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
const Stack = createStackNavigator();
export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#fff',
          elevation: 0,
        },
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
    </Stack.Navigator>
  );
};

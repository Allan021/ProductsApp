import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigator/StackNavigator';
import {AuthProvider} from './src/contexts/AuthContext';
import {ProductProvider} from './src/contexts/ProductsContext';
export const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      <ProductProvider>{children}</ProductProvider>
    </AuthProvider>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
}

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsScreen} from '../screens/ProductsScreen';
import {ProductScreen} from '../screens/ProductScreen';

type ProductNavigatorProps = {
  ProductsScreen: undefined;
  ProductScreen: {
    id?: string;
  };
};
const Stack = createStackNavigator<ProductNavigatorProps>();

export const ProductNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          opacity: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};

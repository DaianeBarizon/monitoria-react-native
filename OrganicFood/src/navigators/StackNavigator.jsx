import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import DrawerNavigator from './DrawerNavigator';
import Carrinho from '../screens/Carrinho';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeStack"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="CarrinhoStack" component={Carrinho} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

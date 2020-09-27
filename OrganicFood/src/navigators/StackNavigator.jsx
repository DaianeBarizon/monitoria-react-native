import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';
import Carrinho from '../screens/Carrinho';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Carrinho" component={Carrinho} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Cadastro from '../screens/Cadastro';

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
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{title: 'Cadastrar Produtos'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

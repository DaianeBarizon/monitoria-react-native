import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import DrawerNavigator from './DrawerNavigator';
import Carrinho from '../screens/Carrinho';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="Carrinho" component={Carrinho} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Home';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sair" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

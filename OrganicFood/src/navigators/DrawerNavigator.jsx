import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../screens/Home';
import Carrinho from '../screens/Carrinho';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

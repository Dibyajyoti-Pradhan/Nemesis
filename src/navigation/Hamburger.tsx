import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from '../screens/home/HomeStack';
import ReciepesStack from '../screens/reciepes/ReciepesStack';
import {ROUTES} from './routes';

const Drawer = createDrawerNavigator();

const Hamburger = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.HOME.NAME} component={HomeStack} />
      <Drawer.Screen name={ROUTES.RECIEPES.NAME} component={ReciepesStack} />
    </Drawer.Navigator>
  );
};

export default Hamburger;

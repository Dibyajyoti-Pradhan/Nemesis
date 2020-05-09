import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HomeScreen2 from './HomeScreen2';
import {ROUTES} from '../../navigation/routes';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ROUTES.HOME.SCREENS.HOME_SCREEN}
      component={HomeScreen}
    />
    <Stack.Screen
      name={ROUTES.HOME.SCREENS.HOME_SCREEN2}
      component={HomeScreen2}
    />
  </Stack.Navigator>
);
export default HomeStack;

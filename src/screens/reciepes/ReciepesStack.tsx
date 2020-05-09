import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReciepesScreen from './ReciepesScreen';
import ReciepesScreen2 from './ReciepesScreen2';
import {ROUTES} from '../../navigation/routes';

const Stack = createStackNavigator();

const ReciepesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ROUTES.RECIEPES.SCREENS.RECIEPES_SCREEN}
      component={ReciepesScreen}
    />
    <Stack.Screen
      name={ROUTES.RECIEPES.SCREENS.RECIEPES_SCREEN2}
      component={ReciepesScreen2}
    />
  </Stack.Navigator>
);

export default ReciepesStack;

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Hamburger from './src/navigation/Hamburger';

const App = () => {
  return (
    <NavigationContainer>
      <Hamburger />
    </NavigationContainer>
  );
};

export default App;

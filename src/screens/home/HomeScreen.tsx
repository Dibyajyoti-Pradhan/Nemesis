import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ROUTES} from '../../navigation/routes';
const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to 2nd Screen"
        onPress={() =>
          navigation.navigate(ROUTES.RECIEPES.NAME, {
            screen: ROUTES.RECIEPES.SCREENS.RECIEPES_SCREEN2,
            initial: false,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;

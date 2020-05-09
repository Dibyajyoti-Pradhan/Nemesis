import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ReciepesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ReciepesScreen</Text>
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

export default ReciepesScreen;

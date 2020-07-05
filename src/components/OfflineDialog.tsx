import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import FadeView from './FadeView';

const OfflineDailog = () => (
      <View style={styles.row}>
        <Text style={styles.leftText}>You appear to be offline!</Text>
      </View>
    );

export default OfflineDailog;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#808080',
    height: 25,
    justifyContent: 'center',
  },
  leftText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

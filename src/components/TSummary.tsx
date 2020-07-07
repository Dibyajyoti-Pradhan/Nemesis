import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FadeView from '../components/FadeView';

const backendData = {
  aggregated_amount: '1202.50',
  transaction_count: '17',
};

const TSummary = ({offline, refreshing}: any) => (
    <FadeView style={styles.container} offline={offline} refreshing={refreshing}>
      <View style={styles.row}>
        <Text style={[styles.white, styles.medium, styles.normal]}>
          {'\u20B9'}
        </Text>
        <Text style={[styles.white, styles.large]}>
          {backendData.aggregated_amount}
        </Text>
      </View>
      <Text style={[styles.white, styles.small]}>
        {backendData.transaction_count} Transactions
      </Text>
    </FadeView>
  );
export default TSummary;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    height: 132,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#00345d'
  },
  row: {
    flexDirection: 'row',
  },
  white: {
    color: 'white',
  },
  medium: {
    fontSize: 15,
  },
  small: {
    fontSize: 13,
  },
  large: {
    fontSize: 38,
    fontWeight: '500',
    fontStyle: 'normal',
  },
  normal: {
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
});

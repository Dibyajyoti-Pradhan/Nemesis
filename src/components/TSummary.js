import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FadeView from '../components/FadeView';

const getTotalAmount = (transactionList) =>
  transactionList
    .reduce((acc, i) => [...acc, i.data], [])
    .flat(Infinity)
    .reduce((acc, el) => (acc += Number(el.amount)), 0)
    .toFixed(0);
const getTotalTransactions = (transactionList) =>
  transactionList.reduce((acc, i) => [...acc, i.data], []).flat(Infinity)
    .length;
const TSummary = ({offline, refreshing, transactionList}) => {
  return (
    <FadeView
      style={styles.container}
      offline={offline}
      refreshing={refreshing}>
      <View style={styles.row}>
        <Text style={[styles.white, styles.medium, styles.normal]}>
          {'\u20B9'}
        </Text>
        <Text style={[styles.white, styles.large]}>
          {getTotalAmount(transactionList)}
        </Text>
      </View>
      <Text style={[styles.white, styles.small]}>
        {getTotalTransactions(transactionList)} Transactions
      </Text>
    </FadeView>
  );
};

export default TSummary;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    height: 132,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#00345d',
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

import React, {useEffect, useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {Text, View} from '../components/Themed';
import TSummary from '../components/TSummary';
import OfflineDialog from '../components/OfflineDialog';
import TList from '../components/TList';
import {connect} from 'react-redux';
import axios from 'axios';

export default connect(
  ({backendTransactionData, isOffline}) => ({
    ...backendTransactionData,
    ...isOffline,
  }),
  (dispatch) => ({
    upsertTransactionDetails: ({data}) =>
      dispatch({
        type: 'UPDATE_TRANSACTIONS',
        data,
      }),
  }),
)(TabOneScreen);

const getListData = (backendTransactionData) =>
  Object.keys(backendTransactionData).map((title) => ({
    title,
    data: backendTransactionData[title],
  }));

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function TabOneScreen(props) {
    const {isOffline = true} = props;
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    async function perfSideEffect() {
      try {
        const transactionDetails = await axios.get(
          'http://192.168.0.104:3000',
        );
        props.upsertTransactionDetails(transactionDetails);
      } catch (e) {
        ToastAndroid.show('Network Failure!', ToastAndroid.SHORT);
      }
      setRefreshing(false);
    }
    refreshing && perfSideEffect();
    wait(5000).then(() => setRefreshing(false));
  });

  if (
    props.backendTransactionData &&
    !!Object.keys(props.backendTransactionData).length
  )
    return (
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => setRefreshing(true)}
          />
        }>
        {isOffline && <OfflineDialog/>}
        <View style={styles.container}>
          <TSummary offline={isOffline} refreshing={refreshing}/>
          <TList
            listData={getListData(props.backendTransactionData)}
            navigation={props.navigation}
            offline={isOffline}
            refreshing={refreshing}
          />
        </View>
      </ScrollView>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

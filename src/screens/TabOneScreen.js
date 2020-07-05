import React, {useEffect, useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
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
import {persistenceConfiguredStore} from '../../storeConfig';

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
 // REPLACE HERE FOR ACTUAL NETWORK
    // console.log(props.isOffline);
    // const {isOffline} = props;
    const isOffline = true;
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    async function perfSideEffect() {
      try {
        const transactionDetails = await axios.get(
          'http://dev-dsk-pariksj-1b-0dd930b7.eu-west-1.amazon.com:3000',
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
          <TSummary offline={isOffline} />
          <TList
            listData={getListData(props.backendTransactionData)}
            navigation={props.navigation}
            offline={isOffline}
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

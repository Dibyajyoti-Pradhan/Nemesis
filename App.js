import React, {useEffect} from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import axios from 'axios';
import {persistenceConfiguredStore} from './storeConfig';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';

export default function App() {
  // Subscribe
  NetInfo.addEventListener((state) => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isInternetReachable);
  });
  const netInfo = useNetInfo();

  // First believing the app is offline.
  if (!netInfo.isInternetReachable) {
    persistenceConfiguredStore.configuredStore.dispatch({
      type: 'Offline',
    });
  }
  //   // Network Action dispatcher.
  //   NetInfo.fetch().then((state) => {
  //     if (!state.isConnected) {
  //     } else {
  //       persistenceConfiguredStore.configuredStore.dispatch({
  //         type: 'Online',
  //       });
  //     }
  //   });

  useEffect(() => {
    console.log('Connection status?', netInfo.isConnected);
    async function getData() {
      const transactionDetails = await axios.get('http://192.168.0.104:3000');
      persistenceConfiguredStore.configuredStore.dispatch({
        type: 'UPDATE_TRANSACTIONS',
        data: transactionDetails.data,
      });
    }
    if (netInfo.isInternetReachable) {
      getData();
    } else {
      persistenceConfiguredStore.configuredStore.dispatch({
        type: 'Offline',
      });
    }
  }, [netInfo.isInternetReachable]);
  return (
    <Provider store={persistenceConfiguredStore.configuredStore}>
      {/*<PersistGate loading={null} persistor={persistenceConfiguredStore.persistence}/>*/}
      <Navigation colorScheme={'light'} />
    </Provider>
  );
}

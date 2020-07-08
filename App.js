import React, {useEffect} from 'react';
import {ToastAndroid} from 'react-native';
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

  // Network Action dispatcher.
  NetInfo.fetch().then((state) => {
    if (!state.isInternetReachable) {
      persistenceConfiguredStore.configuredStore.dispatch({
        type: 'Offline',
      });
    }
  });

  useEffect(() => {
    console.log('Connection status?', netInfo.isConnected);
    async function getData() {
      try {
        const transactionDetails = await axios.get('http://192.168.0.104:3000');
        persistenceConfiguredStore.configuredStore.dispatch({
          type: 'UPDATE_TRANSACTIONS',
          data: transactionDetails.data,
        });
      } catch (e) {
        console.log("Network call in App.js failed");
      }
    }
    if (netInfo.isInternetReachable) {
      getData();
      persistenceConfiguredStore.configuredStore.dispatch({
        type: 'Online'
      });
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

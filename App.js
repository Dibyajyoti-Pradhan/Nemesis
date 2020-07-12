import React, {useEffect} from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import axios from 'axios';
import {persistenceConfiguredStore} from './storeConfig';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import io from 'socket.io-client';

global.ws = io('http://dev-dsk-pariksj-1b-0dd930b7.eu-west-1.amazon.com:3000');
export default () => {
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
    function getData() {
      ws.on('receiveAllTransactions', (allTransactions) => {
        persistenceConfiguredStore.configuredStore.dispatch({
          type: 'GET_ALL_TRANSACTIONS',
          data: allTransactions,
        });
      });
      ws.emit('getAllTransactions');
    }
    if (netInfo.isInternetReachable) {
      setTimeout(getData, 1000);
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
};

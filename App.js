import React, {useEffect} from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import axios from "axios";
import {persistenceConfiguredStore} from "./storeConfig";

export default function App() {
    useEffect(() => {
        async function getData() {
            const transactionDetails = await axios.get('http://dev-dsk-pariksj-1b-0dd930b7.eu-west-1.amazon.com:3000');
            console.log(transactionDetails.data);
            persistenceConfiguredStore.configuredStore.dispatch({type: "UPDATE_TRANSACTIONS", data: transactionDetails.data});
        };
        getData();
    });
    return (
        <Provider store={persistenceConfiguredStore.configuredStore}>
            {/*<PersistGate loading={null} persistor={persistenceConfiguredStore.persistence}/>*/}
            <Navigation colorScheme={"light"}/>
        </Provider>
    );

}

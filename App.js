import React, {useEffect} from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import axios from "axios";

const rootReducer = (state = {}, {type, data}) => {
    return (type === 'UPDATE_TRANSACTIONS' ? {...state, backendTransactionData:data} : state);
};

const configuredStore = createStore(
    rootReducer,
    {}
);

export default function App() {
    useEffect(() => {
        async function getData() {
            const transactionDetails = await axios.get('http://dev-dsk-pariksj-1b-0dd930b7.eu-west-1.amazon.com:3000');
            configuredStore.dispatch({type: "UPDATE_TRANSACTIONS", data: transactionDetails.data});
        }
        getData();
    });
    return (
        <Provider store={configuredStore}>
            <Navigation colorScheme={"light"}/>
        </Provider>
    );

}

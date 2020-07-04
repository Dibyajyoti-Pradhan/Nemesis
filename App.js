import React, {useEffect} from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import {backendTransactionData} from "./src/constants/backenData";
import axios from "axios";

const rootReducer = (state = {}, {COMMAND, data}) => {
    return (COMMAND==='UPDATE_TRANSACTIONS' ? {...state, data} : state);
};

const configuredStore = createStore(
    rootReducer,
    backendTransactionData
);

export default function App() {
    useEffect( () => {
        async function getData() {
            const transactionDetails = await axios.get('http://localhost:3000')  ;
            console.warn(transactionDetails);
            return transactionDetails;
        }
        getData();
    });
    return (
        <Provider store={configuredStore}>
            <Navigation colorScheme={"light"}/>
        </Provider>
    );

}

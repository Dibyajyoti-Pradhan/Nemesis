import React from 'react';
import Navigation from './src/navigation';
// @ts-ignore
import {Provider} from 'react-redux';
// import {configuredStore} from "store";


export default function App() {
    return (
        // <Provider store={configuredStore}>
            <Navigation colorScheme={"light"} />
        // </Provider>
    );

}

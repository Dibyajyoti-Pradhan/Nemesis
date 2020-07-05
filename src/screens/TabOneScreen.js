import React, {useEffect, useState} from 'react';
import {RefreshControl, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import TSummary from '../components/TSummary';
import OfflineDialog from '../components/OfflineDialog';
import TList from '../components/TList';
import {connect} from "react-redux";
import axios from "axios";
import {persistenceConfiguredStore} from "../../storeConfig";

export default connect(
    ({backendTransactionData}) => (backendTransactionData),
    dispatch => ({ upsertTransactionDetails :  ({data}) => dispatch({
            type: "UPDATE_TRANSACTIONS",
            data
        })})
)(TabOneScreen);

const getListData = (backendTransactionData) => Object.keys(backendTransactionData).map((title) => ({
    title,
    data: backendTransactionData[title],
}));


function TabOneScreen(props) {
    const ifOffline = true;
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        async function perfSideEffect() {
            const transactionDetails = await axios.get('http://dev-dsk-pariksj-1b-0dd930b7.eu-west-1.amazon.com:3000');
            setRefreshing(false);
            props.upsertTransactionDetails(transactionDetails);
        }
        refreshing && perfSideEffect();
    });
    if (props.backendTransactionData && !!Object.keys(props.backendTransactionData).length)
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)}/>
                }
            >
                {ifOffline && <OfflineDialog/>}
                <View style={styles.container}>
                    <TSummary offline={ifOffline}/>
                    <TList listData={getListData(props.backendTransactionData)} navigation={props.navigation}/>
                </View>
            </ScrollView>
        );
    return null;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

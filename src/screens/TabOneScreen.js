import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import TSummary from '../components/TSummary';
import OfflineDialog from '../components/OfflineDialog';
import TList from '../components/TList';
import {connect} from "react-redux";

export default connect(
    ({backendTransactionData}) => (backendTransactionData)
)(TabOneScreen);

const getListData = (backendTransactionData) => Object.keys(backendTransactionData).map((title) => ({
    title,
    data: backendTransactionData[title],
}));

function TabOneScreen(props) {
    // const {ifOffline} = props;
    const ifOffline = true;
    if (props.backendTransactionData && !!Object.keys(props.backendTransactionData).length)
        return (
            <View style={styles.container}>
                {ifOffline && <OfflineDialog/>}
                <TSummary offline={ifOffline}/>
                <TList listData={getListData(props.backendTransactionData)} navigation={props.navigation}/>
            </View>
        );
    return null;
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

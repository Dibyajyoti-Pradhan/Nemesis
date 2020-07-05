import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import TSummary from '../components/TSummary';
import TList from '../components/TList';
import {connect} from "react-redux";

export default connect(
    state => ({backendTransactionData: state})
)(TabOneScreen);

const getListData = ({backendTransactionData}) => Object.keys(backendTransactionData).map((title) => ({
    title,
    data: backendTransactionData[title],
}));

function TabOneScreen(props) {
    console.log(props.backendTransactionData);
    return !!Object.keys(props.backendTransactionData).length
        && (
            <View style={styles.container}>
                <TSummary/>
                <TList listData={getListData(props.backendTransactionData)} navigation={props.navigation}/>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import TSummary from '../components/TSummary';
import TList from '../components/TList';
import {connect} from "react-redux";
import {backendTransactionData} from "../constants/backenData";

export default connect(
    state => ({backendData: state})
)(TabOneScreen);

const getListData = (backendData) => Object.keys(backendTransactionData).map((title) => ({
    title,
    data: backendData[title],
}));

function TabOneScreen(props) {
    return (
        <View style={styles.container}>
            <TSummary/>
            <TList listData={getListData(props.backendData)} navigation={props.navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

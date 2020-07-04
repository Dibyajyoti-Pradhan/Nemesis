import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import TSummary from '../components/TSummary';
import TList from '../components/TList';

export default function TabOneScreen(props: any) {
    return (
    <View style={styles.container}>
      <TSummary/>
      <TList navigation={props.navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

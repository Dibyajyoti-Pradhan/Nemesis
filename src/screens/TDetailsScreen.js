import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Clipboard,
  ToastAndroid,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OfflineDailog from '../components/OfflineDialog';

export default connect(({backendTransactionData, isOffline}) => ({
  ...backendTransactionData,
  ...isOffline,
}))(TDetailsScreen);
const writeToClipboard = async (value) => {
  await Clipboard.setString(value);
  ToastAndroid.show('Copied to Clipboard!', ToastAndroid.SHORT);
};

function TDetailsScreen(props) {
    // REPLACE HERE FOR ACTUAL NETWORK
    // console.log(props.isOffline);
    // const {isOffline} = props;
    const isOffline = true;
  const itemId = props.route.params.itemId;
  const item = Object.values(props.backendTransactionData)
    .flat(Infinity)
    .find(({transactionId}) => transactionId === itemId);
  return (
      <View style={styles.container}>
      {isOffline && <OfflineDailog/>}
    <View style={styles.innerContainer}>
      <View style={[styles.card, styles.directionRow]}>
        <Image
          source={require('../assets/green_tick.png')}
          style={[styles.checkmark, isOffline? styles.offline: null]}
        />
        <Text style={[styles.money, isOffline? styles.offline: null]}>
          {' '}
          {'\u20B9'} {item.amount}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>PAYMENT DETAILS</Text>

        <View style={styles.row}>
          <Text style={styles.leftText}>Transaction Amount</Text>
          <Text style={styles.rightText}>
            {'\u20B9'} {item.amount}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.leftText}>Transaction ID</Text>
          <Text style={styles.rightText}>{item.transactionId} </Text>
          <TouchableOpacity
            onPress={() => writeToClipboard(item.transactionId)}>
            <Text style={styles.blueBorder}>Copy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.leftText}>Date & Time</Text>
          <Text style={styles.rightText}>
            {item.displayDate} {item.displayTime}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.leftText}>Transaction Status</Text>
          <Text style={[styles.rightText, styles.lightGreen]}>
            {item.transactionStatus}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.leftText}>Store Name</Text>
          <Text style={styles.rightText}>{item.storeName}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>CUSTOMER DETAILS</Text>
        <View style={styles.row}>
          <Text style={styles.leftText}>VPA</Text>
          <Text style={styles.rightText}>{item.payerVPAHandle}</Text>
        </View>
      </View>
      <View style={[styles.card, styles.removeBorder]}>
        <Text style={styles.title}>SETTLEMENT DETAILS</Text>
        <View style={styles.row}>
          <Text style={styles.leftText}>Bank Reference No.</Text>
          <Text style={styles.rightText}>{item.merchantReferenceId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>Settlement Status</Text>
          <Text style={styles.rightText}>Settled to bank</Text>
        </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
      paddingHorizontal: 20
  },
  row: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  title: {
    paddingVertical: 5,
    color: '#afafaf',
    fontSize: 13,
  },
  card: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#afafaf',
  },
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  money: {
    color: '#3c9d17',
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  checkmark: {
    height: 20,
    width: 20
  },
  leftText: {
    flex: 1,
    fontSize: 13,
    color: '#373e3e',
    textAlign: 'left',
  },
  rightText: {
    flex: 1.2,
    fontSize: 13,
    color: '#373e3e',
    textAlign: 'right',
  },
  lightGreen: {
    color: '#3c9d17',
    fontWeight: 'bold',
  },
  removeBorder: {
    borderBottomWidth: 0,
  },
  blueBorder: {
    width: 39,
    borderWidth: 1,
    borderColor: '#0066c0',
    borderRadius: 3,
    paddingHorizontal: 2,
    fontSize: 13,
    textAlign: 'center',
  },
  offline: {
      color: "#808080",
      opacity: 0.5
  }
});

import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const TDetailsScreen = ({ route }: any) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.directionRow]}>
        <Text style={[styles.money, styles.checkmark]}>{"\u2713"}</Text>
        <Text style={styles.money}>
          {" "}
          {"\u20B9"} {item.amount}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>PAYMENT DETAILS</Text>

        <View style={styles.row}>
          <Text style={styles.leftText}>Transaction Amount</Text>
          <Text style={styles.rightText}>
            {"\u20B9"} {item.amount}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.leftText}>Transaction ID</Text>
          <Text style={styles.rightText}>{item.transactionId}</Text>
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
  );
};
export default TDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  row: {
    paddingVertical: 5,
    flexDirection: "row",
  },
  title: {
    paddingVertical: 5,
    color: "#afafaf",
    fontSize: 13,
  },
  card: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#afafaf",
  },
  directionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  money: {
    color: "#3c9d17",
    fontSize: 22,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  checkmark: {
    height: 20,
    width: 20,
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#3c9d17",
    borderRadius: 10,
    textAlign: "center"
  },
  leftText: {
    flex: 1,
    fontSize: 13,
    color: "#373e3e",
    textAlign: "left",
  },
  rightText: {
    flex: 1.2,
    fontSize: 13,
    color: "#373e3e",
    textAlign: "right",
  },
  lightGreen: {
    color: "#3c9d17",
    fontWeight: "bold",
  },
  removeBorder: {
    borderBottomWidth: 0,
  },
});

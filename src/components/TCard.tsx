import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const TCard = ({ item }: any) => (
  <View style={styles.row}>
    <View style={styles.left}>
      <Text style={styles.leftText}>
        {"\u20B9"} {item.amount}
      </Text>
      <Text style={[styles.leftText, styles.status]}>
        {item.transactionStatus}
      </Text>
    </View>
    <View style={styles.right}>
      <Text style={styles.rightText}>{item.transactionId}</Text>
      <Text style={styles.rightText}>{item.cardDisplayTime}</Text>
    </View>
  </View>
);
export default TCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    paddingRight: 20,
    height: 64,
    borderBottomColor: "#fafafa",
    borderBottomWidth: 0.3,
  },
  left: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  right: {
    flex: 2,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  leftText: {
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#444d4d",
  },
  rightText: {
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#aab7b8",
  },
  status: {
    color: "green",
  },
});

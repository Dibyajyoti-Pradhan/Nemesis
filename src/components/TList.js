import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SectionList,
} from "react-native";
import TCard from "./TCard";
import FadeView from "./FadeView";

  function TList  ({listData,navigation, offline}) {
      console.log(listData);
      if(!listData.length)
          return null;
    return (
      <SectionList
        sections={listData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {

          console.log(item);
            return(  <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => navigation.navigate('TDetailsScreen', {itemId:item.transactionId})}>
            <TCard item={item} offline={offline} />
          </TouchableOpacity>
        );
        }                    }
        renderSectionHeader={({ section: { title } }) => (
          <View
            style={{
              height: 40,
              paddingLeft: 20,
              backgroundColor: "#fafafa",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                opacity: 0.2,
                fontSize: 13,
                fontWeight: "bold",
                fontStyle: "normal",
                letterSpacing: 0,
                color: "#373e3e",
              }}
            >
              {title}
            </Text>
          </View>
        )}
      />
    );
  };
  export default TList;

  const styles = StyleSheet.create({});

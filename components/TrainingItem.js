import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TrainingItem = (props) => {
  return (
    <TouchableOpacity onPressOut={props.onSelect.bind(this, props.uID)}>
      <View>
        <Text style={styles.itemList}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemList: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    color: "gray",
  },
});

export default TrainingItem;

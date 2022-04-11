import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import InputView from "./components/InputView";
import React, { useState } from "react";
import TrainingItem from "./components/TrainingItem";

export default function App() {
  const [trainingLogs, setTrainingLogs] = useState([]);
  const [isAddModalVisible, setAddModalVisibility] = useState(false);

  const onAddTraining = (trainingLog) => {
    let logModel = { uID: Math.random().toString(), value: trainingLog };
    setTrainingLogs((currentLogs) => currentLogs.concat(logModel));
    setAddModalVisibility(false);
  };

  const onRemove = (uID) => {
    setTrainingLogs((currentLogs) => {
      return currentLogs.filter((log) => log.uID !== uID);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        keyExtractor={(item, index) => item.uID}
        data={trainingLogs}
        renderItem={(itemData) => (
          <TrainingItem
            uID={itemData.item.uID}
            title={itemData.item.value}
            onSelect={onRemove}
          />
        )}
      />

      <Button
        title="Add Training"
        onPress={() => setAddModalVisibility(true)}
      />

      {/* modal */}
      <InputView
        isVisible={isAddModalVisible}
        onAddLogs={onAddTraining}
        onCancel={() => setAddModalVisibility(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 50,
    padding: 20,
  },

  flatList: {
    flex: 1,
  },
});

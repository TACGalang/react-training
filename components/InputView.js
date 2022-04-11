import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const InputView = (props) => {
  const [trainingLog, setLogs] = useState("");

  const onChangeHandler = (thisText) => {
    setLogs(thisText);
  };

  const onPressButton = (event) => {
    if (trainingLog.trim().length > 0) {
      props.onAddLogs(trainingLog);
      setLogs("");
    }
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Input training logs here"
          value={trainingLog}
          onChangeText={onChangeHandler}
          style={styles.textInput}
        />

        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>

          <View style={styles.button}>
            <Button title="Add" onPress={onPressButton} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 20,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: "30%",
    marginLeft: 5,
    marginRight: 5,
  },
});

export default InputView;

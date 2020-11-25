import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder="add a todo...." placeholderTextColor={colors.white} onChangeText={onChange} value={text} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addTodo(text);
          setText("");
        }}
        activeOpacity={1}
      >
        <Text style={styles.text}>Task</Text>
        <AntDesign name="plus" size={40} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 20,
    flexDirection: "row",
    backgroundColor: colors.background,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  content: {
    padding: 16
  },
  icon: {
    color: colors.themeColor,
    marginHorizontal: 8
  },
  input: {
    height: 60,
    fontSize: 20,
    color: colors.background,
    paddingHorizontal: 16,
    paddingVertical: 6,
    flexDirection: "row",
    backgroundColor: colors.tint,
    borderRadius: 20,
    alignItems: "center"
  },
  text: {
    fontSize: 24
  }
});

export default AddTodo;

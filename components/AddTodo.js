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
        <TextInput style={styles.input} placeholder="add a todo...." placeholderTextColor={colors.tint} onChangeText={onChange} value={text} />
      </View>

      <View style={styles.button}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            addTodo(text);
            setText("");
          }}
          activeOpacity={1}
        >
          <AntDesign name="plus" size={40} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "relative",
    flexDirection: "row",
    backgroundColor: colors.background,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  content: {
    padding: 16
  },
  icon: {
    marginVertical: 10,
    marginRight: 20,
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.themeColor
  },
  input: {
    height: 60,
    fontSize: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: "center"
  }
});

export default AddTodo;

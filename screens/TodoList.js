import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import uuid from "uuid-random";
import { Ionicons } from "@expo/vector-icons";
import { Header, AddTodo, TodoItem } from "../components";

import colors from "../config/colors";

export default function TodoList({ navigation }) {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((el) => el.id != id);
    });
  };

  const addTodo = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter a todo", [{ text: "Ok" }], { cancelable: false });
    } else {
      setTodos([
        ...todos,
        {
          id: uuid(),
          text,
          completed: false
        }
      ]);
    }
  };

  const completeHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;

        return todo;
      })
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color={colors.themeColor} />
          <Text style={styles.text}>{"Home"}</Text>
        </TouchableOpacity>
        <Header />
        <AddTodo addTodo={addTodo} />
        <FlatList style={styles.list} data={todos} renderItem={({ item }) => <TodoItem item={item} deleteTodo={deleteTodo} completeHandler={completeHandler} />} keyExtractor={(item) => item.id} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingTop: 30,
    backgroundColor: colors.tint
  },
  icon: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  list: {
    backgroundColor: colors.background
  },
  text: {
    paddingLeft: 20,
    fontSize: 16,
    color: colors.themeColor
  }
});

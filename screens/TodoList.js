import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import uuid from "uuid-random";
import { FontAwesome } from "@expo/vector-icons";
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
          <FontAwesome name="long-arrow-left" size={24} color={colors.white} />
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
    paddingTop: 35,
    backgroundColor: colors.themeColor
  },
  icon: {
    padding: 20
  },
  list: {
    backgroundColor: colors.background
  }
});

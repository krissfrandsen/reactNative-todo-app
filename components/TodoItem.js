import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function TodoItem({ item, deleteTodo, completeHandler }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemView}>
        <Text style={[styles.itemText, item.completed && { textDecorationLine: "line-through" }]}>{item.text}</Text>
        <View style={styles.icon}>
          <TouchableOpacity style={styles.button} onPress={() => completeHandler(item.id)}>
            <MaterialCommunityIcons name="check-bold" size={30} color={item.completed ? "rgb(154,205,50)" : "rgb(178, 34, 34)"} />
          </TouchableOpacity>
          <MaterialCommunityIcons style={styles.button} name="trash-can-outline" size={30} color="rgb(178, 34, 34)" onPress={() => deleteTodo(item.id)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flexDirection: "row"
  },
  button: {
    margin: 5
  },
  item: {
    backgroundColor: colors.white,
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 4,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 24
  },
  itemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemText: {
    fontSize: 20
  }
});

export default TodoItem;

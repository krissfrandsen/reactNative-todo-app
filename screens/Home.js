import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, StatusBar } from "react-native";

import colors from "../config/colors";
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={require("../assets/img1.png")}></Image>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.header}>{"Manage your tasks"}</Text>
        <Text style={styles.text}>{"Organize and simplify your tasks. It helps teams work more collaboratively and get more done."}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TodoList")}>
        <Text style={styles.btnText}>{"Get Started"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: colors.themeColor,
    borderRadius: 40,
    padding: 20,
    marginHorizontal: 50
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10
  },
  image: {
    resizeMode: "cover"
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  },
  text: {
    fontSize: 14,
    textAlign: "center"
  },
  textWrapper: {
    padding: 20
  }
});

export default Home;

import React from "react";
import { Text, View, StyleSheet } from "react-native";

import colors from "../config/colors";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{"My Task"}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: colors.tint
  },
  text: {
    color: colors.themeColor,
    fontSize: 30
  }
});

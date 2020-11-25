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
    paddingTop: 30,
    paddingLeft: 30,
    backgroundColor: colors.themeColor
  },
  text: {
    color: colors.white,
    fontSize: 30
  }
});

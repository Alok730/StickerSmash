import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>Footer</Text>
      <Text>Footer</Text>

      <Text>Footer</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    height: 70,
    backgroundColor: "#06c296",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

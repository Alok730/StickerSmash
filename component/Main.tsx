import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const Main = ({ navigation }) => {
  function Login(): void {
    navigation.navigate("Login");
  }

  function signup(): void {
    navigation.navigate("Signup");
  }

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text}>Welcome to my app</Text>
      </View>
      <View style={styles.container2}>
        <Image
          source={{
            uri: "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.container3}>
        <Button
          icon="camera"
          mode="outlined"
          onPress={() => signup()}
          buttonColor="black"
          textColor="white"
        >
          Press me
        </Button>
        <Button
          mode="contained"
          buttonColor="black"
          textColor="white"
          onPress={() => Login()}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-around",
    backgroundColor: "black",
    padding: 10,
  },
  container1: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    // alignItems: "center",
    marginHorizontal: "auto",
    justifyContent: "center",
  },
  container3: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 300,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
});

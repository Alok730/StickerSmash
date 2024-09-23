import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./component/Login";
import SIgnup from "./component/SIgnup";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      
      <NavigationContainer>
        <Header />
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SIgnup} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "black",
    // alignItems:'center'
  },
});

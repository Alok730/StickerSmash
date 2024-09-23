import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Basic validation
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters long");
      return;
    }

    setErrorMessage(""); // Clear error if validation passes
    console.log("Login successful!", { emai: email, password });
    // Add login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="email" />}
      />
      <HelperText
        type="error"
        visible={!!errorMessage && !validateEmail(email)}
      >
        {errorMessage}
      </HelperText>

      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPassword}
        mode="outlined"
        style={styles.input}
        left={<TextInput.Icon icon="lock" />}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <HelperText type="error" visible={!!errorMessage && password.length < 6}>
        {errorMessage}
      </HelperText>

      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Login
      </Button>
      <Text>
        Create a new Account {" "}
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={{ color: "#735503", textDecorationLine: "underline" }}>
            Signup
          </Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f7e4b0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    margin: 10,
    backgroundColor: "#735503",
  },
  buttonContent: {
    height: 50,
  },
});

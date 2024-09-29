import { createUser } from "@/api/userApi";
import { useState } from "react";
import {
  Pressable,
  TextInput,
  View,
  StyleSheet,
  Text,
  Alert,
} from "react-native";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters.");
      }
      await createUser(fullname, email, password);
      setFullname("");
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Registration Error", error.message);
      } else {
        Alert.alert("Registration Error", "An unknown error occurred.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Fullname"
          value={fullname}
          onChangeText={setFullname}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.btnContainer}>
        <Pressable onPress={handleRegister}>
          <View style={styles.loginBtn}>
            <Text>Register</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    top: -70,
  },
  input: {
    width: 200,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "black",
    marginBottom: 10,
  },
  loginBtn: {
    width: 100,
    height: 40,
    backgroundColor: "darkgrey",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 6,
  },
  btnContainer: {
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Register;

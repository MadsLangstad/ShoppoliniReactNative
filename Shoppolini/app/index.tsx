// import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
// import { loginUser, logoutUser } from "@/api/userApi";
// import { useState } from "react";
// import { router } from "expo-router";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <View style={styles.container}>
//       <View>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           secureTextEntry={true}
//           onChangeText={setPassword}
//         />
//       </View>
//       <View style={styles.btnContainer}>
//         <Pressable
//           onPress={async () => {
//             try {
//               await loginUser(email, password);
//             } catch (error) {
//               console.error("Error logging in user: ", error);
//             }
//             router.navigate("/(tabs)/explore");
//             setEmail("");
//             setPassword("");
//           }}
//         >
//           <View style={styles.loginBtn}>
//             <Text>Login</Text>
//           </View>
//         </Pressable>
//         <Pressable
//           onPress={() => {
//             router.navigate("/register");
//           }}
//         >
//           <View>
//             <Text>Register</Text>
//           </View>
//           <View>
//             <Text>Privacy</Text>
//           </View>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { loginUser, logoutUser } from "@/api/userApi";
import { useState } from "react";
import { router } from "expo-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        throw new Error("Email and password are required.");
      }
      await loginUser(email, password);
      router.navigate("/(tabs)/profile");
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Login Error", error.message);
      } else {
        Alert.alert("Login Error", "An unknown error occurred.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
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
        <Pressable onPress={handleLogin}>
          <View style={styles.loginBtn}>
            <Text>Login</Text>
          </View>
        </Pressable>
        <View>
          <Pressable
            onPress={() => {
              router.navigate("/register");
            }}
          >
            <View>
              <Text>Register</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              router.navigate("/privacy");
            }}
          >
            <Text>Privacy</Text>
          </Pressable>
        </View>
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

export default Login;

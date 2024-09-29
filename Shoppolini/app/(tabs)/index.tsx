import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { getAuth } from "firebase/auth";

export default function Home() {
  const user = getAuth().currentUser;

  return (
    <>
      <View>
        <Text>Hello, {user?.displayName}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

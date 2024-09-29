import { Text, View, StyleSheet } from "react-native";

const Privacy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.text}>
        This is the privacy policy for our app. We take your privacy very
        seriously. We do not collect any personal information about you. This
        app does not use cookies, and we do not store any personal information
        about you on our servers.
      </Text>

      <Text style={styles.text}>
        This app is not intended for children under the age of 13. If you are
        under 13 years of age, please do not use this app.
      </Text>

      <Text style={styles.text}>
        If you have any questions about our privacy policy, please contact us at
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Privacy;

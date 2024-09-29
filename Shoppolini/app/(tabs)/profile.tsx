import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // Assuming the user's name is stored in the displayName field in Firebase Auth
      setUserName(user.displayName);
    }
  }, []);

  return (
    <View>
      <Text>This is your profile {userName ? userName : "User"}</Text>
    </View>
  );
};

export default Profile;

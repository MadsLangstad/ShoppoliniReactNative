import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  deleteUser as deleteAuthUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../firebaseConfig";

const auth = getAuth();

export const createUser = async (
  fullname: string,
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      fullname: fullname,
      email: email,
      createdAt: new Date(),
    });

    console.log("User created with UID: ", user.uid);
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;

    console.log("User logged in with UID: ", user.uid);
    return user;
  } catch (error) {
    console.error("Error logging in user: ", error);
    throw error;
  }
};

export const deleteUser = async (userId: string) => {
  try {
    await deleteDoc(doc(db, "users", userId));
    console.log("User deleted from Firestore with ID: ", userId);

    const user = auth.currentUser;
    if (user) {
      await deleteAuthUser(user);
      console.log("User deleted from auth: ", user.uid);
    }
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await auth.signOut();
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out user: ", error);
    throw error;
  }
};

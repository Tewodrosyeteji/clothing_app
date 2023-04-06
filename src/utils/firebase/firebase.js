// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALanjJXDz6uIJ17c3IGOs7aKCZ26l7AqQ",
  authDomain: "clothingshop-1fd00.firebaseapp.com",
  projectId: "clothingshop-1fd00",
  storageBucket: "clothingshop-1fd00.appspot.com",
  messagingSenderId: "370588655005",
  appId: "1:370588655005:web:c7639a8689bf90989de374",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const singnInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

const db = new getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
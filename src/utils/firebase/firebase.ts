// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { Category } from "../../store/categories/categoriesType";
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

const db = getFirestore();
export type objectsToAdd = {
  title: string;
};

export const addCollectionAndDocument = async <T extends objectsToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCatagoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "catagories");
  const q = query(collectionRef);
  const collectionSnapshot = await getDocs(q);
  return collectionSnapshot.docs.map((snapshot) => snapshot.data() as Category);
};

export type otherInfo = {
  displayName?: string;
};

export type userData = {
  displayName: string;
  email: string;
  createAt: Date;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  otherInfo = {} as otherInfo
): Promise<void | QueryDocumentSnapshot<userData>> => {
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
        ...otherInfo,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userSnapshot as QueryDocumentSnapshot<userData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

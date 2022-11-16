import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC94srwWORUy3Nnlg5cmB2AEMkNvGCqa6E",
  authDomain: "nxt-clothing-db.firebaseapp.com",
  projectId: "nxt-clothing-db",
  storageBucket: "nxt-clothing-db.appspot.com",
  messagingSenderId: "1026841144741",
  appId: "1:1026841144741:web:d0c39386fc9b4b6e818c4c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//  Database

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  // If user data doesn´t exist

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }

    return userDocRef;
  }

  // Create/set the document with the data from userAuth in my collection

  // If user data exist

  // return userDocRef
};

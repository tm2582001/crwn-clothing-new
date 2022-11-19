import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDEoqOh7kohjlvgFpCz1udHgRnc1wNa4A",
  authDomain: "crwn-cloathing-db-8f816.firebaseapp.com",
  projectId: "crwn-cloathing-db-8f816",
  storageBucket: "crwn-cloathing-db-8f816.appspot.com",
  messagingSenderId: "970466026331",
  appId: "1:970466026331:web:4b15ec2460fcf7b0ca307e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){  //bang operator
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      });
    }catch(error){
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

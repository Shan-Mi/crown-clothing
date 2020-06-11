import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmt190S13Po1z2n_cz03BQTMoFKgRqhxs",
  authDomain: "crown-db-59102.firebaseapp.com",
  databaseURL: "https://crown-db-59102.firebaseio.com",
  projectId: "crown-db-59102",
  storageBucket: "crown-db-59102.appspot.com",
  messagingSenderId: "211607986071",
  appId: "1:211607986071:web:0dfc930ec7343c2f9eaed2",
  measurementId: "G-VDWWFJBJER",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

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

// This is async
// If not log-in, userAuth === null
// both of userAuth and additionalData are objects, additionalData is any possible incoming data object
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // if there is no user, exit the function
  // we only save to our db if we get back a user of obj, which means they signed in

  // const userRef = firestore.doc('user/12cadgadg');
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // get user reference at that location, if user exists
  const snapShot = await userRef.get();

  // const collectionRef = firestore.collection("users");
  // console.log({ collectionRef });
  // const collectionSnapshot = await collectionRef.get();
  // console.log({ collectionSnapshot });
  // console.log({collection: collectionSnapshot.docs.map(doc => doc.data())});
  // .get() - get a snapshot from db
  // console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // check if there is any data, if no data, we create one new user
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef; // we need userRef
  // create a snapshot
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    // to generate a unique id, otherwise we can pass e.g. obj.id into ()
    batch.set(newDocRef, obj);
  });

  //this will invoke batch request and give us a promise
  // if resolve, return a void value - aka a null value
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

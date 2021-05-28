import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhuI1r0xiq0S9-gj3d43y8UhdLd_QHa5g",
    authDomain: "king-db-6fe16.firebaseapp.com",
    projectId: "king-db-6fe16",
    storageBucket: "king-db-6fe16.appspot.com",
    messagingSenderId: "610090909512",
    appId: "1:610090909512:web:a43d96de36aa578558bd7d",
    measurementId: "G-539K787XPD"
  };

export const createUserProfileDocument = async (userAuth, additionalData ) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //const collectionRef = firestore.collection('users');

  const snapShot = await userRef.get();
  //const collectionSnapshot = await collectionRef.get();
  //console.log({collection: collectionSnapshot.docs.map(doc => doc.data())});

  // checking if theres data in the snapshot and if there isnt create a new one
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // batch write so everything fails at once = consistent code
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    // get a new doc ref and generate a new ID
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  // gives a promise - when succeeds gives null
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    // give back object from map for data
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default signInWithGoogle;

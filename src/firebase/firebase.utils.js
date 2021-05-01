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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default signInWithGoogle;

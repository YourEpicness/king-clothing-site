import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('Wt1PnWUEpfyIwlNC3AN3').collection('cartItems').doc('XkvbDJIxGnU3ZyqPksFJ')

firestore.doc('./users/Wt1PnWUEpfyIwlNC3AN3/cartItems/XkvbDJIxGnU3ZyqPksFJ');
firestore.collection('./users/Wt1PnWUEpfyIwlNC3AN3/cartItems');

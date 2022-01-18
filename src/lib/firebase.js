import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// here is where we call seed.js only once
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyApi56zAnlH6TN3Vk-XgTUTm9_3BpFcCgY",
    authDomain: "instagram-1e7b2.firebaseapp.com",
    projectId: "instagram-1e7b2",
    storageBucket: "instagram-1e7b2.appspot.com",
    messagingSenderId: "413842969702",
    appId: "1:413842969702:web:0f0ea659abe5a3589b89a7"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call seed file
console.log('firebase', firebase);

//seedDatabase(firebase);

export { firebase, FieldValue };
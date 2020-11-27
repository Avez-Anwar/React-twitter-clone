import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnmnYzuT5Bqp5O7NSEcbZ1zbFxmTFHVWc",
  authDomain: "react-twitter-9f0f7.firebaseapp.com",
  databaseURL: "https://react-twitter-9f0f7.firebaseio.com",
  projectId: "react-twitter-9f0f7",
  storageBucket: "react-twitter-9f0f7.appspot.com",
  messagingSenderId: "720578657055",
  appId: "1:720578657055:web:6a96c404840a255de34e2a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
// import { getDatabase, ref, runTransaction } from "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA5shDwXQm5HNhUdG52vWVYExG6OWkAzlU",
  authDomain: "portfolio-61c99.firebaseapp.com",
  databaseURL: "https://portfolio-61c99-default-rtdb.firebaseio.com",
  projectId: "portfolio-61c99",
  storageBucket: "portfolio-61c99.appspot.com",
  messagingSenderId: "827726660411",
  appId: "1:827726660411:web:3e9ec6f14597ec53fead1e",
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

export default firebaseDB.database().ref();

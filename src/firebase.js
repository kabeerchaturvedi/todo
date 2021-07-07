import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAR5IGQHJFFgGXcTG1EjRW_Uk_xdo8cwIg",
  authDomain: "todos-app-d8051.firebaseapp.com",
  projectId: "todos-app-d8051",
  storageBucket: "todos-app-d8051.appspot.com",
  messagingSenderId: "448493696780",
  appId: "1:448493696780:web:b7d2be5e25739992a97b29",
  measurementId: "G-HGF42H8BKW",
});
const db = firebaseApp.firestore();

export { db };

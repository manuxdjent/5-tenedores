import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBR0JoXuZl18TSRyxc4wxIaAljDwSIirXs",
  authDomain: "tenedores-7e305.firebaseapp.com",
  databaseURL: "https://tenedores-7e305.firebaseio.com",
  projectId: "tenedores-7e305",
  storageBucket: "tenedores-7e305.appspot.com",
  messagingSenderId: "126612413462",
  appId: "1:126612413462:web:294e45ada59f1d18f0a937",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

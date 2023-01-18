// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk3QalnS9kccx8eQqd4tP8RvcXC-eZ6s0",
  authDomain: "fir-cosmeticos-yesica.firebaseapp.com",
  projectId: "fir-cosmeticos-yesica",
  storageBucket: "fir-cosmeticos-yesica.appspot.com",
  messagingSenderId: "52553661971",
  appId: "1:52553661971:web:4b2ec5399de13488e749e6"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

const db = getFirestore(fb)

export {db}
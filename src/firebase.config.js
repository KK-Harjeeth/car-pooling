// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM4U1puwRFqMJjhA0NhcDuQIq3Vra4fVg",
  authDomain: "car-pooling-d6d97.firebaseapp.com",
  projectId: "car-pooling-d6d97",
  storageBucket: "car-pooling-d6d97.appspot.com",
  messagingSenderId: "434508241009",
  appId: "1:434508241009:web:b09ff04724958e9b5823d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore();
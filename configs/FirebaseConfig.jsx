// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRwuVp8MOlZtRWfuh56lbkzog8qK7kqG0",
  authDomain: "dmeo-f5717.firebaseapp.com",
  projectId: "dmeo-f5717",
  storageBucket: "dmeo-f5717.firebasestorage.app",
  messagingSenderId: "273560495451",
  appId: "1:273560495451:web:28ad55abd50f3a2ad0e67e",
  measurementId: "G-6P00XDBV3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
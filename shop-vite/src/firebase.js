// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQE6ef8akRCHSeqX4ckYoweReT1PnkZXo",
  authDomain: "thing-a464a.firebaseapp.com",
  databaseURL: "https://thing-a464a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "thing-a464a",
  storageBucket: "thing-a464a.firebasestorage.app",
  messagingSenderId: "842673834236",
  appId: "1:842673834236:web:3831eb324828127d396f79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqzeqMesbDfI4x_qED9I-kIxR6GUSyl0Y",
  authDomain: "siabsen-eccab.firebaseapp.com",
  databaseURL: "https://siabsen-eccab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "siabsen-eccab",
  storageBucket: "siabsen-eccab.appspot.com",
  messagingSenderId: "784190000743",
  appId: "1:784190000743:web:74c136911ebe4d46314ec2",
  measurementId: "G-LS0GXX65NN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

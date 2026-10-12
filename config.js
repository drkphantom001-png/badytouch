// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASh_Yxqp7ntGYLsqB2SdAvBi5jWjKd3H8",
  authDomain: "badytouch.firebaseapp.com",
  databaseURL: "https://badytouch-default-rtdb.firebaseio.com",
  projectId: "badytouch",
  storageBucket: "badytouch.firebasestorage.app",
  messagingSenderId: "708163034899",
  appId: "1:708163034899:web:90f18e8d9c83717fc0c4e6",
  measurementId: "G-EHEDVDRYL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

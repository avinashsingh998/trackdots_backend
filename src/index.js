// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDC7AB1VUWB2qh8L8Bm_KWjz0zhJvs83Q",
  authDomain: "trackdots-a.firebaseapp.com",
  projectId: "trackdots-a",
  storageBucket: "trackdots-a.appspot.com",
  messagingSenderId: "1077615792188",
  appId: "1:1077615792188:web:2c846e20d8944e4dc43339",
  measurementId: "G-BJC7NGWMTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
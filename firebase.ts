// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCVU7UxZDXCu2w9nvLaSdTAjUbuYcU_hA",
  authDomain: "alberdale-realestate.firebaseapp.com",
  projectId: "alberdale-realestate",
  storageBucket: "alberdale-realestate.appspot.com",
  messagingSenderId: "556860686657",
  appId: "1:556860686657:web:ee9e8b6b05fdfbd81e21c0",
  measurementId: "G-06QH8K9GJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
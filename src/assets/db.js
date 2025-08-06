// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzbWyeJrYCLaOZufXR555T-m0iukPz8NI",
  authDomain: "mtm6404-contact-book-rea-fcd17.firebaseapp.com",
  projectId: "mtm6404-contact-book-rea-fcd17",
  storageBucket: "mtm6404-contact-book-rea-fcd17.firebasestorage.app",
  messagingSenderId: "25224252824",
  appId: "1:25224252824:web:ce118b64bcd842ada96fed",
  measurementId: "G-8RXEK1G1KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
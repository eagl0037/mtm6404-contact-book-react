// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ add this
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
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

// ✅ Initialize Firestore
export const db = getFirestore(app);

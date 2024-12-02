// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-h36Eo3Dhcvy9Mj6pIKfu2kyiq4rW7zQ",
  authDomain: "concept-recall-329e0.firebaseapp.com",
  projectId: "concept-recall-329e0",
  storageBucket: "concept-recall-329e0.firebasestorage.app",
  messagingSenderId: "9868346184",
  appId: "1:9868346184:web:a296f0a4740dda6708a97d",
  measurementId: "G-0SD19V3BTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
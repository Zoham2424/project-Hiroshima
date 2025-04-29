// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMNDMl1wX_hVLqaisxaepkEFv8UAmYIK0",
  authDomain: "hirosima-e7ba5.firebaseapp.com",
  projectId: "hirosima-e7ba5",
  storageBucket: "hirosima-e7ba5.firebasestorage.app",
  messagingSenderId: "161876315789",
  appId: "1:161876315789:web:3d26aebc7187aca0785cc4",
  measurementId: "G-VR6MXP5F6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
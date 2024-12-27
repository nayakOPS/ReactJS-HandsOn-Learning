// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2mem_uav-hd1ygMZsYRyuVXak0HNuC44",
  authDomain: "first-app-firebase-3753e.firebaseapp.com",
  projectId: "first-app-firebase-3753e",
  storageBucket: "first-app-firebase-3753e.appspot.com",
  messagingSenderId: "987362534582",
  appId: "1:987362534582:web:983486b19c14af771b7217",
  databaseURL:"https://first-app-firebase-3753e-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// our firebase app is connnected to our account
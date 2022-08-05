import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1XB4B1NX7K3-Mq4PneqPQxvg8hU94JHg",
    authDomain: "user-task-checklist.firebaseapp.com",
    projectId: "user-task-checklist",
    storageBucket: "user-task-checklist.appspot.com",
    messagingSenderId: "225936612502",
    appId: "1:225936612502:web:9d3be6ff7c51a2af3936b7",
    measurementId: "G-HQ87X6NVHD"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);

//connection to the Database
export const db = getFirestore(app);


  
// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBfVCrdULVPMs_xeUM76G6NV3jePRHkjg",
    authDomain: "pomofocus-jy2.firebaseapp.com",
    projectId: "pomofocus-jy2",
    storageBucket: "pomofocus-jy2.appspot.com",
    messagingSenderId: "881527616067",
    appId: "1:881527616067:web:70583984cf719cf18b9af6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Initialize Cloud Firestore and get a reference to the service
  export const db = getFirestore(app);
  
  
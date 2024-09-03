import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export default function StartFirebase() {
  // const firebaseConfig = {
  //   apiKey: process.env.FIREBASE_API,
  //   authDomain: "contact-form-d74ad.firebaseapp.com",
  //   databaseURL: "https://contact-form-d74ad-default-rtdb.firebaseio.com",
  //   projectId: "contact-form-d74ad",
  //   storageBucket: "contact-form-d74ad.appspot.com",
  //   messagingSenderId: "163085586740",
  //   appId: "1:163085586740:web:b1eb0a1659fdd9ff539561",
  //   measurementId: "G-23QV2VQHD7",
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API,
    authDomain: "sharmam-277f0.firebaseapp.com",
    projectId: "sharmam-277f0",
    storageBucket: "sharmam-277f0.appspot.com",
    messagingSenderId: "906412588951",
    appId: "1:906412588951:web:7d39596ef9b4c145f24ed2",
    measurementId: "G-5Q133LQGNY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  return getDatabase(app);
  
  
  
}


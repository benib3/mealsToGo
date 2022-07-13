/* eslint-disable prettier/prettier */
import * as firebase from "firebase/app";

export const startFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyD-vu5NP-bFvhdVf9AEP2_4aoOTXJI75QY",
    authDomain: "mealstogo-1ed9e.firebaseapp.com",
    projectId: "mealstogo-1ed9e",
    storageBucket: "mealstogo-1ed9e.appspot.com",
    messagingSenderId: "598932158470",
    appId: "1:598932158470:web:f3f7ecd761189f85d4eb87",
  };

  firebase.initializeApp(firebaseConfig);
};

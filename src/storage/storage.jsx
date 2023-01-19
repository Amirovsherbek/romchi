import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvXc3VwO9ePDEIgDRiXv0PTTovU4xKkEc",
  authDomain: "romchi.firebaseapp.com",
  projectId: "romchi",
  storageBucket: "romchi.appspot.com",
  messagingSenderId: "347577285871",
  appId: "1:347577285871:web:9969903a31641007fc6f1a",
  measurementId: "G-0D1BDKRTHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const analytics = getFirestore(app);
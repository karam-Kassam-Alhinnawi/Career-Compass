// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1JAEPdOb9SA6w6IlvP6vPOoQt4G5RurA",
  authDomain: "carrer-compass-8c90d.firebaseapp.com",
  projectId: "carrer-compass-8c90d",
  storageBucket: "carrer-compass-8c90d.appspot.com",
  messagingSenderId: "635616352617",
  appId: "1:635616352617:web:ba86e6d059f0896a3ec5f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
export {auth}
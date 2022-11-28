// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  measurementId: process.env.REACT_APP_measurementId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app

// const firebaseConfig = {
//   apiKey: "AIzaSyAbsLEVBKDXMjjgdl_jvQ7iagMKLCHAH-s",
//   authDomain: "reselproducts-phero.firebaseapp.com",
//   projectId: "reselproducts-phero",
//   storageBucket: "reselproducts-phero.appspot.com",
//   messagingSenderId: "865935933775",
//   appId: "1:865935933775:web:3afea1a25f16b7e455453a",
//   measurementId: "G-T7NF86851W"
// };
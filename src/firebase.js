// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfGElhgBxQkX-tc-IdhLrchrB3h9MkArs",
  authDomain: "chat-luong-khong-khi.firebaseapp.com",
  databaseURL: "https://chat-luong-khong-khi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-luong-khong-khi",
  storageBucket: "chat-luong-khong-khi.appspot.com",
  messagingSenderId: "276999315469",
  appId: "1:276999315469:web:dcb68c7d9548d1a1413544",
  measurementId: "G-HS6WGYZD3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
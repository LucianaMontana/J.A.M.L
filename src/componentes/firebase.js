// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArxWO7HmmZmWvzttWhTQL3KfEluPxncVw",
  authDomain: "living-slate-f723b.firebaseapp.com",
  projectId: "living-slate-f723b",
  storageBucket: "living-slate-f723b.appspot.com",
  messagingSenderId: "477385313791",
  appId: "1:477385313791:web:919c0af67a03e695f96bca",
  measurementId: "G-KWSWHD2276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
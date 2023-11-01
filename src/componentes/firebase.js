//Credenciales de Firebase
import firebase from "firebase/compat/app"; 
import "firebase/compat/auth";
import {getAuth, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";

export const app = firebase.initializeApp ({
  apiKey: "AIzaSyArxWO7HmmZmWvzttWhTQL3KfEluPxncVw",
  authDomain: "living-slate-f723b.firebaseapp.com",
  projectId: "living-slate-f723b",
  storageBucket: "living-slate-f723b.appspot.com",
  messagingSenderId: "477385313791",
  appId: "1:477385313791:web:919c0af67a03e695f96bca",
  measurementId: "G-KWSWHD2276"
});

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
export {auth, providerGoogle, providerGithub};
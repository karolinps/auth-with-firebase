import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIuy4ddteS7fa3FaziDeOGiMZLASgZv3E",
  authDomain: "authentication-6ca7d.firebaseapp.com",
  projectId: "authentication-6ca7d",
  storageBucket: "authentication-6ca7d.appspot.com",
  messagingSenderId: "159282770110",
  appId: "1:159282770110:web:7aa2c2034a871db8066eef",
  measurementId: "G-RLKY0FVJ3S",
};

firebase.initializeApp(firebaseConfig);

const providerGoogle = new firebase.auth.GoogleAuthProvider();
const providerFacebook = new firebase.auth.FacebookAuthProvider();
const providerGitHub = new firebase.auth.GithubAuthProvider();

export { firebase, providerGoogle, providerFacebook, providerGitHub };

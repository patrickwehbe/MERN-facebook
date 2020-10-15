import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQLZSWkgLBdvNMLjlh47GV4z7dvRmz6Ak",
  authDomain: "mern-facebook-a7905.firebaseapp.com",
  databaseURL: "https://mern-facebook-a7905.firebaseio.com",
  projectId: "mern-facebook-a7905",
  storageBucket: "mern-facebook-a7905.appspot.com",
  messagingSenderId: "225024319714",
  appId: "1:225024319714:web:99ac07e93700a1df29bebb",
  measurementId: "G-SH1ZZRMNHT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;

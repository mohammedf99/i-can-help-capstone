import * as Firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfYy0iJhYSgCa7jpPg9ML_sX990QvcTXM",
  authDomain: "i-can-help-20773.firebaseapp.com",
  projectId: "i-can-help-20773",
  storageBucket: "i-can-help-20773.appspot.com",
  messagingSenderId: "259558677151",
  appId: "1:259558677151:web:d24b7fe664d5b8d904e0aa",
  measurementId: "G-XZ50P9NFWT",
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyDrtNQXArIz9BBUDX7ygvYxHoh8mI9gIHA",
    authDomain: "ecommerce-a2367.firebaseapp.com",
    projectId: "ecommerce-a2367",
    storageBucket: "ecommerce-a2367.appspot.com",
    messagingSenderId: "324631604436",
    appId: "1:324631604436:web:61bf441e20cb90d4755f41"
  };

  firebase.initializeApp(firebaseConfig);
 
// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
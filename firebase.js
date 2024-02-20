// Import the functions you need from the SDKs you need
import firebase from "firebase/app"; // Import firebase namespace
import "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmdi7hccYPUtON32D37UNbNDwaAqoauP4",
  authDomain: "authapp-c1c82.firebaseapp.com",
  projectId: "authapp-c1c82",
  storageBucket: "authapp-c1c82.appspot.com",
  messagingSenderId: "552047870304",
  appId: "1:552047870304:web:8c1ee6087806c77b331e05"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
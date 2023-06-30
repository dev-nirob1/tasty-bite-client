// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA-dGeMPTLtcygTgkd_ziBVGvUaN_5h5k",
  authDomain: "tasty-bite-auth.firebaseapp.com",
  projectId: "tasty-bite-auth",
  storageBucket: "tasty-bite-auth.appspot.com",
  messagingSenderId: "137067082742",
  appId: "1:137067082742:web:dc5bf57b5bb985a47acdd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

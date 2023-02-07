// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5y1F3HX5lHtkim_Bph3i4Kw8rGORC7mo",
  authDomain: "ngo-connect-16b99.firebaseapp.com",
  projectId: "ngo-connect-16b99",
  storageBucket: "ngo-connect-16b99.appspot.com",
  messagingSenderId: "737413993002",
  appId: "1:737413993002:web:4242c4926698c196282953",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

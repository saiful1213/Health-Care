// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDboUNMeb2qwv6gIOgHp3c1WASyeojDcWw",
  authDomain: "health-care-5a386.firebaseapp.com",
  projectId: "health-care-5a386",
  storageBucket: "health-care-5a386.appspot.com",
  messagingSenderId: "1062658214717",
  appId: "1:1062658214717:web:e17f00ba863d20ec41d354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
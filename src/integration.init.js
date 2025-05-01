// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyuRPo9ZrWb57jwOA5gfmPnvAJXLb0UkA",
  authDomain: "auth-integration-4c2e2.firebaseapp.com",
  projectId: "auth-integration-4c2e2",
  storageBucket: "auth-integration-4c2e2.firebasestorage.app",
  messagingSenderId: "680880427559",
  appId: "1:680880427559:web:4ef35cb8c5c925a26af402"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAoWfLc2SlL_qoVu4CSqWJ6ZBPPli4PMrA",
   authDomain: "perishable-products.firebaseapp.com",
   projectId: "perishable-products",
   storageBucket: "perishable-products.appspot.com",
   messagingSenderId: "486898143909",
   appId: "1:486898143909:web:98d18436c1ee5104a6f34c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
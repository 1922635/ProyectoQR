// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxFm26eSqYJyidypDnoWaDWWTRLhR7oF4",

  authDomain: "qrproyecto-6bc05.firebaseapp.com",

  projectId: "qrproyecto-6bc05",

  storageBucket: "qrproyecto-6bc05.firebasestorage.app",

  messagingSenderId: "376237029790",

  appId: "1:376237029790:web:d67ab3dcebca8a7b913e8f"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);
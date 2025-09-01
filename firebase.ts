// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT5KnHMY5mrZujDGBxip7qBOUlQxmMa4A",
  authDomain: "al-noor-store-owners.firebaseapp.com",
  projectId: "al-noor-store-owners",
  storageBucket: "al-noor-store-owners.appspot.com",
  messagingSenderId: "790841443770",
  appId: "1:790841443770:web:94c58d2d40a817bf328983",
  measurementId: "G-CSFL3M67RH"
};

// Initialize Firebase for SSR
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, db, storage };

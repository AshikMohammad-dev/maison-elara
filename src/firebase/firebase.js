import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDp-qVA-HYCOnMkwcUvEtGu2CpgOdYfx00",
  authDomain: "boutique-engine.firebaseapp.com",
  projectId: "boutique-engine",
  storageBucket: "boutique-engine.firebasestorage.app",
  messagingSenderId: "741174905588",
  appId: "1:741174905588:web:5732266689b8c44d942ca1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
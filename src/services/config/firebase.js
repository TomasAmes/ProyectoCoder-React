import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbK2vsb92Pazemv-P8PpDQaRg4PwgcQpA",
  authDomain: "proyecto-coderreact-fb3b5.firebaseapp.com",
  projectId: "proyecto-coderreact-fb3b5",
  storageBucket: "proyecto-coderreact-fb3b5.firebasestorage.app",
  messagingSenderId: "990678612870",
  appId: "1:990678612870:web:23f443377ea09e33234a07"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
 
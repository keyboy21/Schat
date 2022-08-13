import { FIREBASE_API_KEY } from '@env'
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "fir-chat-3d05c.firebaseapp.com",
  projectId: "fir-chat-3d05c",
  storageBucket: "fir-chat-3d05c.appspot.com",
  messagingSenderId: "173813042692",
  appId: "1:173813042692:web:f6dfca2bf3fc655976ef51"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)





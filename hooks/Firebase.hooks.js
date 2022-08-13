import { db, auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";


export const registerFirebase = async (email, password) => await createUserWithEmailAndPassword(auth, email, password);

export const updateUserProfile = async (fullName, imageUrl) => await updateProfile(auth.currentUser, {
  displayName: fullName,
  photoURL: imageUrl
})

export const getChats = async () => await getDocs(collection(db, 'chats'));

export const SignIn = async (email, password) => await signInWithEmailAndPassword(auth, email, password);

export const SignOut = async () => await signOut(auth);

export const Chatcreate = async (name) => await addDoc(collection(db, 'chats'), { chatName: name })
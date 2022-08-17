import { db, auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc, getDocs, serverTimestamp, doc, onSnapshot, orderBy } from "firebase/firestore";

export const registerFirebase = async (email, password) => await createUserWithEmailAndPassword(auth, email, password);

export const updateUserProfile = async (fullName, imageUrl) => await updateProfile(auth.currentUser, {
  displayName: fullName,
  photoURL: imageUrl
})

export const getChats = async () => await getDocs(collection(db, 'chats'));

export const SignIn = async (email, password) => await signInWithEmailAndPassword(auth, email, password);

export const SignOut = async () => await signOut(auth);

export const Chatcreate = async (name) => await addDoc(collection(db, 'chats'), { chatName: name });


export const SendMessage = async (input, id) => {
  const docRef = doc(db, 'chats', id)
  const colRef = collection(docRef, "messages");

  addDoc(colRef, {
    timestamp: serverTimestamp(),
    message: input,
    displayName: auth.currentUser.displayName,
    email: auth.currentUser.email,
    photoURL: auth.currentUser.photoURL
  })
}

export const getChatMessages = async (id, setMessages) => {
  const docRef2 = doc(db, 'chats', id);
  const colRef = collection(docRef2, "messages");

  onSnapshot(colRef, (doc) => setMessages(
    doc.docs.map((doc) => ({
      id: doc.id,
      data: doc.data()
    }))
  ))
}
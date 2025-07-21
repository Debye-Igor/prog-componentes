import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBKmbIBZkexTe4eKu-8YOIc7c1IzmnG93A",
  authDomain: "examen-prog-componentes-e798d.firebaseapp.com",
  projectId: "examen-prog-componentes-e798d",
  storageBucket: "examen-prog-componentes-e798d.firebasestorage.app",
  messagingSenderId: "828684358144",
  appId: "1:828684358144:web:5463a9ed1a0bc3d06c7ee5"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
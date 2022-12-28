import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCE7fIR9tek5PRqxno88U6X9TqIRhUhhkQ",
  authDomain: "metavy-82afd.firebaseapp.com",
  projectId: "metavy-82afd",
  storageBucket: "metavy-82afd.appspot.com",
  messagingSenderId: "169518552093",
  appId: "1:169518552093:web:3ecf7d9779f9dab7f1a2f4",
  measurementId: "G-CGSHGXS92Q"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;




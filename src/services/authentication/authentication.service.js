/* eslint-disable prettier/prettier */
import { startFirebase } from "../../services/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
startFirebase();
const auth = getAuth();
export const loginRequest = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);

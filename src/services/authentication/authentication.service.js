/* eslint-disable prettier/prettier */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
export const loginRequest = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);

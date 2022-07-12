/* eslint-disable prettier/prettier */
import { signInWithEmailAndPassword } from "firebase/auth";

const loginRequest = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);

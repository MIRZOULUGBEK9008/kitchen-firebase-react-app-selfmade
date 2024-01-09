import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useGlobalContext } from "./useGlobalContext";
export function useLogin() {
  const { dispatch } = useGlobalContext();
  function loginWithGoogleProvider() {
    dispatch({ type: "IS_PENDING", payload: true });
    signInWithPopup(auth, googleProvider)
      .then(({ user }) => {
        toast.success(`Welcome ${user.displayName} !`);
        dispatch({ type: "LOGIN", payload: user });
        dispatch({ type: "IS_PENDING", payload: false });
        dispatch({ type: "ERROR", payload: null });
      })
      .catch(({ message }) => {
        toast.error(message);
        dispatch({ type: "IS_PENDING", payload: true });
        dispatch({ type: "ERROR", payload: errorMessage });
      });
  }
  // Signin
  function loginWithDisplayNameAndEmailAndPassword({
    displayName,
    email,
    password,
    photoURL,
  }) {
    dispatch({ type: "IS_PENDING", payload: true });
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName, photoURL });
        toast.success(`Welcome ${user.displayName} !`);
        dispatch({ type: "LOGIN", payload: user });
        dispatch({ type: "ERROR", error: null });
        dispatch({ type: "IS_PENDING", payload: false });
      })
      .catch(({ message }) => {
        toast.error(message);
        dispatch({ type: "ERROR", error: message });
        dispatch({ type: "IS_PENDING", payload: false });
      });
  }
  // Login
  function loginWithEmailAndPassword({ email, password }) {
    dispatch({ type: "IS_PENDING", payload: true });
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        toast.success("Welcome come back )");
        dispatch({ type: "LOGIN", payload: user });
        dispatch({ type: "ERROR", error: null });
        dispatch({ type: "IS_PENDING", payload: false });
      })
      .catch(({ message }) => {
        toast.error(message);
        dispatch({ type: "ERROR", error: message });
        dispatch({ type: "IS_PENDING", payload: false });
      });
  }

  return {
    loginWithGoogleProvider,
    loginWithDisplayNameAndEmailAndPassword,
    loginWithEmailAndPassword,
  };
}

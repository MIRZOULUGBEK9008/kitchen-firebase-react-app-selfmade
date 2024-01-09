import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useGlobalContext } from "./useGlobalContext";
export function useLogin() {
  const { dispatch } = useGlobalContext();
  function loginWithGoogleProvider() {
    dispatch({ type: "IS_PENDING", payload: true });
    signInWithPopup(auth, googleProvider)
      .then(({ user }) => {
        toast.success(`Welcome ${user.displayName}`);
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

  return { loginWithGoogleProvider };
}

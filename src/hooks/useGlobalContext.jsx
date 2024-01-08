import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext() is correct ?!");
  }
  return context;
}

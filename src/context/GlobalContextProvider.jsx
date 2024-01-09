import { createContext, useReducer } from "react";

const GlobalContext = createContext();

function changeState(state, { type, payload }) {
  switch (type) {
    case "LOGIN":
      return { ...state, user: payload };
    case "LOGOUT":
      return { ...state, user: payload };
    case "IS_AUTH_READY":
      return { ...state, isAuthReady: payload };
    case "IS_PENDING":
      return { ...state, isPending: payload };
    case "ERROR":
      return { ...state, error: payload };
    default:
      return state;
  }
}

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    isAuthReady: false,
    isPending: false,
    error: null,
  });
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContextProvider, GlobalContext };

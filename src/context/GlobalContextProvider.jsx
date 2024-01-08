import { createContext, useReducer } from "react";

const GlobalContext = createContext();

function changeState(state, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {});
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContextProvider, GlobalContext };

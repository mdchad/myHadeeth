import { createContext, useState } from "react";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  //authInitialState can be whatever you want, ex: {rand: {}, rand2: null}
  const [authState, authDispatch] = useState(null);

  return (
    <GlobalContext.Provider value={{ authState, authDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

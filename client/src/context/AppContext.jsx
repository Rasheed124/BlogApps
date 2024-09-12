import React, { useEffect, useState } from "react";

import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const contextValue = {
    userInfo,
    setUserInfo,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default ContextProvider;

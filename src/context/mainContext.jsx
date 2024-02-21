import React, { useEffect, useState } from "react";
import { createContext } from "react";

const Context = createContext({});

const MainContext = ({ children }) => {
  const [state, setState] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setState({ ...state, user: JSON.parse(user) });
    }
  }, []);
  return <Context.Provider value={{ ...state }}>{children}</Context.Provider>;
};

export default MainContext;

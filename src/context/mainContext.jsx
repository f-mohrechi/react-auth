import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const Context = createContext({});

const MainContext = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    settings: {
      lang: "en",
    },
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    let data = { ...state };
    if (user) {
      data = { ...data, user: JSON.parse(user) };
    }

    const settings = localStorage.getItem("settings");
    if (settings) {
      data = { ...data, settings: JSON.parse(settings) };
    }

    setState(data);
  }, []);
  console.log("first", state.user);

  const dispatch = (key, value, store = false) => {
    let data = { ...state };
    data = { ...state, [key]: value };
    setState(data);
    if (store) {
      localStorage.setItem("settings", JSON.stringify(data.settings));
    }
  };

  const isAuthenticated = () => {
    return !!state.user;
  };

  return (
    <Context.Provider value={{ ...state, dispatch, isAuthenticated }}>
      {children}
    </Context.Provider>
  );
};

export default MainContext;

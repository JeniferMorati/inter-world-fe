import React, { useEffect, useMemo } from "react";
import { useState } from "react/cjs/react.development";
import { createContext, useContext } from "react";

// dictionary
import selectDictionary from "../dictionary";
import FirebaseAuth from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import dictionary from "../dictionary/default";

const firebase = new FirebaseAuth();

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("BR");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(firebase.appAuth, provider);
  };

  const value = useMemo(
    () => ({
      dictionary: selectDictionary(language),
      isAuthenticated,
      language,
      setLanguage,
      signInGoogle,
    }),
    [dictionary, isAuthenticated, language, signInGoogle, setLanguage]
  );

  firebase.appAuth.onAuthStateChanged((user) => {
    setIsAuthenticated(!!user);
  });

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("App need to use AppProvider");
  }
  return context;
};

export { AppProvider, AppContext, useAppContext };

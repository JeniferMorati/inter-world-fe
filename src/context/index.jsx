import { useState, useEffect } from "react/cjs/react.development";
import { createContext, useContext } from "react";

// dictionary
import selectDictionary from "../dictionary";
import { firebase } from "../firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { atomCurrentUser } from "../store/atoms";

const AppContext = createContext({});

const auth = getAuth(firebase);

const AppProvider = ({ children }) => {
  const navigateTo = useNavigate();
  const [user, setUser] = useRecoilState(atomCurrentUser);

  const [teste, setTeste] = useState(0);
  const [language, setLanguage] = useState("BR");

  const signInGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const googleUser = result.user;
        setUser(googleUser);
        setTeste(teste + 1);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const value = {
    dictionary: selectDictionary(language),
    isAuthenticated: !!user,
    language,
    setLanguage,
    signInGoogle,
  };

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

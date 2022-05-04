import { useState, useEffect } from "react/cjs/react.development";
import { createContext, useContext } from "react";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  // TODO: buscar essas informações do banco de dados no primeiro loading com um useEffect
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
  };

  useEffect(() => {
    if (!isAuthenticated) setUser({});
  }, [isAuthenticated]);

  useEffect(() => {
    if (user && user.name) {
      setIsAuthenticated(true);
    }
  }, [user]);

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

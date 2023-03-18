import { useContext, useState, createContext } from "react";

// create a context using the createContext function
const AppContext = createContext();

// export a custom hook that allows you to access your values in the context
export const useApp = () => useContext(AppContext);

// create a Provider component linked to the context
export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // create an object to store all the values you want to access from the context
  const value = { isLoggedIn, setIsLoggedIn };

  return (
    // pass the value in to the Provider
    <AppContext.Provider value={value}>
      {/* spread the child nodes within the Provider */}
      {children}
    </AppContext.Provider>
  );
};

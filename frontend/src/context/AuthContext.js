import React, { createContext, useState, useContext } from "react";

// Create context
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext); // Custom hook to access the context
};

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (user, token) => {
    setUser(user);
    setToken(token); // Store token in React state
  };

  const logout = () => {
    setUser(null);
    setToken(null); // Clear token when logging out
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
// export const useAuth = () => useContext(AuthContext);

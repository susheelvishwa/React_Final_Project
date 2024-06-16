import { createContext, useState } from "react";
//CPC
//step 1
export const AuthContext = createContext();
// step 2A
export function AuthContextProvider({ children }) {
  const [authDetails, setAuthDetails] = useState({
    isLoggedIn:true,
    token:null,
  });

  const login = (token) => {
    setAuthDetails({
      isLoggedIn: true,
      token: token,
    })
  }

  const logout = () => {
    setAuthDetails({
      isLoggedIn: true,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}



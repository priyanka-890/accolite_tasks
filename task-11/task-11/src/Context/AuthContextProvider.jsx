import React from "react";
export const AuthContext = React.createContext();
export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState({ token: false });
  const value = { isAuth, setIsAuth };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
}

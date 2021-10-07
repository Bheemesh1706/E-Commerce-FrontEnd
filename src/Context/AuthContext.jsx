import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
 
const authToken = useLocalStorage('token');

const [Token,setToken] =  authToken;

  return (
    <AuthContext.Provider value={[Token, setToken]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = ()=> useContext(AuthContext)

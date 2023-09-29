
import { createContext, useContext, useMemo } from "react";
const AuthContext = createContext();

  const isAuthenticated = ( token ) => {
    
    const decoded = jwt.verify(token,'secret');
    
    if(decoded){
      return decoded
    }
  }
  export default isAuthenticated


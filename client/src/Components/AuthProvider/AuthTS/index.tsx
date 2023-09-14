import {createContext, useEffect, useState} from "react"
import { IContext, IAuthProvider, IUser } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./utils";
import React from "react";
export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider) =>{
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
      const user = getUserLocalStorage() // Puxa quem esta no localstorage
    
      if(user){ // se for valido loga o usuario
        setUser(user)
      }
    }, [])

    async function authenticate (email: string, password: string) {
        const response  = await LoginRequest(email, password)

        //consimindo o retorno  da API pelo payload
        const payload = {token: response.token, email}
        setUser(payload); 
        setUserLocalStorage(payload);
    }

    function logout (){
        setUser(null);
        setUserLocalStorage(null);
    }
    return (
    // value é o que ele vai usar, "user" mas sera necessario algo mais por isso tem o authenticate
        <AuthContext.Provider value={{...user, authenticate, logout}}>      
            {children}
        </AuthContext.Provider>
    )
}
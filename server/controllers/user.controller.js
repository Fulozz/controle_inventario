import {createContext}from "react"

const AuthData = createContext();

export const AuthWrapper = () =>{
  const [ user, setUser] = useState({name: "", isAutenticated: false})

  const login = (username, password)=>{
    return new Promise((resolve,reject)=>{
      if (password === "password"){
        setUser({name: username, isAutenticated: true})
        resolve('sucess')
      }else {
        reject("incorrect password")
      }
    })
  }
  const logout = () =>{
    setUser({...user, isAutenticated: false})
  }
}
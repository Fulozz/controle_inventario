import Axios from "axios";

// Trocar para a API que estara sendo usada https://localhost:3006/ fodase
export const Api = Axios.create({
    baseURL: "https://localhost:3006"  
})

export function getUserLocalStorage() {
    const json = localStorage.getItem('u');
    if (!json) {
      return null;
    }
    const user = JSON.parse(json);
    return user ?? null;
  }

Api.interceptors.request.use(
    (config)=>{
        const user = getUserLocalStorage()

        config.headers.Authorization = user?.token
        return config
    },
    (error)=>{ return Promise.reject(error)},
)
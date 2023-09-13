import Axios from "axios";

// Trocar para a API que estara sendo usada https://localhost:3006/ fodase
export const Api = Axios.create({
    baseURL: "https://localhost:3006"  
})
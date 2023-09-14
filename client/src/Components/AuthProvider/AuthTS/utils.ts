import { IUser } from './types';
import { Api } from '../../../Services/API';
export function logout(){
    localStorage.removeItem('u')
}
export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem('u', JSON.stringify(user));
}
 //LocalStorage util para coisas que voce usa sempre para nao ficar requisitando do banco de dados
    export function getUserLocalStorage() {
        const json = localStorage.getItem('u')
        if(!json){
            return null
        }
        const user = JSON.parse(json)
        return user ?? null; // se for user null ou algo que nao seja util retorna null
    }
export async function LoginRequest(email: string, password: string){
    try{
        const request = await Api.post("login", {email, password});

        return request.data // resultado do request
    }
    catch (error){
        console.log(error)
    }
}
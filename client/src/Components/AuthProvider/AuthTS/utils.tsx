import { IUser } from './types';

export function logout(){
    localStorage.removeItem('jwt')
}
export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem('jwt', JSON.stringify(user));
}
 //LocalStorage util para coisas que voce usa sempre para nao ficar requisitando do banco de dados
export function getUserLocalStorage() {
        const json = localStorage.getItem('jwt')
        if(!json){
            return null
        }
        const user = JSON.parse(json)
        return user ?? null; // se for user null ou algo que nao seja util retorna null
    }

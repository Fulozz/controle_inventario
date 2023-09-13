// Tipos de type que serao usados

export interface IUser{
    email?: string;
    token?: string;
}

export interface IContext extends IUser{
    authenticate: (email: string, password: string) => Promise<void>; // Vai autenticar o usuario por isso a Promisse nao returna nada
    logout: ()=> void;
}

export interface IAuthProvider{
    children: JSX.Element
}


export function logout (){
    localStorage.removeItem('jwt')
}


export function setPayload (payload){
    localStorage.setItem('jwt', JSON.stringify(payload))
}
module.export.createUser = (e)=>{
    e.preventDefault()
    if (!email || !username || !password) {
      console.log('Por favor, preencha todos os campos.');
      return;
    }
    //Require axios to create an API to connect with the server
    Axios.post('http://localhost:3006/register', {
      
      //variable for the server through the route
      email: email,
      username: username,
      password: password
    }).then(()=>{
      console.log('user has been created ')
      navigateTo('/')
      sentPassword('')
      sentUserName('')
      sentEmail('')
    }).catch((err)=>{
      console.log(err)
    })
    
  }
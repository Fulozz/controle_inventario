import React, { useEffect, useState } from 'react'
import './Loading.css'
const Loading = () => {
    const [visible, setVisible] = useState(true);

    const hideLoading = () =>{
        setVisible(false)
        document.querySelector(".loading").style.display = "none";
    }
    setTimeout (()=>{
        if(visible) return hideLoading();
    }, 700)

    const loadinAnimation = () =>{
        function typeWriter(elemento) {
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            textoArray.forEach((letra, i) => {
              setTimeout(() => elemento.innerHTML += letra, 35 * i);
            });
          }  
          const titulo = document.querySelector('.typeWriter');
        
          typeWriter(titulo);
    }
    useEffect(()=>{
        loadinAnimation()
    })
  return (        
            <div className="loading container">
                <div className='loading-text'><h3 className='typeWriter'>Carregando...</h3></div>
            </div>    
  )
}

export default Loading
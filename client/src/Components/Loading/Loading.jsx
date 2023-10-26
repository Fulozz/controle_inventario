import React, { useState } from 'react'
import './Loading.css'
const Loading = () => {
    const [visible, setVisible] = useState(true);

    const hideLoading = () =>{
        setVisible(false)
        document.querySelector(".loading").style.display = "none";
    }
    setTimeout (()=>{
        if(visible) return hideLoading();
    }, 1000)
  return (        
            <div className="loading container">
                <div className='loading-text'>Carregando...</div>
            </div>    
  )
}

export default Loading
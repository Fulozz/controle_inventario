import React, { useState } from 'react'

const Loading = () => {
    const [visible, setVisible] = useState(true);

    const hideLoading = () =>{
        setVisible(false)
        document.querySelector(".loading").style.display = "none";
    }
    setTimeout (()=>{
        if(visible) return hideLoading();
    }, 2000)
  return (
    <>
        {visible ? (
            
            <div className="loading">
                Carregando...
            </div>
        ) : null
        }
    </>
  )
}

export default Loading
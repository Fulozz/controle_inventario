import React, { useState } from 'react'

const Loading = () => {
    const [visible, setVisible] = useState(true);

    const hideLoading = () =>{
        setVisible(false)
    }
    const interval = setInterval (()=>{
        if(visible) return hideLoading();
    }, 2000)
  return (
    <>
        {visible &&
            <div className="loading">
                Carregando...
            </div>
        }
    </>
  )
}

export default Loading
import React from 'react'
import Top from '../../Top Section/Top'

const Body = () => {
  return (
    <div className="mainContent">
        <Top />
        <div className="bottom">
            <h1>Dicas principais</h1>
            <br />
            <div className="textDiv">
                <p> 
                    Caso deseje alterar ou excluir alguma informação,
                    contate o gerenciador da redepara que ele consiga efetuar a exclusão do conteudo
                </p>
                <br />
                <p>
                    Se for necessario fazer alguma alteração que não está habilitada no client do usuario,
                    seja para alterar alguma das informações principais que ficam bloqueadas é necessario a validação
                    das informações através de uma API privada, que somente o administrador tem acesso.
                </p>
                <br />
                <p>Infelizmente não é possivel ainda alterar a senha do usuario</p>
                <br />
                <br />
                
                <h1>API</h1>
                <br />
                
                <h4>
                    http://10.0.50.39:3001/api/v1/patrimonio/all 
                    <br />
                    É a API de integração com outros sistemas
                    nela é possivel selecionar dados para a integração com outras plataformas
                </h4>
                
            </div>
        </div>
    </div>
  )
}

export default Body
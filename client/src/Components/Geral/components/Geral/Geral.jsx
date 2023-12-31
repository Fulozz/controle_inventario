import React, { useEffect, useState } from "react";

import "./Geral.css";


import API from '../../../../API/API.patrimonio'
import {
  AiOutlineEye,
} from "react-icons/ai";


import { Link } from "react-router-dom";

import Card from "../../../../View/Card/Card";
import Images from "../../../../View/Imagens/Images";

const Geral = () => {
  const [patrimonios, setPatrimonio] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const [singlePatrimonio, setSinglePatrimonio] = useState();

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [localSelecionado, setLocalSelecionado] = useState("Todos");
  // Função para filtrar os dados de patrimônio com base na categoria selecionada
  const filterPatrimonios = (patrimonios) => {
    // Se a categoria selecionada for "Todos", retorna todos os patrimônios
    // if (localSelecionado === "Todos") return patrimonios
    if (categoriaSelecionada === "Todos") return patrimonios;
    // Caso contrário, retorna apenas os patrimônios da categoria selecionada
    return patrimonios.filter((patrimonio) => patrimonio.categoria === categoriaSelecionada);
  };

  useEffect(() => {
    API().get("/patrimonio").then(
      (response) => {
        if(response.status === 200) setPatrimonio(response.data);
        return null
      }
    );
  }, []);

  useEffect(() => {
    API().get("/all").then((response) => {
      setPatrimonio(response.data);
    });
  }, []);



  return (
    <div className="listingSection">
      {/* Filtro de opções de categorias */}
        <select onChange={(event) => setCategoriaSelecionada(event.target.value)}>
          <option value="Todos">Todos</option>
          <option value="monitor">Monitores</option>
          <option value="notebook">Notebooks</option>
          <option value="computador">Computadores</option>
          <option value="servidor">Servidores</option>
          <option value="switch">Switches</option>
          <option value="telefone">Telefones</option>
          <option value="impressora">Impressoras</option>
        </select>
        {/* <select onChange={(event) => setLocalSelecionado(event.target.value)}>
          <option value="Todos">Todos</option>
          <option value="Viva Mais Plan">VMP</option>
          <option value="Gs Contact Center">GS</option>
        </select> */}
      <div className="flex">
        <div className="secContainer flex">  
        {patrimonios &&
        filterPatrimonios(patrimonios).map((patrimonio, index) => (
          <div className="singleItem" key={index}>
            <h5>{patrimonio.host_name}</h5>
            <button
              onClick={() => {
                setIsVisible(true);
                setSinglePatrimonio(patrimonio);
              }}
            >
              <AiOutlineEye className="icon" />
            </button>
            <Images patrimonio={patrimonio} />
            <Link
              onClick={() => {
                setIsVisible(true);
              }}
            >
              <h3>{patrimonio.patrimonio}</h3>
            </Link>
          </div>
        ))}
        </div>
        {isVisible && (
          <Card singlePatrimonio={singlePatrimonio} setIsVisible={setIsVisible} />
        )}
      </div>
    </div>
  );
};

export default Geral;

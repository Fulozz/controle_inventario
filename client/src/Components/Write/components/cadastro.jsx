import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




const Cadastro = () => {
  const [data, setData] = useState({
    // Dados da primeira etapa do form
  })

  const handleSubmit = (e)=> {
    e.preventDefault();
    const firstStageData = data;
    useNavigate('/detalhes')
  }
  return (
    <div>
      <h1>Cadastro de produto</h1>

      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="patrimonio">Patrimônio</label>
          <input
            type="text"
            className="form-control"
            id="patrimonio"
            name="patrimonio"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="host_name">Nome do host</label>
          <input
            type="text"
            className="form-control"
            id="host_name"
            name="host_name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="serial_number">Número de série</label>
          <input
            type="text"
            className="form-control"
            id="serial_number"
            name="serial_number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="marca">Marca</label>
          <select className="form-control" id="marca" name="marca">
            <option value="">Selecione</option>
            <option value="HP">HP</option>
            <option value="DELL">DELL</option>
            <option value="LENOVO">LENOVO</option>
            <option value="Outra">Outra</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="modelo">Modelo</label>
          <input
            type="text"
            className="form-control"
            id="modelo"
            name="modelo"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Avançar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;

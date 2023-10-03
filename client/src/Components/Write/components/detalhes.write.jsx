import React, { useState } from "react";

const Detalhes = () => {
  const [data, setData] = useState({
    // Dados da primeira etapa do form
  });
  const [firstStageData, setFirstStageData] = useState(null);

  const handleSubmit = (e)=> {
    e.preventDefault();

    // Salvar dados da primeira etapa
    const firstStageData = data;

    // Salvar dados das duas etapas
    setFirstStageData({ ...firstStageData, ...secondStageData });

    // Redirecionar para a terceira etapa
    useNavigate('/local')
  }
  return (
    <div>
      <h1>Detalhes técnicos</h1>

      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label for="cpu">CPU</label>
          <input
            type="text"
            className="form-control"
            id="cpu"
            name="cpu"
            required
          />
        </div>

        <div className="form-group">
          <label for="gpu">GPU</label>
          <input
            type="text"
            className="form-control"
            id="gpu"
            name="gpu"
            required
          />
        </div>

        <div className="form-group">
          <label for="memoria_ram">Memória RAM</label>
          <input
            type="text"
            className="form-control"
            id="memoria_ram"
            name="memoria_ram"
            required
          />
        </div>

        <div className="form-group">
          <label for="ddr4">DDR4</label>
          <select className="form-control" id="ddr4" name="ddr4">
            <option value="">Selecione</option>
            <option value="DDR2">DDR2</option>
            <option value="DDR3">DDR3</option>
            <option value="DDR4">DDR4</option>
          </select>
        </div>

        <div className="form-group">
          <label for="hard_disk">Disco rígido</label>
          <input
            type="text"
            className="form-control"
            id="hard_disk"
            name="hard_disk"
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

export default Detalhes;

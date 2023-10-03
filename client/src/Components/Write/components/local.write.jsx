import React from "react";

const Local = () => {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="departamento">Departamento</label>
          <select class="form-control" id="departamento" name="departamento">
            <option value="">Selecione</option>
            <option value="TI">TI</option>
            <option value="Operação">Operação</option>
            <option value="RH">RH</option>
            <option value="Diretoria">Diretoria</option>
            <option value="Reunião">Reunião</option>
          </select>
        </div>

        <div class="form-group">
          <label for="situacao">Situação</label>
          <select class="form-control" id="situacao" name="situacao">
            <option value="">Selecione</option>
            <option value="Ativo">Ativo</option>
            <option value="Reserva">Reserva</option>
            <option value="Manutenção">Manutenção</option>
            <option value="Defeito">Defeito</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Local;

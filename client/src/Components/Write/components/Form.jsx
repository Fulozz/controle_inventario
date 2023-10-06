import React, { useState } from "react";

const Form = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    endereco: "",
    telefone: "",
  });

  const handleSubmit = () => {
    // Validar formulário
    
    // Se formulário for válido, avançar para próxima página
    setPage(page + 1);
    
    // Atualizar o estado formData
    setFormData({
      ...formData,
      nome: formData.nome,
      email: formData.email,
      endereco: formData.endereco,
      telefone: formData.telefone,
    });
  };

  return (
    <div>
      {page === 1 ? (
        <Page1 handleSubmit={handleSubmit} setFormData={setFormData} />
      ) : page === 2 ? (
        <Page2 handleSubmit={handleSubmit} setFormData={setFormData} />
      ) : page === 3  && formData ? (
        <Page3 formData={formData} />
      ) : null}
    </div>
  );
};

const Page1 = ({ handleSubmit }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  console.log(nome, email);
  const handleChangeName = (e) => {
    const { name, value } = e.target;
    setNome(value);
  };
  const handleChangeEmail = (e) => {
    const { email, value } = e.target;
    setEmail(value);
  };
  console.log(handleSubmit);
  return (
    <div>
      <input
        type="text"
        placeholder="Nome"
        name="nome"
        onChange={handleChangeName}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChangeEmail}
      />
      <button onClick={handleSubmit}>Avançar</button>
    </div>
  );
};

const Page2 = ({ handleSubmit }) => {
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  console.log(endereco, telefone);
  const handleChangeEndereco = (e) => {
    const { endereco , value } = e.target;
    setEndereco(value);
  };
  const handleChangeTelefone = (e) => {
    const { telefone , value } = e.target;
    setTelefone(value);
  };
  console.log(handleSubmit);

  return (
    <div>
      <input
        type="text"
        placeholder="Endereço"
        name="endereco"
        onChange={handleChangeEndereco}
      />
      <input
        type="tel"
        placeholder="Telefone"
        name="telefone"
        onChange={handleChangeTelefone}
      />
      <button onClick={handleSubmit}>Avançar</button>
    </div>
  );
};

const Page3 = ({ formData }) => {
  console.log(formData);
      if (formData) {
        return (
          <div>
            <h1>Confirmação de dados</h1>
            <p>Nome: {formData.nome}</p>
            <p>Email: {formData.email}</p>
            <p>Endereço: {formData.endereco}</p>
            <p>Telefone: {formData.telefone}</p>
          </div>
        );
      } else {
        return null;
      }
    
};

export default Form;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './write.css'
function Write() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [serial_number, setSerialNumber] = useState('');

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envia os dados do formulário para o backend
    const response = await fetch('http://localhost:3000/api/v1/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        serial_number,
      }),
    });

    // Atualiza o estado do componente
    if (response.status === 201) {
      const item = await response.json();
      setName('');
      setDescription('');
      setSerialNumber('');
      history.push(`/items/${item.id}`);
    }
  };

  return (
    <div className='container flex'>
        <div className='itemForm'> 
      <h1>Cadastro de itens</h1>
    <div className="editor">
      <form onSubmit={handleSubmit}>
        <label htmlFor="patrimonio">Patrimonio:</label>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /> <br />
        
        <label htmlFor="price">S/N: </label>
        <input
          type="text"
          placeholder="Serial"
          value={serial_number}
          onChange={(e) => setSerialNumber(e.target.value)}
        /><br />
        <div className='submit'>
            <button type="submit" className='submitButton'>Cadastrar</button>
        </div>
      </form>
        
        </div>
        </div>
    </div>
  );
}

export default Write;
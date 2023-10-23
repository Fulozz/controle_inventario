import axios from 'axios';

export default () => axios.create({
  // Conexao com o backend
  baseURL: 'http://localhost:3001/api/v1',
});

// Fetchs na pasta Register, Login, Write/Form, Taskbar, Geral, Activity, Top
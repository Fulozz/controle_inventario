import axios from 'axios';

export default () => axios.create({
  // Conexao com o backend
  baseURL: 'http://localhost:3000/api/v1',
});
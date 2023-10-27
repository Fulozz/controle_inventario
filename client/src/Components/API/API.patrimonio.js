import axios from 'axios';
const URL = "http://10.0.50.39:3001/api/v1/patrimonio"
const URLocal = "http://localhost:3001/api/v1/patrimonio"
export default () => axios.create({
  // Conexao com o backend
  baseURL: URL  ,
});

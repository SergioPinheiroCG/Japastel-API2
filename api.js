import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.10:5000/api',  // Substitua pela URL do seu backend
  timeout: 10000,  // Tempo máximo para a requisição
});

export default api;

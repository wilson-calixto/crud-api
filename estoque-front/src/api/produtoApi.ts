import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000', // ou o endereço do seu backend
});

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
}

export const getProdutos = async (): Promise<Produto[]> => {
  const response = await api.get('/produtos');
  return response.data;
};

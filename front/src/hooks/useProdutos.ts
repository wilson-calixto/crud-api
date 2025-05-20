import { useQuery } from '@tanstack/react-query';
import { getProdutos } from '../api/produtoApi';

export const useProdutos = () => {
  return useQuery({
    queryKey: ['produtos'],
    queryFn: getProdutos,
  });
};

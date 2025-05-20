import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table, Skeleton, Alert } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Counter } from './features/counter/Counter';

interface Product {
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  preco: number;
}

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/produtos');
  if (!res.ok) throw new Error('Erro ao buscar produtos');
  return res.json();
}

const columns: ColumnsType<Product> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nome',
    dataIndex: 'nome',
    key: 'nome',
  },
  {
    title: 'Descrição',
    dataIndex: 'descricao',
    key: 'descricao',
  },
  {
    title: 'Quantidade',
    dataIndex: 'quantidade',
    key: 'quantidade',
  },
  {
    title: 'Preço',
    dataIndex: 'preco',
    key: 'preco',
    render: (value) => `R$ ${value.toFixed(2)}`,
  },
];

function Posts() {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ['produtos'],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Skeleton active />;
  if (error instanceof Error) {
    return <Alert message="Erro" description={error.message} type="error" showIcon />;
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Produtos</h1>
      <Table columns={columns} dataSource={data} rowKey="id" pagination={{ pageSize: 5 }} />
      <Counter />
    </div>
  );
}

function App() {
  return <Posts />;
}

export default App;

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table, Skeleton, Alert } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Counter } from './features/counter/Counter';
import CreateProductModal from './components/CreateProductModal/CreateProductModal';
import useRequestedOrdersTab from './hooks/useCreateAndEditProduct';

interface Product {
  id: number;
  name: string;
  description: string;
  qty: number;
  amount: number;
}

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/produtos');
  if (!res.ok) throw new Error('Erro ao buscar produto');
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
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Quantidade',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Preço',
    dataIndex: 'amount',
    key: 'amount',
    render: (value) => `R$ ${value.toFixed(2)}`,
  },
];

function Posts() {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ['produto'],
    queryFn: fetchProducts,
  });

  
  const {
 
    openCreateNewOrder,
    handleCancelCreateNewOrder,
    confirmCreateNewOrder, 
    isLoadingCreateRequestOrder
   } = useRequestedOrdersTab();


  if (isLoading) return <Skeleton active />;
  if (error instanceof Error) {
    return <Alert message="Erro" description={error.message} type="error" showIcon />;
  }


  return (
    <div style={{ padding: 24 }}>
        <CreateProductModal
        isOpen={openCreateNewOrder}
        onCancel={handleCancelCreateNewOrder}
        onConfirm={confirmCreateNewOrder}
        loading={isLoadingCreateRequestOrder}        
      />

      <h1>Produto</h1>
      <Table columns={columns} dataSource={data} rowKey="id" pagination={{ pageSize: 5 }} />
      <Counter />
    </div>
  );
}

function App() {
  return <Posts />;
}

export default App;

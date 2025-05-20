import React from 'react'
  import { v4 as uuidv4 } from 'uuid'
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Counter } from './features/counter/Counter';


const queryClient = new QueryClient();


async function fetchProducts() {
  const res = await fetch('http://localhost:3000/produtos');
  if (!res.ok) throw new Error('Erro ao buscar produtos');
  return res.json();
}


function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['post'],
    queryFn: () => fetchProducts(),
   })  
  if (isLoading) return <div>Carregando...</div>;
  if (error instanceof Error) return <div>Erro: {error.message}</div>;

 
 
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Counter> </Counter> 
       
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
}

export default App;

import { Button, Layout, Table, theme as antdTheme, Spin, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './features/themeSlice';
import { RootState } from './app/store';
import { useProdutos } from './hooks/useProdutos';

const { Header, Content } = Layout;

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const {
    token: { colorBgContainer },
  } = antdTheme.useToken();

  const { data, isLoading, isError } = useProdutos();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <div>📦 Gestão de Estoque</div>
        <Button onClick={() => dispatch(toggleTheme())}>
          Mudar para {mode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </Header>

      <Content style={{ padding: '1rem', background: colorBgContainer }}>
        <Typography.Title level={2}>Produtos</Typography.Title>

        {isLoading && <Spin />}
        {isError && <div>Erro ao carregar produtos</div>}

        {data && (
          <Table
            dataSource={data}
            rowKey="id"
            columns={[
              { title: 'Nome', dataIndex: 'nome' },
              { title: 'Descrição', dataIndex: 'descricao' },
              { title: 'Quantidade', dataIndex: 'quantidade' },
              { title: 'Preço', dataIndex: 'preco', render: (p) => `R$ ${p.toFixed(2)}` },
            ]}
          />
        )}
      </Content>
    </Layout>
  );
}

export default App;

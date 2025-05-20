"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antd_1 = require("antd");
const react_redux_1 = require("react-redux");
const themeSlice_1 = require("./features/themeSlice");
const useProdutos_1 = require("./hooks/useProdutos");
const { Header, Content } = antd_1.Layout;
function App() {
    const dispatch = (0, react_redux_1.useDispatch)();
    const mode = (0, react_redux_1.useSelector)((state) => state.theme.mode);
    const { token: { colorBgContainer }, } = antd_1.theme.useToken();
    const { data, isLoading, isError } = (0, useProdutos_1.useProdutos)();
    return (<antd_1.Layout style={{ minHeight: '100vh' }}>
      <Header style={{ color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        <div>📦 Gestão de Estoque</div>
        <antd_1.Button onClick={() => dispatch((0, themeSlice_1.toggleTheme)())}>
          Mudar para {mode === 'light' ? 'Dark' : 'Light'}
        </antd_1.Button>
      </Header>

      <Content style={{ padding: '1rem', background: colorBgContainer }}>
        <antd_1.Typography.Title level={2}>Produtos</antd_1.Typography.Title>

        {isLoading && <antd_1.Spin />}
        {isError && <div>Erro ao carregar produtos</div>}

        {data && (<antd_1.Table dataSource={data} rowKey="id" columns={[
                { title: 'Nome', dataIndex: 'nome' },
                { title: 'Descrição', dataIndex: 'descricao' },
                { title: 'Quantidade', dataIndex: 'quantidade' },
                { title: 'Preço', dataIndex: 'preco', render: (p) => `R$ ${p.toFixed(2)}` },
            ]}/>)}
      </Content>
    </antd_1.Layout>);
}
exports.default = App;
//# sourceMappingURL=App.js.map
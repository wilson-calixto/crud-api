"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
const App_1 = require("./App");
const store_1 = require("./app/store");
const react_redux_1 = require("react-redux");
const antd_1 = require("antd");
const react_query_1 = require("@tanstack/react-query");
require("antd/dist/reset.css");
const queryClient = new react_query_1.QueryClient();
const ThemedApp = () => {
    const mode = (0, react_redux_1.useSelector)((state) => state.theme.mode);
    const isDark = mode === 'dark';
    return (<antd_1.ConfigProvider theme={{
            algorithm: isDark ? antd_1.theme.darkAlgorithm : antd_1.theme.defaultAlgorithm,
        }}>
      <App_1.default />
    </antd_1.ConfigProvider>);
};
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.store}>
      <react_query_1.QueryClientProvider client={queryClient}>
        <ThemedApp />
      </react_query_1.QueryClientProvider>
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
//# sourceMappingURL=main.js.map
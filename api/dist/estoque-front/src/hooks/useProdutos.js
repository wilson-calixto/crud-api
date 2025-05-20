"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProdutos = void 0;
const react_query_1 = require("@tanstack/react-query");
const produtoApi_1 = require("../api/produtoApi");
const useProdutos = () => {
    return (0, react_query_1.useQuery)({
        queryKey: ['produtos'],
        queryFn: produtoApi_1.getProdutos,
    });
};
exports.useProdutos = useProdutos;
//# sourceMappingURL=useProdutos.js.map
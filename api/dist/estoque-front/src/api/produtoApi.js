"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProdutos = exports.api = void 0;
const axios_1 = require("axios");
exports.api = axios_1.default.create({
    baseURL: 'http://localhost:3000',
});
const getProdutos = async () => {
    const response = await exports.api.get('/produtos');
    return response.data;
};
exports.getProdutos = getProdutos;
//# sourceMappingURL=produtoApi.js.map
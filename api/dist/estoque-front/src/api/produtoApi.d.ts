export declare const api: import("axios").AxiosInstance;
export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    quantidade: number;
    preco: number;
}
export declare const getProdutos: () => Promise<Produto[]>;

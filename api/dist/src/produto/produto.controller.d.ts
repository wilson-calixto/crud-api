import { ProdutoService } from './produto.service';
export declare class ProdutoController {
    private readonly service;
    constructor(service: ProdutoService);
    findAll(): Promise<import("./produto.entity").Produto[]>;
    findOne(id: string): Promise<import("./produto.entity").Produto | null>;
    create(body: any): Promise<import("./produto.entity").Produto>;
    update(id: string, body: any): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

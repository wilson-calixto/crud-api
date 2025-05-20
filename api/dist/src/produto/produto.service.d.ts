import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
export declare class ProdutoService {
    private repo;
    constructor(repo: Repository<Produto>);
    findAll(): Promise<Produto[]>;
    findOne(id: number): Promise<Produto | null>;
    create(data: Partial<Produto>): Promise<Produto>;
    update(id: number, data: Partial<Produto>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}

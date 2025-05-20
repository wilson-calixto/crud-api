import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private repo: Repository<Produto>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  create(data: Partial<Produto>) {
    const produto = this.repo.create(data);
    return this.repo.save(produto);
  }

  update(id: number, data: Partial<Produto>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('int')
  qty: number;

  @Column('float')
  amount: number;
}

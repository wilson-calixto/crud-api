import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'estoque.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ⚠️ use apenas em dev
    }),
    ProdutoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BOOKS_CLIENT } from 'apps/bookstore-api-gateway/utils/const';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: BOOKS_CLIENT,
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}

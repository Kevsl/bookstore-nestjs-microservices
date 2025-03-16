import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_CLIENT') private bookClient: ClientProxy) {}

  findAll() {
    return this.bookClient.send('book.getAll', {});
  }
}

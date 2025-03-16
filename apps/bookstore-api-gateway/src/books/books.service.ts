import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BookDto } from './dto';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_CLIENT') private bookClient: ClientProxy) {}

  findAll() {
    return this.bookClient.send('books.getAll', {});
  }

  create(dto: BookDto) {
    return this.bookClient.send('books.create', dto);
  }
}

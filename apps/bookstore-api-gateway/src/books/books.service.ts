import { BOOK_PATTERNS } from '@app/contracts/src/books/books.patterns';
import { BookDto } from '@app/contracts/src/books/dto/book.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOKS_CLIENT') private bookClient: ClientProxy) {}

  findAll() {
    return this.bookClient.send(BOOK_PATTERNS.GET_ALL_BOOKS, {});
  }

  create(dto: BookDto) {
    return this.bookClient.send(BOOK_PATTERNS.CREATE_BOOK, dto);
  }
}

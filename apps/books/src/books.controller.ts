import { Controller } from '@nestjs/common';
import { BooksService } from './books.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BookDto } from '@app/contracts/src/books/dto';
import { BOOK_PATTERNS } from '@app/contracts/src/books/books.patterns';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern(BOOK_PATTERNS.GET_ALL_BOOKS)
  getAll() {
    return this.booksService.getAll();
  }

  @MessagePattern('books.create')
  create(@Payload() bookDto: BookDto) {
    return this.booksService.create(bookDto);
  }
}

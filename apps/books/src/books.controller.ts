import { Controller } from '@nestjs/common';
import { BooksService } from './books.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BookDto } from './dto';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern('books.getAll')
  getAll() {
    return this.booksService.getAll();
  }

  @MessagePattern('books.create')
  create(@Payload() bookDto: BookDto) {
    return this.booksService.create(bookDto);
  }
}

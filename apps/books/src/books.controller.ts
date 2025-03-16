import { Controller } from '@nestjs/common';
import { BooksService } from './books.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern('book.getAll')
  getAll() {
    return this.booksService.getAll();
  }
}

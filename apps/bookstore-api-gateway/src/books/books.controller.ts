import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Post()
  create(@Body() bookDto: BookDto) {
    return this.booksService.create(bookDto);
  }
}

import { Injectable } from '@nestjs/common';
import { bookProps } from '../utils/types';
import { BookDto } from './dto';

@Injectable()
export class BooksService {
  private books: bookProps[] = [
    {
      id: 1,
      name: 'book1',
      author: 'author1',
      price: 100,
    },
    {
      id: 2,
      name: 'book2',
      author: 'author2',
      price: 200,
    },
    {
      id: 3,
      name: 'book3',
      author: 'author3',
      price: 300,
    },
  ];

  getAll() {
    return this.books;
  }

  create(dto: BookDto) {
    this.books.push({ ...dto, id: this.books.length + 1 });
    return this.books;
  }
}

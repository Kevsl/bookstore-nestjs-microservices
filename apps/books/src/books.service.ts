import { Injectable } from '@nestjs/common';
import { BookDto } from '@app/contracts/src/books/dto';
import { bookProps } from '@app/contracts/src/books/types';

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

  create(dto: BookDto): bookProps[] {
    this.books.push({ ...dto, id: this.books.length + 1 });
    return this.books;
  }
}

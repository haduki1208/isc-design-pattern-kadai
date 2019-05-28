import MyAggregate from './MyAggregate';
import BookListIterator from './BookListIterator';
import Book from './Book';

export default class BookListAggregate implements MyAggregate<BookListIterator> {
  private list: Book[] = [];
  private numberOfStock: number = 0;

  createIterator(): BookListIterator {
    return new BookListIterator(this);
  }

  add(book: Book): void {
    this.list[this.numberOfStock] = book;
    this.numberOfStock += 1;
  }

  getAt(number: number): Book {
    return this.list[number];
  }

  getNumberOfStock(): number {
    return this.numberOfStock;
  }
}

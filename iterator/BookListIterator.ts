import MyIterator from './MyIterator';
import BookListAggregate from './BookListAggregate';
import Book from './Book';

export default class BookListIterator implements MyIterator<Book> {
  private aggregate: BookListAggregate;
  private current: number = 0;

  constructor(aggregate: BookListAggregate) {
    this.aggregate = aggregate;
  }

  first(): void {
    this.current = 0;
  }

  next(): void {
    this.current += 1;
  }

  isDone(): boolean {
    if (this.current >= this.aggregate.getNumberOfStock()) {
      return true;
    }
    return false;
  }

  getItem(): Book {
    return this.aggregate.getAt(this.current);
  }
}

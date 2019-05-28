import BookListAggregate from './BookListAggregate';
import MyIterator from './MyIterator';
import Book from './Book';

const bookListAggregate: BookListAggregate = new BookListAggregate();
const myIterator: MyIterator<Book> = bookListAggregate.createIterator();
bookListAggregate.add(new Book('改訂新版JavaScript本格入門', 3218));
bookListAggregate.add(new Book('スラスラ読める JavaScript', 1998));
bookListAggregate.add(new Book('JavaScript コードレシピ集', 3218));
bookListAggregate.add(new Book('確かな力が身につくJavaScript「超」入門', 2678));

myIterator.first();
while (!myIterator.isDone()) {
  const book: Book = myIterator.getItem();
  console.log(book.title);
  myIterator.next();
}

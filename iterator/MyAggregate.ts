export default interface MyAggregate<T> {
  createIterator(): T;
}

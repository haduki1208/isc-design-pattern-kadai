export default interface MyIterator<T> {
  first(): void;
  next(): void;
  isDone(): boolean;
  getItem(): T;
}

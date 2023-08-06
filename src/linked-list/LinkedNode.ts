export class LinkedNode<T> {
   private data: T;
   private next: LinkedNode<T> | null;
   private prev: LinkedNode<T> | null;
   constructor (data: T) {
      this.data = data;
      this.next = null;
      this.prev = null;
   } 
   setNext(next: LinkedNode<T> | null): void {
      this.next = next;
   }
   getNext(): LinkedNode<T> | null {
      return this.next;
   }
   setPrev(prev: LinkedNode<T> | null): void {
      this.prev = prev;
   }
   getPrev(): LinkedNode<T> | null {
      return this.prev;
   }
   getData(): T {
      return this.data;
   }
   setData(data: T): void {
      this.data = data;
   }
}
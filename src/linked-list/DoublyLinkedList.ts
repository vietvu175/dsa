import { LinkedNode } from "./LinkedNode";

export interface DoublyLinkedList<T> {
    clear(): void;
    getSize(): number;
    isEmpty(): boolean;
    addFirst(data: T): void;
    addLast(data: T): void;
    peekFirst(): LinkedNode<T>;
    peekLast(): LinkedNode<T>;
    removeFist(): void;
    removeLast(): void;
    print(): void;
}
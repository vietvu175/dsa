import { DefaultDoublyLinkedList } from "../linked-list/DefaultDoublyLinkedList";
import { DoublyLinkedList } from "../linked-list/DoublyLinkedList";
import { StackADT } from "./StackADT";

export class LinkedListBasedStack<T> implements StackADT<T> {
    private list: DoublyLinkedList<T> = new DefaultDoublyLinkedList<T>();
    private index: number = -1;

    public push(data: T): void {
        this.index++;
        this.list.addLast(data);
    }

    public pop(): void {
        if (this.list.isEmpty()) {
            throw new Error("Stack is empty!");
        } else {
            this.index--;
            this.list.removeLast();
        }
    }

    public top(): T {
        if (this.list.isEmpty()) {
            throw new Error("Stack is empty!");
        } else {
            return this.list.peekLast().getData();
        }
    }

    public size(): number {
        return this.index + 1;
    }
}

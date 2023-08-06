import { DefaultDoublyLinkedList } from "../linked-list/DefaultDoublyLinkedList";
import { QueueADT } from "./QueueADT";

export class LinkedListBasedQueue<T> implements QueueADT<T> {
    private queue: DefaultDoublyLinkedList<T> = new DefaultDoublyLinkedList<T>();

    public getSize(): number {
        return this.queue.getSize();
    }

    public isEmpty(): boolean {
        return this.queue.isEmpty();
    }

    public peek(): T {
        if (this.queue.isEmpty()) {
            throw new Error("Queue is empty")
        }
        return this.queue.peekFirst().getData();
    }

    public enQueue(item: T): void {
        this.queue.addLast(item);
    }

    public deQueue(): T {
        if (this.queue.isEmpty()) {
            throw new Error("Queue is empty")
        }
        const item = this.queue.peekLast().getData();
        this.queue.removeFist();
        return item;
    }

    public isFull(): boolean {
        return false;
    }
}
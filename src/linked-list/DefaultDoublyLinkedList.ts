import { DoublyLinkedList } from "./DoublyLinkedList";
import { LinkedNode } from "./LinkedNode";

export class DefaultDoublyLinkedList<T> implements DoublyLinkedList<T> {
    private head: LinkedNode<T> | null = null;
    private tail: LinkedNode<T> | null;
    private size: number;

    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    public clear(): void {
        let currentNode: LinkedNode<T> | null = this.head;
        while (currentNode !== null) {
            let nextNode: LinkedNode<T> | null = currentNode.getNext();
            currentNode.setNext(null);
            currentNode.setPrev(null);
            currentNode = nextNode;
        }
        this.head = null;
    }

    public isEmpty(): boolean {
        return this.size == 0;
    }

    public getSize(): number {
        return this.size;
    }

    public peekFirst(): LinkedNode<T> {
        if (this.head == null) {
            throw new Error("Empty linked list!");
        } else {
            return this.head;
        }
    }

    public addFirst(data: T): void {
        const node = new LinkedNode(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.head?.setPrev(node);
            node.setNext(this.head);
            this.head = node;
        }
        this.size++
    }

    public peekLast(): LinkedNode<T> {
        if (this.tail == null) {
            throw new Error("Empty linked list!");
        } else {
            return this.tail;
        }
    }

    public addLast(data: T): void {
        const node = new LinkedNode(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail?.setNext(node);
            node.setPrev(this.tail);
            this.tail = node;
        }
        this.size++
    }

    public removeFist(): void {
        if (this.isEmpty()) {
            throw new Error("Empty linked list!");
        }
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else if (this.head) {
            this.head = this.head.getPrev();
            this.head?.setPrev(null);
        }
        this.size--
    }

    public removeLast(): void {
        if (this.head == null) {
            throw new Error("Empty linked list!");
        }
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else if (this.tail) {
            this.tail = this.tail?.getPrev();
            this.tail?.setNext(null);
        }
        this.size--
    }

    public print(): void {
        let current = this.head;
        if (current !== null) {
            console.log(current.getData());
            current = current.getNext();
        }
    }
}

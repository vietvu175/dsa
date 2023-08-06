import { QueueADT } from "./QueueADT";

export class CircularArrayBasedQueue<T> implements QueueADT<T> {
    private queue: T[];
    private front: number;
    private rear: number;
    private size: number;

    constructor(capacity: number) {
        this.queue = new Array(capacity);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    public getSize(): number {
        return this.size;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }
    
    public isFull(): boolean {
        return this.size === this.queue.length;
    }

    public peek(): T {
        if (this.isEmpty()) {
            throw new Error('Queue is empty')
        }
        return this.queue[this.front]
    }

    public enQueue(item: T): void {
        if (this.isFull()) {
            throw new Error('Queue is full')
        }
        this.rear = (this.rear + 1) % this.queue.length;
        this.queue[this.rear] = item;
        this.size++
    }

    public deQueue(): T {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const item = this.queue[this.front];
        this.front = (this.front +1) % this.queue.length;
        this.size--;
        return item;
    }
}
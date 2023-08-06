export interface QueueADT<T> {
    enQueue(item: T): void;
    deQueue(): T;
    peek(): T;
    getSize(): number;
    isEmpty(): boolean;
    isFull(): boolean;
}
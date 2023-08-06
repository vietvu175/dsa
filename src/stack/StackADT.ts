export interface StackADT<T> {
    push(data: T): void;
    pop(): void;
    top(): T;
    size(): number;
}
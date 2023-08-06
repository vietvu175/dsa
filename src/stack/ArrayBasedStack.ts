import { StackADT } from "./StackADT";
export class ArrayBasedStack<T> implements StackADT<T> {
    private array: Array<T> = [];
    private index: number = -1;

    public push(data: T): void {
        this.index++;
        this.array.push(data);
    }

    public pop(): void {
        this.index--
        this.array.pop();
    }

    public top(): T {
        return this.array[this.index]
    }

    public size(): number {
        return this.index + 1;
    }
}
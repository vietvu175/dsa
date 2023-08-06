import { DefaultDoublyLinkedList } from "../linked-list/DefaultDoublyLinkedList";
import { HashTableADT } from "./HashTableADT";
import { HashTableNode } from "./HashTableNode";

export class SeparateChainingHashTable<K, V> implements HashTableADT<K, V> {
    private static DEFAULT_CAPACITY = 10;
    private static DEFAULT_LOAD_FACTOR = 0.5;
    private loadFactor: number = 0;
    private size: number = 0;
    private capacity: number = 0;
    private threshold: number = 0;

    private table: DefaultDoublyLinkedList<HashTableNode<K, V>>[] = [];

    constructor(loadFactor: number, capacity: number) {
        if (capacity < 0)
            throw new Error("Capacity can not be negative number");
        if (loadFactor <= 0)
            throw new Error("Load factor should be positive number");
        this.loadFactor = loadFactor;
        this.capacity = Math.max(
            SeparateChainingHashTable.DEFAULT_CAPACITY,
            capacity
        );
        this.threshold = Math.floor(this.capacity * loadFactor);
    }

    getSize(): number {
        return this.size;
    }
    isEmpty(): boolean {
        return this.size == 0;
    }
    hashIndexToNumber(key: number): number {
        let hash = 0;
        const strKey = String(key);
        for (let i = 0; i < strKey.length; i++) {
            hash += strKey.charCodeAt(i);
        }
        return hash % this.capacity;
    }
    clear(): void {
        this.table = [];
    }
    has(key: K): boolean {
        throw new Error("Method not implemented.");
    }
    insert(key: K, value: V): V {
        throw new Error("Method not implemented.");
    }
    get(key: K): V {
        throw new Error("Method not implemented.");
    }
    remove(key: K): V {
        throw new Error("Method not implemented.");
    }
}

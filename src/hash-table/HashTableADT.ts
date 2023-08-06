export interface HashTableADT<K, V> {
    getSize(): number;
    isEmpty(): boolean;
    hashIndexToNumber(key: number): number;
    clear(): void;
    has(key: K): boolean;
    insert(key: K, value: V): V;
    get(key: K): V;
    remove(key: K): V;
}

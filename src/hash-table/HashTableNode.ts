export class HashTableNode<K, V> {
    private key: K;
    private value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    setKey(key: K) {
        this.key = key;
    }

    getKey(): K {
        return this.key;
    }

    setValue(value: V) {
        this.value = value;
    }

    getValue(): V {
        return this.value;
    }

    toString(): string {
        return "key=" + this.key + ", value=" + this.value;
    }
}
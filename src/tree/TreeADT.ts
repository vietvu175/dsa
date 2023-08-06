export interface TreeADT<T> {
    isEmpty(): boolean;
    getSize(): number;
    getHeight(): number;
    contains(data: T): boolean;
    add(data: T): void;
    remove(data: T): void;
    traverse(type: TraverseType): T[];
}

export type TraverseType = 'PRE_ORDER' | 'IN_ORDER' | 'POST_ORDER' | 'LEVEL_ORDER';
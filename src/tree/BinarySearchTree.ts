import { TraverseType, TreeADT } from "./TreeADT";
import { TreeNode } from "./TreeNode";

export class BinarySearchTree<T> implements TreeADT<T> {
    private nodeCount = 0;
    private root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    isEmpty(): boolean {
        return this.nodeCount === 0;
    }

    getSize(): number {
        return this.nodeCount;
    }

    getHeight(): number {
        return this.height(this.root);
    }

    contains(data: T): boolean {
        return this.compareNode(this.root, data);
    }

    add(data: T): void {
        const newNode = new TreeNode(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.addNode(this.root, newNode);
        }
        this.nodeCount++;
    }

    remove(data: T): void {
        this.root = this.removeNode(this.root, data);
        this.nodeCount--
    }

    traverse(type: TraverseType): T[] {
        const result: T[] = [];
        switch (type) {
            case 'IN_ORDER':
                this.inOrderTraverse(this.root, result);
                return result;
            case 'PRE_ORDER':
                this.preOrderTraverse(this.root, result);
                return result;
            case 'POST_ORDER':
                this.postOrderTraverse(this.root, result);
                return result;
            case 'LEVEL_ORDER':
                return this.levelOrderTraverse(this.root);
        }
    }

    private height(node: TreeNode<T> | null): number {
        if (node == null) return 0;
        return (
            1 +
            Math.max(this.height(node.getLeft()), this.height(node.getRight()))
        );
    }

    private compareNode(node: TreeNode<T> | null, data: T): boolean {
        if (node == null) return false;
        if (node.getData() < data)
            return this.compareNode(node.getRight(), data);
        if (node.getData() > data)
            return this.compareNode(node.getLeft(), data);
        return true;
    }

    private addNode(
        currentNode: TreeNode<T> | null,
        newNode: TreeNode<T>
    ): void {
        if (!currentNode) return;
        if (currentNode.getData() < newNode.getData()) {
            if (!currentNode.getRight()) {
                currentNode.setRight(newNode);
            } else {
                this.addNode(currentNode.getRight(), newNode);
            }
        }
        if (currentNode.getData() > newNode.getData()) {
            if (!currentNode.getLeft()) {
                currentNode.setLeft(newNode);
            } else {
                this.addNode(currentNode.getLeft(), newNode);
            }
        }
    }

    private removeNode(
        root: TreeNode<T> | null,
        data: T
    ): TreeNode<T> | null {
        if (!root) return null;
        if (root.getData() < data) {
            root.setRight(this.removeNode(root.getRight(), data));
        } else if (root.getData() > data) {
            root.setLeft(this.removeNode(root.getLeft(), data));
        } else {
            if (!root.getLeft()) {
                return root.getRight();
            } else if (!root.getRight()) {
                return root.getLeft();
            }

            root.setData(this.findMinValue(root.getRight() as TreeNode<T>));
            root.setRight(this.removeNode(root.getRight(), root.getData()));
        }
        return root;
    }

    private findMinValue(root: TreeNode<T>): T {
        while (root.getLeft()) {
            root = root.getLeft() as TreeNode<T>;
        }
        return root.getData();
    }

    private inOrderTraverse(root: TreeNode<T> | null, result: T[]): void {
        if (root) {
            this.inOrderTraverse(root.getLeft(), result);
            result.push(root?.getData());
            this.inOrderTraverse(root.getRight(), result);
        }
    }
    private preOrderTraverse(root: TreeNode<T> | null, result: T[]): void {
        if (root) {
            result.push(root?.getData());
            this.preOrderTraverse(root.getLeft(), result);
            this.preOrderTraverse(root.getRight(), result);
        }
    }
    private postOrderTraverse(root: TreeNode<T> | null, result: T[]): void {
        if (root) {
            this.postOrderTraverse(root.getRight(), result);
            result.push(root?.getData());
            this.postOrderTraverse(root.getLeft(), result);
        }
    }
    private levelOrderTraverse(root: TreeNode<T> | null): T[] {
        const result: T[] = [];
        return result;
    }
}

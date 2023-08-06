export class TreeNode<T> {
    private data: T;
    private right: TreeNode<T> | null;
    private left: TreeNode<T> | null;
    constructor (data: T) {
       this.data = data;
       this.right = null;
       this.left = null;
    } 
    setRight(right: TreeNode<T> | null): void {
       this.right = right;
    }
    getRight(): TreeNode<T> | null {
       return this.right;
    }
    setLeft(left: TreeNode<T> | null): void {
       this.left = left;
    }
    getLeft(): TreeNode<T> | null {
       return this.left;
    }
    getData(): T {
       return this.data;
    }
    setData(data: T): void {
       this.data = data;
    }
 }
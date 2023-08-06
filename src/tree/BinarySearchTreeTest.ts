import { BinarySearchTree } from "./BinarySearchTree";

export class BinarySearchTreeTest {
    public main() {
        const bst = new BinarySearchTree();

        bst.add(5)
        bst.add(4)
        bst.add(6)
        bst.add(7)
        bst.add(2)
        bst.add(3)
        bst.add(10)

        const traverse = bst.traverse('PRE_ORDER');
        const height = bst.getHeight();

        console.log(traverse, height);
    }
}
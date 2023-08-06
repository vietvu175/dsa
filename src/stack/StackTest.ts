import { ArrayBasedStack } from "./ArrayBasedStack";
import { LinkedListBasedStack } from "./LinkedListBasedStack";
const numberOfOperations = 10000000;
const arrayBasedStack = new ArrayBasedStack<number>();

export class StackTest {
    public main() {
        let startTime = Date.now();
        
        for (let i = 0; i < numberOfOperations; i++) {
            arrayBasedStack.push(i);
        }
        for (let i = 0; i < numberOfOperations; i++) {
            arrayBasedStack.pop();
        }
        
        let endTime = Date.now();
        
        console.log("Array based stack took: " + (endTime - startTime) + "\n");
        
        const linkedListBasedStack = new LinkedListBasedStack<number>();
        
        startTime = Date.now();
        
        for (let i = 0; i < numberOfOperations; i++) {
            linkedListBasedStack.push(i);
        }
        for (let i = 0; i < numberOfOperations; i++) {
            linkedListBasedStack.pop();
        }
        
        endTime = Date.now();
        
        console.log("Linked list based stack took: " + (endTime - startTime) + "\n");
    }
}

import { CircularArrayBasedQueue } from "./CircularArrayBasedQueue";
import { LinkedListBasedQueue } from "./LinkedListBasedQueue";
const numberOfOperations = 10000000;

export class QueueTest {
    public main() {
        let startTime = Date.now();
        const arrayBasedQueue = new CircularArrayBasedQueue<number>(numberOfOperations);
        
        for (let i = 0; i < numberOfOperations; i++) {
            arrayBasedQueue.enQueue(i);
        }
        for (let i = 0; i < numberOfOperations; i++) {
            arrayBasedQueue.deQueue();
        }
        
        let endTime = Date.now();
        
        console.log("Array based queue took: " + (endTime - startTime) + "\n");
        
        const linkedListBasedQueue = new LinkedListBasedQueue<number>();
        
        startTime = Date.now();
        
        for (let i = 0; i < numberOfOperations; i++) {
            linkedListBasedQueue.enQueue(i);
        }

        for (let i = 0; i < numberOfOperations; i++) {
            linkedListBasedQueue.deQueue();
        }
        
        endTime = Date.now();
        
        console.log("Linked list based queue took: " + (endTime - startTime) + "\n");
    }
}

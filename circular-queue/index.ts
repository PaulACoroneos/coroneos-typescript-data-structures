export class CircularQueue {
  queue: any[];
  front: number;
  rear: number;
  size: number;

  constructor(queue: any[] = [], size = 1) {
      this.queue = queue;
      this.front = -1;
      this.rear = -1;
      this.size = size;
  }

  enqueue(val: any) {
      if(this.isFull()) return undefined;
  }

  dequeue() {
      return undefined;
  }

  isFull() {
      return this.rear === this.size-1;
  }
}
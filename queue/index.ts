export class Queue {
  queue: any[]
  size: number;
  constructor() {
      this.queue = [];
      this.size = 0;
  }

  enqueue(val: any) {
      this.queue.push(val);
      this.size++;
  }

  dequeue() {
      this.size--;
      return this.queue.shift();
  }

  isEmpty() {
      return this.size === 0;
  }

  isFull() {
      //Doesnt make sense in JS but may implement later
      console.log("not implemented");
      return undefined;
  }

  peek() {
      return this.queue[0];
  }
}
export class Stack {
  stack: any[]
  constructor() {
    this.stack = [];
  }

  push(val: any) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  peek() {
      return this.stack[0];
  }

}
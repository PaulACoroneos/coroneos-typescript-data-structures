import { Stack } from ".";

describe('stack()', () => {
  it('initializes as an empty stack', () => {
    const stack = new Stack();
    expect(stack.stack).toStrictEqual([]);
  })
  it('Check isEmpty',() => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push("hi");
    expect(stack.isEmpty()).toBe(false);
    expect(stack.stack).toStrictEqual(["hi"]);
  })
  it('Check peek',() => {
    const stack = new Stack();
    expect(stack.peek()).toBe(undefined);
    stack.push("hi");
    expect(stack.peek()).toBe("hi");
  })
  it('Check pop',() => {
    const stack = new Stack();
    expect(stack.peek()).toBe(undefined);
    stack.push("hi");
    expect(stack.peek()).toBe("hi");
    expect(stack.pop()).toBe("hi");
    expect(stack.isEmpty()).toBe(true);
    
  })
})
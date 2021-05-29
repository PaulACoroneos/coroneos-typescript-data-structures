import { Queue } from ".";

describe("Queue()", () => {
    it("initializes as an empty queue", () => {
        const queue = new Queue();
        expect(queue.queue).toStrictEqual([]);
    });
    it("Check isEmpty",() => {
        const queue = new Queue();
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue("hi");
        expect(queue.isEmpty()).toBe(false);
        expect(queue.queue).toStrictEqual(["hi"]);
    });
    it("Check peek",() => {
        const queue = new Queue();
        expect(queue.peek()).toBe(undefined);
        queue.enqueue("hi");
        expect(queue.peek()).toBe("hi");
    });
    it("Check dequeue",() => {
        const queue = new Queue();
        expect(queue.peek()).toBe(undefined);
        queue.enqueue("hi");
        queue.enqueue("hello");
        expect(queue.peek()).toBe("hi");
        expect(queue.dequeue()).toBe("hi");
        expect(queue.isEmpty()).toBe(false);
    });
});
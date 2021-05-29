import { Node } from ".";

describe("Node()",() => {
    it("Node initializes by default", () => {
        const node2 = new Node(5);
        expect(node2.data).toBe(5);
        expect(node2.left).toBe(null);
        expect(node2.right).toBe(null);
    });
});
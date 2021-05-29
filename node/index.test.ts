import { Node } from ".";

describe("Node()",() => {
    it("Node initializes by default", () => {
        const node = new Node();
        expect(node.data).toBe(null);
        const node2 = new Node(5);
        expect(node2.data).toBe(5);
    });
});
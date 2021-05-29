import { BinaryTree } from ".";
import { Node } from "../node";

describe("BinaryTree()",() => {
    it("Binary Tree initializes by default", () => {
        const binaryTree = new BinaryTree();
        expect(binaryTree.node).toBe(null);
        expect(binaryTree.left).toBe(null);
        expect(binaryTree.right).toBe(null);

        const binaryTree2 = new BinaryTree(new Node(5));
        expect(binaryTree2.node?.data).toBe(5);
        expect(binaryTree2.left).toBe(null);
        expect(binaryTree2.right).toBe(null);
    });
});
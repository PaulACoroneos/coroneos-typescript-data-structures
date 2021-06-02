import { BinaryTree } from ".";
import { Node } from "../node";

describe("BinaryTree()",() => {
    it("Binary Tree initializes by default", () => {
        const binaryTree = new BinaryTree();
        console.log(binaryTree);
        expect(binaryTree.root).toBe(null);

        const binaryTree2 = new BinaryTree(new Node(5));
        expect(binaryTree2.root?.data).toBe(5);
        expect(binaryTree2.root?.left).toBe(null);
        expect(binaryTree2.root?.right).toBe(null);
    });
    it("handles insertion operations", () => {
        const binaryTree = new BinaryTree();
        binaryTree.insert(5);
        expect(binaryTree.root).toMatchObject({data:5,left:null,right:null});
        binaryTree.insert(4);
        expect(binaryTree.root?.left).toMatchObject({data:4,left:null,right:null});
        binaryTree.insert(6);
        expect(binaryTree.root?.right).toMatchObject({data:6,left:null,right:null});
        binaryTree.insert(8);
        expect(binaryTree.root?.right?.right).toMatchObject({data:8,left:null,right:null});
        binaryTree.insert(7);
        expect(binaryTree.root?.right?.right?.left).toMatchObject({data:7,left:null,right:null});
    });
    it("handles preorder traversal iteratively", () => {
        const binaryTree = new BinaryTree();
        expect(binaryTree.preorderTraversal(binaryTree.root,"iterative")).toStrictEqual([]);
        binaryTree.insert(5);
        expect(binaryTree.preorderTraversal(binaryTree.root,"iterative")).toStrictEqual([5]);
        binaryTree.insert(1);
        expect(binaryTree.preorderTraversal(binaryTree.root,"iterative")).toStrictEqual([5,1]);
        binaryTree.insert(4);
        expect(binaryTree.preorderTraversal(binaryTree.root,"iterative")).toStrictEqual([5,1,4]);
        binaryTree.insert(8);
        expect(binaryTree.preorderTraversal(binaryTree.root,"iterative")).toStrictEqual([5,1,4,8]);
    });
    it.skip("handles preorder traversal recursively", () => {
        //TODO
    });
    it("handles inorder traversal iteratively", () => {
        const binaryTree = new BinaryTree();
        expect(binaryTree.inorderTraversal(binaryTree.root,"iterative")).toStrictEqual([]);
        binaryTree.insert(5);
        expect(binaryTree.inorderTraversal(binaryTree.root,"iterative")).toStrictEqual([5]);
        binaryTree.insert(1);
        expect(binaryTree.inorderTraversal(binaryTree.root,"iterative")).toStrictEqual([1,5]);
        binaryTree.insert(4);
        expect(binaryTree.inorderTraversal(binaryTree.root,"iterative")).toStrictEqual([1,4,5]);
        binaryTree.insert(8);
        expect(binaryTree.inorderTraversal(binaryTree.root,"iterative")).toStrictEqual([1,4,5,8]);
    });
    it.skip("handles inorder traversal recursively", () => {
        //TODO
    });
});
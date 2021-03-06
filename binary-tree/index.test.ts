import { BinaryTree } from ".";
import { Node } from "../node";

describe("BinaryTree()",() => {
    it("Binary Tree initializes by default", () => {
        const binaryTree = new BinaryTree();
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
    it("handles preorder traversal recursively", () => {
        const binaryTree = new BinaryTree();
        expect(binaryTree.preorderTraversal(binaryTree.root,"recursive")).toStrictEqual([]);
        binaryTree.insert(5);
        expect(binaryTree.preorderTraversal(binaryTree.root,"recursive")).toStrictEqual([5]);
        binaryTree.insert(1);
        expect(binaryTree.preorderTraversal(binaryTree.root,"recursive")).toStrictEqual([5,1]);
        binaryTree.insert(4);
        expect(binaryTree.preorderTraversal(binaryTree.root,"recursive")).toStrictEqual([5,1,4]);
        binaryTree.insert(8);
        expect(binaryTree.preorderTraversal(binaryTree.root,"recursive")).toStrictEqual([5,1,4,8]);
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
    it("handles inorder traversal recursively", () => {
        const binaryTree = new BinaryTree();
        expect(binaryTree.inorderTraversal(binaryTree.root,"recursive")).toStrictEqual([]);
        binaryTree.insert(5);
        expect(binaryTree.inorderTraversal(binaryTree.root,"recursive")).toStrictEqual([5]);
        binaryTree.insert(1);
        expect(binaryTree.inorderTraversal(binaryTree.root,"recursive")).toStrictEqual([1,5]);
        binaryTree.insert(4);
        expect(binaryTree.inorderTraversal(binaryTree.root,"recursive")).toStrictEqual([1,4,5]);
        binaryTree.insert(8);
        expect(binaryTree.inorderTraversal(binaryTree.root,"recursive")).toStrictEqual([1,4,5,8]);
    });
    it.skip("handles inorder traversal iteratively", () => {
        //TODO
    });
    it("handles postorder traversal recursively", () => {
        const binaryTree = new BinaryTree();
        expect(binaryTree.postorderTraversal(binaryTree.root,"recursive")).toStrictEqual([]);
        binaryTree.insert(5);
        expect(binaryTree.postorderTraversal(binaryTree.root,"recursive")).toStrictEqual([5]);
        binaryTree.insert(1);
        expect(binaryTree.postorderTraversal(binaryTree.root,"recursive")).toStrictEqual([1,5]);
        binaryTree.insert(4);
        expect(binaryTree.postorderTraversal(binaryTree.root,"recursive")).toStrictEqual([4,1,5]);
        binaryTree.insert(8);
        expect(binaryTree.postorderTraversal(binaryTree.root,"recursive")).toStrictEqual([4,1,8,5]);
    });
    it("handles levelorder traversal", () => {
        const binaryTree = new BinaryTree();
        expect(binaryTree.levelorderTraversal(binaryTree.root)).toStrictEqual([]);
        binaryTree.insert(5);
        expect(binaryTree.levelorderTraversal(binaryTree.root)).toStrictEqual([[5]]);
        binaryTree.insert(1);
        expect(binaryTree.levelorderTraversal(binaryTree.root)).toStrictEqual([[5],[1]]);
        binaryTree.insert(4);
        expect(binaryTree.levelorderTraversal(binaryTree.root)).toStrictEqual([[5],[1],[4]]);
        binaryTree.insert(8);
        expect(binaryTree.levelorderTraversal(binaryTree.root)).toStrictEqual([[5],[1,8],[4]]);
    });
    it("handles maxdepth() dfs", () => {
        const binaryTree = new BinaryTree();
        expect(binaryTree.maxDepth(binaryTree.root)).toBe(0);
        binaryTree.insert(1);
        expect(binaryTree.maxDepth(binaryTree.root)).toBe(1);
        binaryTree.insert(5);
        expect(binaryTree.maxDepth(binaryTree.root)).toBe(2);
        binaryTree.insert(2);
        expect(binaryTree.maxDepth(binaryTree.root)).toBe(3);
        binaryTree.insert(3);
        expect(binaryTree.maxDepth(binaryTree.root)).toBe(4);
        binaryTree.insert(6);
        expect(binaryTree.maxDepth(binaryTree.root)).toBe(4);
        binaryTree.insert(7);
        expect(binaryTree.maxDepth(binaryTree.root)).toBe(4);
    });
    it("handles isSymmetric()", () => {
        const binaryTree = new BinaryTree();
        expect(binaryTree.isSymmetric(binaryTree.root)).toBe(true);
        binaryTree.insert(1);
        expect(binaryTree.isSymmetric(binaryTree.root)).toBe(true);
        binaryTree.insert(5);
        expect(binaryTree.isSymmetric(binaryTree.root)).toBe(false);
        (binaryTree.root as Node).left = new Node(5);
        expect(binaryTree.isSymmetric(binaryTree.root)).toBe(true);
        ((binaryTree.root as Node).left as Node).left = new Node(6);
        ((binaryTree.root as Node).right as Node).left = new Node(6);
        expect(binaryTree.isSymmetric(binaryTree.root)).toBe(false);
    });
    it("handles haspathSum()", () => {
        const binaryTree = new BinaryTree();
        expect(binaryTree.hasPathSum(binaryTree.root,10)).toBe(false);
        binaryTree.insert(1);
        expect(binaryTree.hasPathSum(binaryTree.root,10)).toBe(false);
        binaryTree.insert(9);
        expect(binaryTree.hasPathSum(binaryTree.root,10)).toBe(true);
        binaryTree.insert(11);
        expect(binaryTree.hasPathSum(binaryTree.root,10)).toBe(false);
    });
});
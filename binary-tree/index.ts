import { Node } from "../node";

export class BinaryTree {
    root: Node | null;

    constructor(root: Node | null = null) {
        this.root = root;
    }

    public insert(val: number) {
        const insertFn = (node: Node | null, val: number) => {
            //Scenario 1: Base case root is null
            if (node == null) {
                node = new Node(val);
            }

            //Scenario 2: value is greater than right node
            else if (val > node?.data) {
                node.right = insertFn(node?.right, val);
            }
            //scenario 3: value is less than right node
            else {
                node.left = insertFn(node?.left, val);
            }

            return node;
        };

        this.root = insertFn(this.root, val);
    }

    public preorderTraversal(node: Node | null, type: "recursive" | "iterative") {
        const arr: Node["data"][] = [];

        if (node == null) {
            return arr;
        }

        const stack: Node[] = [];

        if (type === "iterative") {
            stack.push(node);

            while (stack.length) {
                const node = stack.pop() as Node;
                arr.push(node.data);
                if (node?.right) stack.push(node.right);
                if (node?.left) stack.push(node.left);
            }
        }

        else {
            const recursivePreorder = (node: Node | null, arr: number[] = []) => {
                //base case. Root is null
                if (!node) return arr;

                arr.push(node.data);
                if (node.left) recursivePreorder(node.left, arr);
                if (node.right) recursivePreorder(node.right, arr);
                return arr;
            };

            return recursivePreorder(node);
        }

        return arr;
    }

    public inorderTraversal(node: Node | null, type: "recursive" | "iterative") {
        const arr: Node["data"][] = [];

        if (node == null) {
            return arr;
        }

        const stack: Node[] = [];

        if (type === "iterative") {
            let curr: Node | null = node;
            while (stack.length || curr) {
                //traverse until we find the left most node
                if (curr) {
                    stack.push(curr);
                    curr = curr.left;
                }
                //we found left most node. pop,print and move right
                else {
                    curr = stack.pop() as Node;
                    arr.push(curr.data);
                    curr = curr.right;
                }
            }
        }
        else {
            //TODO recursively
        }

        return arr;
    }
}
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

        if (type === "iterative") {
            const stack: Node[] = [];
            stack.push(node);

            while (stack.length) {
                const node = stack.pop() as Node;
                arr.push(node.data);
                if (node?.right) stack.push(node.right);
                if (node?.left) stack.push(node.left);
            }
        }

        else {
            //TODO Recursive
        }

        return arr;
    }
}
import { Node } from "../node";

export class BinaryTree {
    root: Node | null;

    constructor(root: Node | null = null) {
        this.root = root;
    }

    public insert(val: number): void {
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

    public preorderTraversal(node: Node | null, type: "recursive" | "iterative"): number[] {
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

    public inorderTraversal(node: Node | null, type: "recursive" | "iterative"): number[] {
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
            const recursiveInorder = (node: Node | null, arr: number[] = []) => {
                if (node == null) return arr;

                if (node.left) recursiveInorder(node.left, arr);
                arr.push(node.data);
                if (node.right) recursiveInorder(node.right, arr);

                return arr;
            };

            return recursiveInorder(node);
        }

        return arr;
    }

    public postorderTraversal(node: Node | null, type: "iterative" | "recursive"): number[] {
        if (type === "iterative") {
            //TODO implement
            return [];
        }
        else {
            const recursivePostorder = (node: Node | null, arr: number[] = []) => {
                if (node == null) return arr;

                if (node.left) recursivePostorder(node.left, arr);
                if (node.right) recursivePostorder(node.right, arr);
                arr.push(node.data);
                return arr;
            };
            return recursivePostorder(node);
        }
    }

    public levelorderTraversal(node: Node | null): number[][] {
        const arr: number[][] = [];
        const queue = [];
        
        //base case
        if(node == null) return arr;
        
        queue.push(node);
        while(queue.length) {
            const size = queue.length;
            const subArr: number[] = [];
            for(let i =0; i < size; i++) {
                const node = queue.shift() as Node;
                if(node?.left) queue.push(node.left);
                if(node?.right) queue.push(node.right);
                subArr.push(node.data);
            }
            arr.push(subArr);
        }
        
        return arr;
    }

    public maxDepth(node: Node | null, method: "bfs" | "dfs"= "dfs"): number {
        if(node == null) return 0;

        const leftHeight = this.maxDepth(node.left,method);
        const rightHeight = this.maxDepth(node.right,method);
        
        return Math.max(leftHeight,rightHeight) +1;
    }
}
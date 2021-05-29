import { Node} from "../node";

export class BinaryTree {
  node: Node | null;
  left:  Node | null
  right:  Node | null

  constructor(node:Node|null = null) {
      this.node = node;
      this.left = null;
      this.right = null;
  }
}
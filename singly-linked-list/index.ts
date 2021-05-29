class LinkNode {
value: number | null;
next: LinkNode | null;

constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
}

}

class MyLinkedList {
head: LinkNode | null;
size: number;

constructor() {
    this.head = null;
    this.size = 0;
}

get(index: number) {
    if (index < 0 || index > this.size - 1) return -1;
    let node = this.head;
    while (index > 0) {
        node = node.next;
        index--;
    }
    return node?.value;
}

addAtHead(val: number): void {
    this.addAtIndex(0, val);
}

addAtTail(val: number): void {
    this.addAtIndex(this.size, val);
}

getNode(index: number) {
    let node = this.head;
    while (index > 0) {
        if (node === null) {
            return null;
        }
        node = node.next;
        index--;
    }
    return node;
}

addAtIndex(index: number, val: number): void {
    if (index > this.size) return;

    const newNode = new LinkNode(val);
    //adding at head
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
    }
    //else add somewhere else
    else {
        const node = this.getNode(index - 1);
        newNode.next = node?.next || null;
        node.next = newNode;
    }
    this.size++;
}

deleteAtIndex(index: number): void {
    if (index > this.size - 1 || index < 0) return;
    //deleting at head
    if (index === 0) {
        this.head = this.head.next;
    }
    else {
        const node = this.getNode(index - 1);
        node.next = node.next?.next || null;
    }
    this.size--;
}
}


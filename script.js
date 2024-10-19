//Linked List
//Create Node class

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addHead(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    addTail(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.addHead(val);
        }
        else {
            let curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = newNode;
            this.size++;
        }
    }
    addNode(val) {
        if (this.size == 0) return this.addHead(val);
        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = new Node(val);
        this.size++;
    }
    removeHead() {
        if (this.size == 0) return;
        let nxt = this.head.next;
        this.head = nxt;
        this.size--;
    }
    deleteNode(val) {
        let curr = this.head;
        if (this.head.val == val) this.removeHead();
        else {
            let prev;
            while (curr != null && curr.data != val) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
            this.size--;
            return curr ? curr.data : -1;
        }
    }
    findNode(val) {
        let curr = this.head;
        while (curr != null && curr.data != val) {
            curr = curr.next;
        }
        return curr ? curr.data : -1;
    }
    reverseNodes() {
        let prev = null;
        let curr = this.head;
        let nxt = null;
        while (curr != null) {
            nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        this.head = prev;
    }
    isEmpty() {
        return this.size == 0;
    }
    printNodes() {
        let curr = this.head;
        while (curr != null) {
            console.log(curr.data + "=>")
            curr = curr.next;
        }
        console.log("*************")
    }
}

let ll = new LL(0);

ll.addHead(2);
ll.addTail(5);
ll.addNode(10);
ll.printNodes();
ll.isEmpty();
ll.removeHead();
ll.reverseNodes();
ll.printNodes()
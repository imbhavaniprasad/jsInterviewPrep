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
    reverseNodes(start = this.head) {
        let prev = null;
        let curr = start;
        let nxt = null;
        while (curr != null) {
            nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        //this.head = prev;
        return prev;
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
    reverseHelper(start, k) {
        let prev = null;
        let curr = start
        let nxt = null;
        let tempK = 0;
        while (curr != null && tempK++ != k) {
            nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        return { prev, curr };
    }
    reverseKNodes(k) {
        let temp = new Node(-1);
        let ans = temp;
        let currHead = this.head;
        let n = Math.floor(this.size / k);
        for (let i = 0; i < n; i++) {
            const { prev, curr } = this.reverseHelper(currHead, k);
            temp.next = prev;
            temp = currHead;
            currHead.next = curr;
            currHead = curr;
        }
        this.head = ans.next;
    }
    findMid() {
        let slow = this.head;
        let fast = this.head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    rearrangeNodes() {
        if (!this.head || !this.head.next) return;

        let mid = this.findMid();
        let secondHalf = this.reverseNodes(mid.next);
        if (!secondHalf) return;
        mid.next = null;

        // Now merge the two halves
        let firstHalf = this.head;
        let temp = new Node(-1); // Dummy node to start the merged list
        let ans = temp;

        while (firstHalf !== null && secondHalf !== null) {
            temp.next = firstHalf;
            firstHalf = firstHalf.next;
            temp = temp.next;

            temp.next = secondHalf;
            secondHalf = secondHalf.next;
            temp = temp.next;
        }

        // If there are remaining nodes in either half, attach them
        if (firstHalf !== null) {
            temp.next = firstHalf;
        } else if (secondHalf !== null) {
            temp.next = secondHalf;
        }

        this.head = ans.next; // Update the head of the list
    }

}

let ll = new LL(0);

// ll.addHead(5);
// ll.addTail(5);
ll.addNode(1);
ll.addNode(2);
ll.addNode(3);
ll.addNode(4);
ll.addNode(5);
ll.printNodes();
// ll.isEmpty();
// ll.removeHead();
// ll.reverseNodes();
//ll.reverseKNodes(4);
ll.rearrangeNodes()
ll.printNodes();
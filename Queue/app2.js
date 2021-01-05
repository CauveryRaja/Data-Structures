// Linked list Impl
let head;
let front = 0, back = -1;

function Node(data, next) {
    this.data = data;
    this.next = next;
}

function enQueue(num) {
    console.log(head);
    if(!head) {
        head = new Node(num,null);
        back++;
    }
    else {
        let currNode = head;
        while(currNode.next!=null) {
            currNode = currNode.next;
        }
        // If currNode.next is null, then its last
        let node = new Node(num, null);
        currNode.next = node;
        back++;
    }
    displayQueue();
}

function deQueue() {
    if(head) {
        head = head.next;
        back--;
    }
    displayQueue();
}

function displayQueue() {
    document.getElementById('queue').textContent = JSON.stringify(head);
    document.getElementById('front').textContent = front;
    document.getElementById('back').textContent = back;
}

function isEmpty() {
    return back==-1;
}

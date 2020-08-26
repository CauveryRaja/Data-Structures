class BinaryHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    insert(num) {
        num = parseInt(num);
        this.size = this.heap.push(num);
        this.swim(this.size-1);
        this.displayPQ();
    }

    remove(num) {
        num = parseInt(num);
        let index = this.heap.indexOf(num);
        if(index != -1) {
            this.swap(index, this.size-1);
            this.heap.pop();
            this.size--;
            this.sink(index);
        }
        else {
            throw `Cannot find element ${num} in heap`;
        }
        this.displayPQ();
    }

    swim(index) {
        let parentIndex;
        parentIndex = Math.ceil(index/2)-1;
        console.log(this.compare(parentIndex, index));
        while(this.compare(parentIndex, index) === 1) {
            this.swap(parentIndex,index);
            index = parentIndex;
            parentIndex = Math.ceil(parentIndex/2)-1;
        }
    }

    sink(index) {
        let leftChild, rightChild, selectedIndex;
        leftChild = 2*index +1;
        rightChild = 2*index +2;
        if(this.heap[leftChild] && this.heap[rightChild]) {
            selectedIndex = this.compare(leftChild, rightChild) <=0 ?
                                        leftChild: rightChild;
        }
        else {
            selectedIndex = this.heap[leftChild] ? this.heap[leftChild] : this.heap[rightChild];
        }
        while(this.compare(index, selectedIndex) === 1) {
            this.swap(index, selectedIndex);
            index = selectedIndex;
            if(this.heap[leftChild] && this.heap[rightChild]) {
                selectedIndex = this.compare(leftChild, rightChild) <=0 ?
                                            leftChild: rightChild;
            }
            else {
                selectedIndex = this.heap[leftChild] ? this.heap[leftChild] : this.heap[rightChild];
            }
        }
    }

    heapify() {
        for(let i=Math.ceil(this.size/2)-1; i>=0; i++) {
            this.sink(i);
        }
    }

    compare(i, j) {
        console.log(i, j, this.heap[i], this.heap[j]);
        if(i<0 || j<0)
            return;
        return Math.sign(this.heap[i] - this.heap[j]);
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    displayPQ() {
        document.getElementById('PQ').textContent = this.heap.toString();
    }
}
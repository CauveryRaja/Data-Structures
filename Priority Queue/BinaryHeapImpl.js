class PriorityQueue {
    constructor() {
        // Priorities will be stored here
        this.heap = [];
        // Data will be stored here
        this.queue = [];
        this.size = 0;
    }

    /**
     * Inserts new element and priority to the Queue
     * @param {*} num Represents the Priority of entered element, must be a number
     * @param {*} data Actual data to be inserted, this can be of any type
     */
    insert(num, data) {
        num = parseInt(num);
        this.size = this.heap.push(num);
        this.queue.push(data);
        this.swim(this.size-1);
        this.displayPQ();
    }

    /**
     * Removes element from the Queue
     * @param {*} data Element to be removed
     */
    remove(data) {
        // num = parseInt(data);
        let index = this.queue.indexOf(data);
        if(index != -1) {
            this.swap(index, this.size-1);
            this.heap.pop();
            this.queue.pop();
            this.size--;
            this.sink(index);
        }
        else {
            throw `Cannot find element ${data} in Queue`;
        }
        this.displayPQ();
    }

    /**
     * Bubbles up the current element if Heap invariant is not satisfied
     * @param {*} index Position of element to be checked
     */
    swim(index) {
        let parentIndex;
        parentIndex = Math.ceil(index/2)-1;
        while(this.compare(parentIndex, index) === 1) {
            this.swap(parentIndex,index);
            index = parentIndex;
            parentIndex = Math.ceil(parentIndex/2)-1;
        }
    }

    /**
     * Bubbles down the current element if Heap invariant is not satisfied
     * @param {*} index Position of element to be checked
     */
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

    /**
     * Constructs Heap from a binary tree in Linear time - O(n) 
     */
    heapify() {
        for(let i=Math.ceil(this.size/2)-1; i>=0; i++) {
            this.sink(i);
        }
    }

    /**
     * Comparator function used for comparing two priorities.
     * Min heap can be easily converted to Max heap by easily updating conditions here
     * @param {*} i Position 1
     * @param {*} j Position 2
     */
    compare(i, j) {
        console.log(i, j, this.heap[i], this.heap[j]);
        if(i<0 || j<0)
            return;
        return Math.sign(this.heap[i] - this.heap[j]);
    }

    /**
     * Swaps priorities and elements from the given indices
     * @param {*} i Position 1
     * @param {*} j Position 2
     */
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]]
    }

    /**
     * Updates Value to the template
     */
    displayPQ() {
        document.getElementById('PQ').textContent = this.queue.toString();
        document.getElementById('priority').textContent = this.heap.toString();
    }
}
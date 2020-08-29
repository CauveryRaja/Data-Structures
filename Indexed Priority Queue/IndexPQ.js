class IndexedPriorityQueue {
    constructor() {
        // Priorities will be stored here
        this.heap = [];
        // Stores Keys and their respective indices
        this.keyMap = {};
        // Indices represent Key indices, values are keys
        this.invKeyMap = [];
        // Actual Key and Data will be stored here
        this.keyValueMap = {};
        this.size = 0;
    }

    /**
     * Inserts new element and priority to the Queue
     * @param {*} num Represents the Priority of entered element, must be a number
     * @param {*} data Actual data to be inserted, this can be of any type
     */
    insert(num, key, data) {
        num = parseInt(num);
        this.size = this.heap.push(num);
        this.keyValueMap[key] = data;
        let insertedIndex = this.size-1;
        this.keyMap[key] = insertedIndex;
        this.invKeyMap[insertedIndex] = key;
        // this.invKeyMap[num] ? this.invMap[num].push(insertedIndex) : this.invMap[num] = [];
        this.swim(insertedIndex);
        this.displayPQ();
    }

    /**
     * Removes element from the Queue
     * @param {*} data Element to be removed
     */
    remove(key) {
        let index = this.keyMap[key];
        if(index != -1) {
            this.swap(index, this.size-1);
            this.heap.pop();
            this.invKeyMap.pop();
            delete this.keyMap[key];
            delete this.keyValueMap[key];
            this.size--;
            this.sink(index);
        }
        else {
            throw `Cannot find element ${data} in Queue`;
        }
        this.displayPQ();
    }

    /**
     * Removes root element from the PQ
     */
    poll() {
        let index = 0;
        this.swap(index, this.size-1);
        this.heap.pop();
        let key = this.invKeyMap.pop();
        delete this.keyMap[key];
        delete this.keyValueMap[key];
        this.size--;
        this.sink(index);
        this.displayPQ();
    }

    /**
     * Increases Priority of element by 1
     * @param {} key Identifies the element whose priority has to be updated
     */
    increaseKey(key) {
        this.heap[this.keyMap[key]]++;
        this.displayPQ();
    }

    /**
     * Increases Priority of element by 1
     * @param {} key Identifies the element whose priority has to be updated
     */
    decreaseKey(key) {
        this.heap[this.keyMap[key]]--;
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
        [this.invKeyMap[i], this.invKeyMap[j]] = [this.invKeyMap[j], this.invKeyMap[i]];
        this.keyMap[this.invKeyMap[i]] = i;
        this.keyMap[this.invKeyMap[j]] = j;
    }
}
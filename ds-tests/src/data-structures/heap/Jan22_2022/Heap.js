class Heap {
    constructor(data) {
        this.arr = data ? data : [];
        this.length = data ? data.length : 0;
    }

    insert(data) {
        this.arr.push(data);
        this.swim(this.length);
        this.length++;
    }

    swim(index) {
        let parentIndex = Math.ceil(index/2)-1;
        if(this.arr[parentIndex] > this.arr[index]) {
            this.swap(index, parentIndex);
            this.swim(parentIndex);
        }
    }

    delete() {
        this.swap(0, this.length-1);
        let min = this.arr.pop();
        this.sink(0);
        this.length--;
        return min;
    }

    sink(index) {
        let leftChild, rightChild, minChild;
        leftChild = 2*index + 1;
        rightChild = 2*index + 2;

        minChild = this.arr[leftChild] && this.arr[rightChild] 
                    && this.arr[leftChild] > this.arr[rightChild] ? rightChild : leftChild;

        if(this.arr[index] > this.arr[minChild]) {
            this.swap(index, minChild);
            this.sink(minChild);
        }
    }

    heapify() {
        for(let i=Math.ceil(this.length/2)-1; i>=0; i--) {
            this.sink(i);
        }
    }

    swap(i, j) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }
}

export default Heap;
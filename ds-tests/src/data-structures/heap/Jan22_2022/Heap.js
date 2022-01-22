class Heap {
    constructor() {
        this.arr = [];
        this.length = 0;
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

        minChild = this.arr[leftChild] < this.arr[rightChild] ? leftChild : rightChild;

        if(this.arr[index] > this.arr[minChild]) {
            this.swap(index, minChild);
            this.sink(minChild);
        }
    }

    swap(i, j) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }
}

export default Heap;
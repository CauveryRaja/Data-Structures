class Heap {
    constructor() {
        this.tree = [];
    }

    construct(arr) {
        arr.forEach(elm => {
            this.insert(elm);
        });
    }

    insert(elm) {
        this.tree.push(elm);
        this.swim(this.tree.length-1);
    }

    poll() {
        this.swap(0, this.tree.length-1);
        const min = this.tree.pop();
        this.sink(0);
        return min;
    }

    swim(index) {
        let parentIndex = Math.ceil(index/2) - 1;
        if(this.tree[parentIndex] > this.tree[index]) {
            this.swap(parentIndex, index);
            this.swim(parentIndex);
        }
    }

    sink(index) {
        let leftChild, rightChild, minIndex;
        leftChild = this.tree[2*index+1];
        rightChild = this.tree[2*index+2];
        minIndex = this.tree[leftChild] < this.tree[rightChild]
                    ? leftChild
                    : rightChild;
        
        if(this.tree[index] > this.tree[minIndex]) {
            this.swap(index, minIndex);
            this.sink(minIndex);
        }
    }

    swap(x, y) {
        [this.tree[x], this.tree[y]] = [this.tree[y], this.tree[x]]
    }

    isValid() {
        for(let i=0; i<this.tree.length; i++) {
            let leftChild, rightChild, minIndex;

            leftChild = this.tree[2*i+1];
            rightChild = this.tree[2*i+2];
            minIndex = this.tree[leftChild] < this.tree[rightChild]
                        ? leftChild
                        : rightChild;

            if(this.tree[i] > this.tree[minIndex]) {
                return false;
            }
        }
        return true;
    }
}

export default Heap;
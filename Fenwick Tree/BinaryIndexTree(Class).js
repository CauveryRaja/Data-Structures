class BinaryIndexedTree {
    constructor(data) {
        this.tree = [];
        this.size = 0;
        this.construct(data);
    }

    /**
     * Constructs Binary Indexed Tree from given array
     * @param {*} data Source array
     */
    construct(data) {
        // Copy all elements from Source array to Tree
        this.tree = data.slice(0);
        this.size = data.length;
        // Indexing starts from 1 in BIT
        this.tree.unshift(undefined);
        // Add current element only to its immediate dependent index
        for(let i=1; i<this.size; i++) {
            let immeDependent = i+2**this.lsb(i);
            if(immeDependent<=this.size)
                this.tree[immeDependent] += this.tree[i];
        }
    }

    /**
     * Returns sum of all elements till the given index
     * @param {*} index Given End index
     */
    rangeSum(index) {
        let sum = 0;
        if(index<=0 && index>this.size)
            throw `Invalid Index ${index}`;
        while(index>0) {
            sum += this.tree[index];
            index -= 2**this.lsb(index);
        }
        return sum;
    }

    /**
     * Returns the sum of all elements between given range
     * @param {*} start Start index
     * @param {*} end End index
     */
    rangeQuery(start, end) {
        if(!start || !end || (start<=0 && end>this.size))
            throw `Invalid Range ${start} - ${end}`;
        return this.rangeSum(end) - this.rangeSum(start);
    }

    /**
     * Returns the LSB of given number
     * @param {*} num Source number
     */
    lsb(num) {
        let binStr = num.toString(2);
        return binStr.length-1 - binStr.lastIndexOf('1');
    }
}
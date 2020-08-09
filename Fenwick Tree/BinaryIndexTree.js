let arr, sumArr, maxBit, capacity;

function init() {
    arr = [null];
    sumArr = [];
    maxBit = 5;
    capacity = (2**maxBit)+1;
}

function insert(num) {
    num = parseInt(num);
    arr.push(num);
    constructTree();
}

function constructTree() {
    sumArr = arr.slice();
    for(let i=1; i<=arr.length; i++) {
        let j = i + lsb(i);
        if(j<=capacity)
            sumArr[j] += sumArr[i];
    }
}

function rangeSum(start, end) {
    return computeSum(end) - computeSum(start-1);
}

function computeSum(index) {
    let sum = 0;
    while(index>=1) {
        sum += sumArr[index];
        index -= lsb(index);
    } 
    return sum;
}

function update(index, value) {
    let diff = arr[index] - value;
    while(index < capacity) {
        sumArr[index] += diff;
        index += lsb(index);
    }
}

function lsb(pos) {
    let binStr, index, num = pos;
    binStr = toBinary(pos);
    index = maxBit - binStr.lastIndexOf('1');
    return 2**(index-1);
}

function toBinary(num) {
    let binaryStr = '';
    while(num != 0 && num !=1) {
        binaryStr = num % 2 + binaryStr;
        num = Math.floor(num/2);
    }
    binaryStr = num + binaryStr;
    if(binaryStr.length < maxBit) {
        let s = binaryStr.padStart(maxBit, '0');
        binaryStr = s;
    }
    return binaryStr;
}

init();
function reverse(arr) {
    for(let i=0; i<Math.floor(arr.length/2); i++) {
        swap(i, arr.length - i - 1)
    }

    function swap(i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}
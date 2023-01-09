// Sorting array using Selection sort
const sort = (arr) => {
    let { length } = arr;
    for(let i=0; i<length - 1; i++) {
        for(let j=0; j<length - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                swap(j, j+1)
            }
        }
    }

    function swap(i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
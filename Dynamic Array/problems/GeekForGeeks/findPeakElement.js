// Peak element should be larger than elements on both sides

function getPeakElement(arr) {
    for(let i=0; i<arr.length; i++) {
        if(i === 0) {
            if(arr[i] > arr[i+1]) return arr[i];
        }
        else if(i === arr.length-1) {
            if(arr[i] > arr[i-1]) return arr[i];
        }
        else {
            if(arr[i] > arr[i+1] && arr[i] > arr[i-1]) return arr[i];
        }
    }
}
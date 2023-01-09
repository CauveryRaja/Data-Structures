function getKthSmallestNum(arr, k) {
    const obj = {};

    arr.forEach(elm => {
        obj[elm] = obj[elm] ? obj[elm] + 1 : 1;
    });

    return Object.keys(obj)[k - 1];
}
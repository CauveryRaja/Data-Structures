function getSuffixArray(str) {
    let suffixes = [];
    for(let i=0; i<str.length; i++) {
        suffixes.push(str.slice(i));
    }
    suffixes.sort();
    return suffixes;
}

function constructLCPArray(str) {
    let suffixArr = getSuffixArray(str);
    let lcpArr = [];
    lcpArr[0] = -1;
    for(let i=1; i<suffixArr.length; i++) {
        for(let j=0; j<suffixArr[i].length; j++) {
            if(suffixArr[i][j] != suffixArr[i-1][j]) {
                lcpArr[i] = j;
                break;
            }
        }
    }
    return lcpArr;
}
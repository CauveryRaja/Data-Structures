// Find the number of unique substrings of a given string

function getSortedSuffixes(str) {
    let suffixes = [];
    for(let i=0; i<str.length; i++) {
        suffixes.push(str.substring(i));
    }
    return suffixes.sort();
}

function longestCommonPrefix(a, b) {
    let count = 0;
    for(let i=0; i<a.length && i<b.length; i++) {
        if(a.charAt(i) !== b.charAt(i)) {
            break;
        }
        count++;
    }
    return count;
}

function findUniqueSubstringCount(str) {
    let suffixArr = getSortedSuffixes(str);
    let lcpArr = [0];
    for(let i=1; i<suffixArr.length; i++) {
        lcpArr[i] = longestCommonPrefix(suffixArr[i], suffixArr[i-1]);
    }
    console.log(suffixArr, lcpArr);
    let allSubsCount = str.length * (str.length + 1) / 2;
    let duplicateSubsCount = lcpArr.reduce((sum, _) => sum + _);
    console.log(allSubsCount, duplicateSubsCount);
    return allSubsCount - duplicateSubsCount;
}
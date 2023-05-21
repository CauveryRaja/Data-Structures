function getLongestCommonPrefix(arr) {
    let prefixTree = constructPrefixTree(arr);

    console.log('prefix tree', prefixTree);

    return getCommonPrefix(prefixTree);
}


function constructPrefixTree(arr) {
    const tree = {
        root: {}
    };

    // Did not work because of Garbage collection, since forEach uses a callback function
    // arr.forEach(str => {
    //     let currNode = tree.root;
    //     for(let i=0; i<str.length; i++) {
    //         let char = str.charAt(i);
    //         console.log(str, char, currNode)
    //         if(!currNode[char]) {
    //             console.log('inside..');
    //             currNode[char] = {};
    //             if(i==0) {
    //                 tree.root[char] = {}
    //             }
    //         }
    //         console.log(JSON.stringify(currNode));
    //         currNode = currNode[char];
    //     }
    //     tree.root = currNode;
    // });

    for(let j=0; j<arr.length; j++) {
        const str = arr[j];

        let currNode = tree.root;
        for(let i=0; i<str.length; i++) {
            let char = str.charAt(i);
            console.log(str, char, currNode)
            if(!currNode[char]) {
                currNode[char] = {};
                if(i==0) {
                    tree.root[char] = {}
                }
            }
            console.log(JSON.stringify(currNode));
            currNode = currNode[char];
        }
    }
    return tree;
}

function getCommonPrefix(tree) {
    let currNode = tree.root;
    let commonPrefix = '';

    while(Object.keys(currNode).length === 1) {
        let commonPrefixChar = Object.keys(currNode)[0];
        commonPrefix += commonPrefixChar;

        currNode = currNode[commonPrefixChar];
    }
    return commonPrefix;
}

console.log(getLongestCommonPrefix(['hai', 'hello']));
console.log(getLongestCommonPrefix(['hel', 'hello']));  // Doesn't work here - returns 'hello' instead of 'hel'

// Trying object mutation
let obj = {}
let temp = obj;
obj.key2 = 'value2'; // Works
/**
 * Trie implemention using nested objects approach
 */
class Trie {
    constructor(arr) {
        this.root = new Node();
        this.constructTree(arr);
    }

    constructTree(arr) {
        arr.forEach(str => {
            this.insert(str);
        });
    }

    insert(str) {
        let currNode = this.root;
        for(let i=0; i<str.length; i++) {
            let char = str[i];
            if(!currNode.children[char]) {
                currNode.children[char] = new Node();
            }
            currNode = currNode.children[char];
        }
    }
}

class Node {
    constructor() {
        this.children = {};
    }
}
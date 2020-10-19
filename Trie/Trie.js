class Trie {
  constructor(arr) {
    this.root = new Node();
    this.constructTree(arr);
  }

  /**
   * Contructs Trie from an array of strings
   * @param {*} arr Given array
   */
  constructTree(arr) {
    arr.forEach((str, i) => {
        this.insert(str);
    });
  }

  /**
   * Inserts string into Trie
   * @param {*} str Given string to be inserted
   */
  insert(str) {
    str = str.toLowerCase();
    this.root = this.insertNodes(this.root, str, 0);
  }

  /**
   * Recursively inserts child nodes
   * @param {*} currNode Node for which child has to be added
   * @param {*} str Given string
   * @param {*} level Indicates position of character in the String
   */
  insertNodes(currNode, str, level) {
    let pos;
    if(level>=str.length)
    return currNode;
    // Computes position as per Alphabet index. Say 'a' will be at position 0
    pos = str.charCodeAt(level) - 97;
    if(!currNode['children'][pos]) {
      currNode['children'][pos] = new Node();
    }
    currNode['children'][pos] = this.insertNodes(currNode['children'][pos], str, ++level);
    return currNode;
  }
}

class Node {
  constructor(c) {
    this.children = [];
  }
}

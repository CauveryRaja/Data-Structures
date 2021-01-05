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

  includes(key) {
      return this.search(this.root, key, 0);
  }

  search(currNode, str, level) {
      let index, res;
      index = str.charCodeAt(level)-97, res = false;
      if(currNode['children'][index]) {
          console.log(currNode, index, level);
          res = this.search(currNode['children'][index], str, ++level);
          if(level === str.length-1)
            return res;
      }
      return res;
  }
}

class Node {
  constructor(c) {
    this.children = [];
  }
}

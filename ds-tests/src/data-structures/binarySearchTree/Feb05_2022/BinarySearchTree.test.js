import BinarySearchTree from './BinarySearchTree';

describe('Binary Search Tree', () => {
    it('should define a binary search tree', () => {
        const bst = new BinarySearchTree();

        expect(bst).toBeDefined();
    });

    it('should insert elements into tree', () => {
        const bst = new BinarySearchTree();

        bst.insert(5);
        bst.insert(2);
        bst.insert(7);

        expect(bst).toHaveLength(3);
    });
});
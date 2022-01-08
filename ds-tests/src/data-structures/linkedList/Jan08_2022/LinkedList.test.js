import LinkedList from './LinkedList';

describe('Linked List', () => {
    it('Should create a Linked List', () => {
        let list = new LinkedList();

        expect(list).toBeDefined();
    });

    it('Should add 3 elements into the list', () => {
        let list = new LinkedList();

        list.insert(5);
        list.insert(10);
        list.insert(15);

        expect(list).toHaveLength(3);
    });

    it('Should get 3 elements from the list', () => {
        let list = new LinkedList();

        list.insert(5);
        list.insert(10);
        list.insert(15);

        expect(list.get(0)).toBe(5);
        expect(list.get(1)).toBe(10);
        expect(list.get(2)).toBe(15);
    });

    it('Should delete element from the list', () => {
        let list = new LinkedList();

        list.insert(5);
        list.insert(10);
        list.insert(15);
        list.delete(5);
        list.delete(10);
        list.delete(15);
    
        expect(list).toHaveLength(0);
        expect(list.get(0)).toBeUndefined();
        expect(list.get(1)).toBeUndefined();
        expect(list.get(2)).toBeUndefined();
    });
});
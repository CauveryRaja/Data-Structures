import LinkedList from './LinkedList';

describe('Linked List', () => {
    it('should create Linked List', () => {
        let list = new LinkedList();
        expect(list).toBeDefined()
    });

    it('should create Linked List', () => {
        let list = new LinkedList();
        expect(list).toBeDefined()
    });

    it('should insert 2 items', () => {
        let list = new LinkedList();
        list.insert(10);
        list.insert(15);
        expect(list.length).toEqual(2);
    });

    it('should get 2 items', () => {
        let list = new LinkedList();
        list.insert(10);
        list.insert(15);

        expect(list.get(0)).toEqual(10);
        expect(list.get(1)).toEqual(15);
    });

    it('should delete 2 items', () => {
        let list = new LinkedList();
        list.insert(10);
        list.insert(15);

        list.delete(10);
        expect(list.length).toEqual(1);
    });

    it('should return index of given element', () => {
        let list = new LinkedList();
        list.insert(10);
        list.insert(15);

        expect(list.indexOf(10)).toEqual(0);
        expect(list.indexOf(15)).toEqual(1);
        expect(list.indexOf(5)).toEqual(-1);
    });
});
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

    it('should insert and get 2 items', () => {
        let list = new LinkedList();
        list.insert(10);
        list.insert(15);
        expect(list.length).toEqual(2);

        expect(list.get(0)).toEqual(10);
        expect(list.get(1)).toEqual(15);
    });
});
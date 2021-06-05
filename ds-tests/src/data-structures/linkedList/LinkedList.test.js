import LinkedList from './LinkedList';

describe('Linked List', () => {
    it('should create Linked List', () => {
        let list = new LinkedList();
        expect(list).toBeDefined()
    });

    it('should create Linked List', () => {
        let list = new LinkedList();
        list.insert(10);
        list.insert(15);
        expect(list).toBeDefined()
    });
});
import LinkedList from "./LinkedList";

describe('Linked List', () => {
    it('Should create Linked List', () => {
        const list = new LinkedList();

        expect(list).toBeDefined();
    });

    it('Should insert elements into list', () => {
        const list = new LinkedList();

        list.add(5);
        list.add(10);
        list.add(15);

        expect(list.length).toBe(3);
        expect(list.head.data).toBe(5);
        expect(list.head.next.data).toBe(10);
        expect(list.head.next.next.data).toBe(15);
    });

    it('Should insert element at given index into list', () => {
        const list = new LinkedList();

        list.add(5);
        list.add(10, 0);
        list.add(15, 1);

        expect(list.length).toBe(3);
        expect(list.head.data).toBe(10);
        expect(list.head.next.data).toBe(15);
        expect(list.head.next.next.data).toBe(5);
    });

    it('Should delete element from list', () => {
        const list = new LinkedList();

        list.add(5);
        list.add(10);
        list.add(15);
        list.delete(5);

        expect(list.length).toBe(2);
        expect(list.head.data).toBe(10);
        expect(list.head.next.data).toBe(15);
    });

    it('Should get element from the given index', () => {
        const list = new LinkedList();

        list.add(5);
        list.add(10);
        list.add(15);

        expect(list.get(0)).toBe(5);
        expect(list.get(1)).toBe(10);
        expect(list.get(2)).toBe(15);
    });
})
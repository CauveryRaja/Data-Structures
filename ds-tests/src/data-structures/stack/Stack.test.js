import Stack from './Stack';


describe('Stack', () => {
    it('Should create Stack', () => {
        const stack = new Stack();

        expect(stack).toBeDefined();
    });

    it('Should push elements into stack', () => {
        const stack = new Stack();

        stack.push(5);
        stack.push(10);
        stack.push(15);
        stack.push(20);
        stack.push(25);

        expect(stack).toHaveLength(5);
        /* Note: Use this only before implementation. Remove this after impl.
        Since impl details must not be in tests

        expect(stack.head.data).toBe(5);
        expect(stack.head.next.data).toBe(10);
        expect(stack.head.next.next.data).toBe(15);
        expect(stack.head.next.next.next.data).toBe(20);
        expect(stack.head.next.next.next.next.data).toBe(25);*/

        expect(stack.peek(0)).toBe(5);
        expect(stack.peek(1)).toBe(10);
        expect(stack.peek(2)).toBe(15);
        expect(stack.peek(3)).toBe(20);
        expect(stack.peek(4)).toBe(25);
    });

    it('Should pop elements from stack', () => {
        const stack = new Stack();

        stack.push(5);
        stack.push(10);
        stack.push(15);
        stack.pop();
        stack.pop();

        expect(stack).toHaveLength(1);
        expect(stack.peek(0)).toBe(5);
        expect(stack.peek(1)).toBeUndefined();
        expect(stack.peek(2)).toBeUndefined();
    })
});
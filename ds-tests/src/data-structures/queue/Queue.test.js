import Queue from './Queue';

describe('Queue', () => {
    it('Should create Queue', () => {
        const queue = new Queue();

        expect(queue).toBeDefined();
    });

    it('Should enqueue elements into Queue', () => {
        const queue = new Queue();

        queue.enQueue(5);
        queue.enQueue(10);
        queue.enQueue(15);

        expect(queue).toHaveLength(3);
        expect(queue.get(0)).toBe(5);
        expect(queue.get(1)).toBe(10);
        expect(queue.get(2)).toBe(15);
    });

    it('Should dequeue elements from Queue', () => {
        const queue = new Queue();

        queue.enQueue(5);
        queue.enQueue(10);
        queue.enQueue(15);
        queue.deQueue();
        queue.deQueue();

        expect(queue).toHaveLength(1);
        expect(queue.get(0)).toBe(15);
        expect(queue.get(1)).toBeUndefined();
        expect(queue.get(2)).toBeUndefined();
    });
});
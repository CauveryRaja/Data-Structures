import Heap from './Heap';

describe('Heap data structure', () => {
    it('should create Heap', () => {
        const heap = new Heap();

        expect(heap).toBeDefined();
        expect(heap).toHaveLength(0);
    });

    it('should insert elements into Heap', () => {
        const heap = new Heap();

        heap.insert(5);
        heap.insert(2);
        heap.insert(3);
        heap.insert(1);

        expect(heap).toHaveLength(4);
    });

    it('should delete elements from Heap', () => {
        const heap = new Heap();

        heap.insert(5);
        heap.insert(2);
        heap.insert(3);
        heap.insert(1);

        expect(heap.delete()).toBe(1);
        expect(heap.delete()).toBe(2);
        expect(heap.delete()).toBe(3);
        expect(heap).toHaveLength(1);
    });

    it('should reorder heap using heapify', () => {
        const heap = new Heap([5, 2, 3, 1]);

        heap.heapify();

        expect(heap.delete()).toBe(1);
        expect(heap.delete()).toBe(2);
        expect(heap.delete()).toBe(3);
        expect(heap.delete()).toBe(5);
    });
});
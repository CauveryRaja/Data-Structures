import Heap from './Heap';

describe('Heap implementation' , () => {
    it('Should create Heap', () => {
        const heap = new Heap();

        expect(heap).toBeDefined();
    });

    it('Should construct Heap', () => {
        const heap = new Heap();

        heap.construct([2, 1, 4, 3, 8, 5, 6, 0]);

        expect(heap.isValid()).toBeTruthy();
    });

    it('Should insert elements into Heap', () => {
        const heap = new Heap();

        heap.construct([2, 0, 4, 3, 8, 5, 6]);
        heap.insert(1);
        heap.insert(7);

        expect(heap.isValid()).toBeTruthy();
    })
});
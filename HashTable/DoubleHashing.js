class HashTable {
    arr = [];
    capacity;
    loadFactor;
    threshold;
    size;
    prime;
    tombstoneMarker = '#';

    constructor(capacity, loadFactor, prime) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.threshold = this.capacity * this.loadFactor;
        this.prime = prime;
    }

    insert(key, value) {
        let entry = {
            key: key,
            value: value
        };
        let hash1 = this.primaryHash(key);
        let hash2 = this.secondaryHash(key);
        let index = hash1 % this.capacity, x=1;
        while(this.arr[index] != null && this.arr[index] != this.tombstoneMarker) {
            if(this.arr[index].key==key)
                break;
            index = (hash1 + (x*hash2)) % this.capacity;
            x++;
        }
        this.arr[index] = entry;
        this.size++;
        this.display();
    }

    remove(key) {
        let index = this.findIndex(key);
        this.arr[index] = this.tombstoneMarker;
        this.display();
        console.log(index);
        return index;
    }

    findIndex(key) {
        let hash1 = this.primaryHash(key);
        let hash2 = this.secondaryHash(key);
        let index = hash1 % this.capacity, x=1;
        while(this.arr[index]!=null) {
            if(this.arr[index].key==key)
                break;
            index = (hash1 + (x*hash2)) % this.capacity;
            x++;
        }
        this.display();
        console.log(index);
        return index;
    }

    primaryHash(key) {
        let keyChars = key.toString().split('');
        let sum = 0;
        keyChars.forEach(char => {
            sum += char.charCodeAt(0);
        });
        return sum;
    }

    secondaryHash(key) {
        /* A popular second hash function is : 
        hash2(key) = PRIME – (key % PRIME) 
        where PRIME is a prime smaller than the TABLE_SIZE. */
        return this.prime - (this.primaryHash(key) % this.prime);
    }

    display() {
        document.getElementById('HT').textContent = JSON.stringify(this.arr);
    }
}

let queue = [];
let front = 0, back = queue.length-1;

function displayQueue() {
    document.getElementById('queue').textContent = queue;
    document.getElementById('front').textContent = front;
    document.getElementById('back').textContent = back;
}

function enQueue(num) {
    back++;
    queue[back] = num;
    displayQueue();
}

function deQueue() {
    let a = [];
    for(let i=1; i<queue.length; i++) {
        a[i-1] = queue[i]
    }
    queue = a;
    back--;
    displayQueue();
}

function peek() {
    console.log(queue[back]);
}

function isEmpty() {
    return back===-1;
}
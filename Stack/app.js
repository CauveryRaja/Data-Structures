let stack = [];

function push(num) {
    stack[stack.length] = num;
    displayStack();
}

function pop() {
    let temp = [];
    for(let i=0; i<stack.length-1; i++) {
        temp[i] = stack[i];
    }
    stack = temp;
    displayStack();
}

function displayStack() {
    document.getElementById('stack').textContent = stack;
}
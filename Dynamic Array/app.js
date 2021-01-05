let dynArr = [1,undefined,3];
let size = 0;
let capacity = dynArr.length;
function displayArray() {
    document.getElementById('dynArr').textContent = dynArr.toString();
}

function insertNum(num1, pos1) {
    let num = parseInt(num1);
    let pos = parseInt(pos1);
    if(num && pos) {
        if(dynArr[pos]==undefined) {
            dynArr[pos] = num;
        }
        else {
            // = dynArr.slice(pos)
            let temp = dynArr.slice(0, pos);
            temp.push(num);
            dynArr = temp.concat(dynArr.slice(pos));
        }
        size++;
    }
    displayArray();
    console.log(num,pos, dynArr);
}

function clearArray() {
    dynArr = [];
    displayArray();
}
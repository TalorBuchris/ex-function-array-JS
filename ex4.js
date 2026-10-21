let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arrReverse(arr);

function arrReverse(arr) {
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        arr.push(arr[i])
    }
    console.log(arr);
    arr = arr.slice(len);
    console.log(arr);
    
}
const arr = [100, 154, 54, 85, 245, 74, 125]
largeFrom100(arr);

function largeFrom100(arr){
    let newArr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        count++;
        if (arr[i]>100)
            newArr.push(arr[i])
    }
    console.log(newArr);
    console.log(`number of compare: ${count}`);
}
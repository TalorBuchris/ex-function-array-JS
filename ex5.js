const arr = [12, 'hello', true, { name: 'Elyasaf' }, false, 542, 'Hi', true]
checkType(arr);

function checkType(arr) {
    let number = 0;
    let string = 0;
    let object = 0;
    let boolean = 0;
    for (let i = 0; i < arr.length; i++) {
        switch (typeof arr[i]) {
            case 'number':
                number++;
                break;
            case 'string':
                string++;
                break;
            case 'object':
                object++;
                break;
            case 'boolean':
                boolean++;
                break;
        }
    }
    console.log(number, string, boolean, object);
}
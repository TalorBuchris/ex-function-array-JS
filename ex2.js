const mat = [
    ['X', 'X', 'x'],
    ['X', 'T', 'x'],
    ['X', 'v', 'X'],
    ['X', 'v', 'X'],
    ['y', 'X', 'z']
];

countX(mat);

function countX(mat){
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            if (mat[i][j] == 'X')
                console.log(`X in mat[${i}][${j}]`)
        }
    }
}

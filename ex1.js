a = "Talor";
b = "Cohen";
replace(a, b)

function replace(a, b) {
    [a, b] = [b, a];
    console.log(`a: ${a} b: ${b}`);
}

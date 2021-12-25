const repeatNumbers = (arr) => {
    if (!arr) return;

    let firstDigit = ""

    for (let j = 0; j < arr.length; j++) {

        for (let i = 1; i <= arr[j][1]; i++) {
            firstDigit = firstDigit + `${arr[j][0]}`
        }

        if (arr.length - j === 1) return firstDigit;

        firstDigit += ", "
    }

}


console.log(repeatNumbers([
    [1, 10]
]));
console.log(repeatNumbers([
    [1, 2],
    [2, 3]
]));
console.log(repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2]
]));

console.log(repeatNumbers([
    [10, 0],
    [34, 6],
    [92, 2]
]));


const sumLargestNumbers = (arr) =>{
    if(arr.length === 2) return arr[0] + arr[1]

    let a = 0;
    let b = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= a){
            b = a
            a = arr[i]

        }
        if(arr[i] < a && arr[i] > b){
            b = arr[i]
        }
    }

    return a + b
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


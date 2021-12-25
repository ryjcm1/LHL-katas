const numberOfVowels = (data) =>{
    let counter = 0;
    let vowels = ["a", "e", "i", "o", "u"]

    let arr = data.split("")

    for(let i = 0; i < arr.length; i++){
        if(vowels.includes(arr[i])){
            counter++
        }
    }

    return counter
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
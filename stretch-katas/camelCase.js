const camelCase = (sentence) =>{
    if(!sentence) return ""

    sentenceArr = sentence.split(" ")

    if(sentenceArr.length === 1) return sentenceArr.join("")
    
    for(let i = 1; i < sentenceArr.length; i++){
        sentenceArr[i] = sentenceArr[i].charAt(0).toUpperCase() + sentenceArr[i].substr(1)
    }

    return sentenceArr.join("")
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("hello"));
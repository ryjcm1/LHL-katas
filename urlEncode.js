const urlEncode = (string) =>{

    stringArr = string.trim("").split("")

    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i] === " "){
            stringArr[i] = "%20"
        }
    }
    
    return stringArr.join("")


}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
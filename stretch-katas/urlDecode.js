const urlDecode = (string) =>{
    let obj = {}

    //replaces %20 with spaces and seperates string into an array at &
    let splitArr = string.replace(/%20/g, " ").split("&")

    //splits array into array of key:value arrays
    let keyValueArr = splitArr.map(x => x.split("="))

    //inserts key value pairs into the object
    for(let i = 0; i < keyValueArr.length; i++){
        
        let type = keyValueArr[i][0]
        let value = keyValueArr[i][1]

        obj[type] = value
    }
    
    return obj
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
const squareCode = (message) => {

    //string without spaces
    const noSpaces = message.replace(/\s/g, '');
    
    //last index position of the string
    const maxIndexValue = noSpaces.length - 1

    //represents both amount of characters per line and also the index step value
    const charPerLine = Math.ceil(Math.sqrt(noSpaces.length))

    let newMessage = ''
    
    //first loop deals with each row
    for(let i = 0; i < charPerLine; i++){
        //second loop adds the correct value to the row
        for( let j = 0; j < maxIndexValue ; j+=charPerLine){

            //only adds if the value is defined
            if(noSpaces[i+j] === undefined){
                break;
            }else{
                newMessage += noSpaces[i+j]
            }
            
        }

        //adds space after a row is finished
        newMessage += '\n'
    }

    return newMessage
    
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
  console.log(squareCode("have a nice day"));
  console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
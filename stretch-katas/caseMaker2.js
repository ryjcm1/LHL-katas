const makeCase = (input, parameter) => {
    if (!input || !parameter) return;

    if (parameter.constructor === Array) {
        let tempString = input

        //Method hierarchy (camel, pascal, snake, kebab, title) > (vowel, consonant) > (upper, lower)

        //1st
        if (parameter.includes('camel')) {
            tempString = camel(tempString)
        }
        if (parameter.includes('pascal')) {
            tempString = pascal(tempString)
        }
        if (parameter.includes('snake')) {
            tempString = snake(tempString)
        }
        if (parameter.includes('kebab')) {
            tempString = kebab(tempString)
        }
        if (parameter.includes('title')) {
            tempString = title(tempString)
        }

        //2nd
        if (parameter.includes('vowel')) {
            tempString = vowel(tempString)
        }
        if (parameter.includes('consonant')) {
            tempString = consonant(tempString)
        }
        
        //3rd
        if (parameter.includes('upper')) {
            tempString = tempString.toUpperCase();
        }
        if (parameter.includes('lower')) {
            tempString = tempString.toLowerCase();
        }

        return tempString


    } else {

        switch (parameter) {
            case "camel":
                return camel(input);

            case "pascal":
                return pascal(input);

            case "snake":
                return snake(input);

            case "kebab":
                return kebab(input);

            case "title":

                return title(input);

            case "vowel":

                return vowel(input);

            case "consonant":

                return consonant(input);
        }

    }



}



//helper functions

const camel = (string) => {
    let sentenceArr = string.split(" ")

    for (let i = 1; i < sentenceArr.length; i++) {
        sentenceArr[i] = sentenceArr[i].charAt(0).toUpperCase() + sentenceArr[i].substr(1)
    }

    return sentenceArr.join("")
}

const pascal = (string) => {
    let sentenceArr = string.split(" ")

    for (let i = 0; i < sentenceArr.length; i++) {
        sentenceArr[i] = sentenceArr[i].charAt(0).toUpperCase() + sentenceArr[i].substr(1)
    }

    return sentenceArr.join("")
}

const snake = (string) => {

    return string.split(' ').join("_")
}

const kebab = (string) => {

    return string.split(' ').join("-")
}

const title = (string) => {

    let sentenceArr = string.split(" ")

    for (let i = 0; i < sentenceArr.length; i++) {
        sentenceArr[i] = sentenceArr[i].charAt(0).toUpperCase() + sentenceArr[i].substr(1)
    }

    return sentenceArr.join(" ")

}

const vowel = (string) => {

    let vowelLower = string.replace(/[bcdfghjklmnpqrstvwxyz]/g, function (char) {
        return char.toUpperCase();
    });

    return vowelLower
}

const consonant = (string) => {

    let consonantsLower = string.replace(/[aeiou]/g, char => {
        return char.toUpperCase()
    });

    return consonantsLower
}







console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
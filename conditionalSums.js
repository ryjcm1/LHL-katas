const conditionalSum = function (values, condition) {
    // Your code here
    if(values.length === 1){
        return values[0]
    };
    if(!values.length) {
        return 0
    };

    const reducer = (total, number) => total + number;

    switch (condition) {

        case "even":
            let evenArr = values.filter(x => x % 2 === 0)
            return evenArr.reduce(reducer)

        case "odd":
            let oddArr = values.filter(x => x % 2 === 1)
            return oddArr.reduce(reducer)

    }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
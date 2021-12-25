const calculateChange = (amountDue, amountPayed) => {
    if(amountDue > amountPayed) return {};

    let changeObject = {};
    let changeAmount = amountPayed - amountDue

    if(changeAmount >= 2000){
        twentyBills = Math.floor(changeAmount/2000)
        changeAmount = changeAmount%2000
        changeObject['twentyDollar'] = twentyBills
    }
    if(changeAmount >= 1000){
        tenBills = Math.floor(changeAmount/1000)
        changeAmount = changeAmount%1000
        changeObject['tenDollar'] = tenBills
    }
    if(changeAmount >= 500){
        fiveBills = Math.floor(changeAmount/500)
        changeAmount = changeAmount%500
        changeObject['fiveDollar'] = fiveBills
    }
    if(changeAmount >= 200){
        twoDollar = Math.floor(changeAmount/200)
        changeAmount = changeAmount%200
        changeObject['twoDollar'] = twoDollar
    }
    if(changeAmount >= 100){
        oneDollar = Math.floor(changeAmount/100)
        changeAmount = changeAmount%100
        changeObject['oneDollar'] = oneDollar
    }
    if(changeAmount >= 25){
        quarter = Math.floor(changeAmount/25)
        changeAmount = changeAmount%25
        changeObject['quarter'] = quarter
    }
    if(changeAmount >= 10){
        dime = Math.floor(changeAmount/10)
        changeAmount = changeAmount%10
        changeObject['dime'] = dime
    }
    if(changeAmount >= 5){
        nickel = Math.floor(changeAmount/5)
        changeAmount = changeAmount%5
        changeObject['nickel'] = nickel
    }
    if(changeAmount >= 1){
        penny = Math.floor(changeAmount/1)
        changeObject['penny'] = penny
    }
    

    return changeObject

}





console.log(calculateChange(1999, 4000));

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
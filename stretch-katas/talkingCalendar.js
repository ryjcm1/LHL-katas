const talkingCalendar = (date) => {
    const dateArr = date.split("/")
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayList = {
        1: "1st",
        2: "2nd",
        3: "3rd",
        4: "4th",
        5: "5th",
        6: "6th",
        7: "7th",
        8: "8th",
        9: "9th",
        10: "10th",
        11: "11th",
        12: "12th",
        13: "13th",
        14: "14th",
        15: "15th",
        16: "16th",
        17: "17th",
        18: "18th",
        19: "19th",
        20: "20th",
        21: "21st",
        22: "22nd",
        23: "23rd",
        24: "24th",
        25: "25th",
        26: "26th",
        27: "27th",
        28: "28th",
        29: "29th",
        30: "20th",
        31: "31st"
    }

    const year = dateArr[0]
    const month = monthList[dateArr[1] - 1]
    const day = dayList[+dateArr[2]]

    return `${month} ${day}, ${year}`


};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1989/05/01"));
const instructorWithLongestName = (instructors) =>{
    let lengthArr = []
    instructors.map(x => lengthArr.push(x.name.length))

    let highestNum = Math.max(...lengthArr)
    let highestIndex = lengthArr.indexOf(highestNum)

    return instructors[highestIndex]

}

console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));
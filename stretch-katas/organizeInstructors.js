const organizeInstructors = (instructor) =>{
    let instructorObj = {}

    for(let i = 0; i < instructor.length; i++){
        let course = instructor[i].course
        if(course in instructorObj){
            instructorObj[course] = [...instructorObj[course], instructor[i].name]
        }else{
            instructorObj[course] = [instructor[i].name]
        }
    }

    return instructorObj
}

console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));
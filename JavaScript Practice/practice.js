
// Declaring my variables

const Libraryname = "Wura's Digital Library"
const studentName = "Wura";
const Level =400
const Course ="Ethics of mass communication"
const Topic = "NUJ code of ethics"

console.log(Libraryname);
console.log(Level);
console.log(studentName);
console.log(Course);
console.log(Topic);
console.log("                                    ");



//creating my function




const MaterialDetails = (studentName, Level, Course, Topic) =>  {console.log(`Name: ${studentName}`)
                                                                console.log(`Level: ${Level}`)
                                                                console.log(`Course: ${Course}`)
                                                                console.log(`Topic: ${Topic}`)
                                                                console.log ("--------------------------")}

//Calling my function
MaterialDetails("ola", 200, "Communication Research", "Introduction");
MaterialDetails("Tobi", 300, "Advertising Research", "AD Research 101");
MaterialDetails("Femi", 400, "PR Research", "Introduction to PR");


const material = {
    level : 300,
    course : "Issues in mass media",
    topic : "Ethical Issues"
}

console.log(material.topic)
console.log(material.course)

let Topics = ["ethical issues", "governmment interference", "Citizen Journalism"]

console.log(Topics[2])


const Materials = [ 

                    {id: "1",  level: 400, course: "Communication for Development", topic: "Planning social change", type: "Class note", title: "Week One Class note"},
                    {id: "2",  level: 400, course: "Communication for Development", topic: "Planning social change", type: "past question",  title: "2024/2025 past question"},                    
                    {id: "3",  level: 400, course: "Communication for Development", topic: "Planning social change", type: "PDF material",  title: "Further reading on planning for social change"},
                    {id: "4",  level: 400, course: "Communication for Development", topic: "Rural development", type: "Class note", title: "Week three Class note"},
                    {id: "5",  level: 400, course: "Communication for Development", topic: "Rural development", type: "past question",  title: "2025/2026 past question"}]

console.log(Materials)
console.log(Materials[1])
console.log(Materials[0].course)


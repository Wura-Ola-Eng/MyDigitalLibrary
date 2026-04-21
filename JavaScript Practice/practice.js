
// Declaring my variables

const libraryname = "Wura's Digital Library"
const studentName = "Wura";
const level =400
const course ="Ethics of mass communication"
const topic = "NUJ code of ethics"

console.log(libraryname);
console.log(level);
console.log(studentName);
console.log(course);
console.log(topic);
console.log("                                    ");



//creating my function




const materialDetails = (studentName, Level, Course, Topic) =>  
        {console.log(`Name: ${studentName}`)
        console.log(`Level: ${Level}`)
        console.log(`Course: ${Course}`)
        console.log(`Topic: ${Topic}`)
        console.log ("--------------------------")}

//Calling my function
materialDetails("ola", 200, "Communication Research", "Introduction");
materialDetails("Tobi", 300, "Advertising Research", "AD Research 101");
materialDetails("Femi", 400, "PR Research", "Introduction to PR");

//creating objects
const material = {
    level : 300,
    course : "Issues in mass media",
    topic : "Ethical Issues"
}

console.log(material.topic)
console.log(material.course)

let topics = ["ethical issues", "government interference", "Citizen Journalism"]

console.log(topics[2])


// Array of my material objects
const materials = [ 

                    {id: "1",  level: 400, course: "Communication for Development", topic: "Planning social change", type: "Class note", title: "Week One Class note"},
                    {id: "2",  level: 400, course: "Communication for Development", topic: "Planning social change", type: "past question",  title: "2024/2025 past question"},                    
                    {id: "3",  level: 400, course: "Communication for Development", topic: "Planning social change", type: "PDF material",  title: "Further reading on planning for social change"},
                    {id: "4",  level: 400, course: "Communication for Development", topic: "Rural development", type: "Class note", title: "Week three Class note"},
                    {id: "5",  level: 400, course: "Communication for Development", topic: "Rural development", type: "past question",  title: "2025/2026 past question"}]

console.log(materials);
console.log(materials[1]);
console.log(materials[0].course);


// Mapping and Filtering the objects

const materialtitles = materials.map((element) => element.title);

console.log(materialtitles);

const materiallevel = materials.filter((element) => element.level === 400);
console.log(materiallevel);

const classmaterials = materials.filter((element) => element.title.includes ("past") );
console.log(classmaterials);

const topictitles = materials.filter((element) => element.topic === "Planning social change").map((element) => element.title);
console.log(topictitles);

//using the destructing and spread operator

 function materialsinfo ({level, course, title}){
        console.log(level);
        console.log(course);
        console.log(title);
 }

 materialsinfo(materials[0]);
 
 let updatedmaterial = {...materials[0], title: "Social development restriction"};
 console.log(updatedmaterial);


// Retrieving data using async and await
async function loaddata() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    const datasize = data.slice(0,3);
    console.log(datasize);
}

loaddata();
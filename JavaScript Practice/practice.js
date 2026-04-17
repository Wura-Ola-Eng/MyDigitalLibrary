
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



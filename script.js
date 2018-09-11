"use strict";

//read JSON and fetch 
fetch("classlist.json")
    .then(result => result.json())
    .then(studentList)


//create an array of objects 
const students = [];
let houseArray = [];

//create single object 
const student = {
    firstName: "",
    lastName: "",
    houseName: "",
    toString() {
        return this.firstName + " " + this.lastName;
    },
    splitName(fullName) {
        const firstSpace = fullName.indexOf(" "); //from the constant student, create a string, which is split 
        this.firstName = fullName.substring(0, firstSpace);
        this.lastName = fullName.substring(firstSpace + 1);

    },
    getHouse(h) {
        this.houseName = h;
    }
}

//forEach student in house 
function studentList(data) {
    console.table(data);
    Object.keys(data).forEach(gethouseName);
    function gethouseName(houseName) {
        console.log(houseName);
    }
}


//create student object 

//set name and house 

//add/push to students array


function showPerson(fullName) { //createStudent takes the splitName function, and splits the array into strings
    const newStudent = Object.create(student); //then create a new object
    newStudent.splitName(fullName);//splits the name - runs the fullName function
    //newStudent.getHouse()
    students.push(newStudent); //puts it into an empty array
}

showPerson(); //fun the create function
console.table(students); //show them in tables 


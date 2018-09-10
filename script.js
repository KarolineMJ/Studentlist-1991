"use strict";

//fetch the json 
fetch("classlist.json")
    .then(e => e.json())
    .then(studentList)

//create an array of objects 
const students = [];

//create single object 
const student = {
    firstName: "",
    lastName: "",
    toString() {
        return this.firstName + " " + this.lastName;
    },
    splitName(fullName) {
        const firstSpace = fullName.indexOf(" "); //from the constant student, create a string, which is split 
        this.firstName = fullName.substring(0, firstSpace);
        this.lastName = fullName.substring(firstSpace + 1);

    }
}

function studentList(data) {
    console.table(data);
    data.Gryffindor.forEach(showPerson);
}

function showPerson(fullName) { //createStudent takes the splitName function, and splits the array into strings
    const newStudent = Object.create(student); //then create a new object
    newStudent.splitName(fullName);//splits the name - runs the fullName function

    students.push(newStudent); //puts it into an empty array
}

showPerson(); //fun the create function
console.table(students); //show them in tables 


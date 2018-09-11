"use strict";

//create an array of objects 
let eachHouse;
const students = [];
let originalSingleList;
let houseArray = [];


//Write data
const info = {
    Hufflepuff: [
        "Hannah Abbot",
        "Susan Bones",
        "Justin Finch-Fletchly",
        "Ernie Macmillian",
        "Megan Jones",
        "Wayne Hopkins",
        "Leanne -unknown-"
    ],

    Gryffindor: [
        "Lavender Brown",
        "Seamus Finnigan",
        "Hermione Granger ",
        "Neville Longbottom",
        "Parvati Patil",
        "Harry Potter",
        "Dean Thomas",
        "Ron Weasley"
    ],

    Ravenclaw: [
        "Terry Boot",
        "Mandy Brocklehurst",
        "Padma Patil",
        "Lisa Turpin",
        "Stephen Cornfoot",
        "Anthony Goldstein",
        "Michael Corner",
        "Kevin Entwistle",
        "Sue Li"
    ],

    Slytherin: [
        "Draco Malfoy",
        "Vincent Crabbe",
        "Gregory Goyle",
        "Pansy Parkinson",
        "Millicent Bulstrode",
        "Theodore Nott",
        "Daphne Greengrass",
        "Blais Zabini"
    ]
};



//create single object 
const student = {
    firstName: "",
    lastName: "",
    houseName: "",
    toString() {
        return "f:" + this.firstName + "l:" + this.lastName + "add:" + this.adress;
    },
    splitName(fullName) {
        this.firstName = fullName.substring(0, fullName.indexOf(" "));
        this.lastName = fullName.substring(fullName.indexOf(" ") + 1);

    },
    getHouse(h) {
        this.houseName = h;
    }
};

function buildHouseArray(house) {
    eachHouse = house;
    let eachHouseArray = info[house];
    eachHouseArray.forEach(addHouseNameToEachStudent);
}

function addHouseNameToEachStudent(fullName) {
    let newStudentObject = Object.create(student);
    newStudentObject.splitName(fullName);
    newStudentObject.getHouse(eachHouse);
    students.push(newStudentObject);
}

/////////////////////////////////////
// part 1
function generateNewList() {
    const houseNameS = Object.keys(info);
    houseNameS.forEach(buildHouseArray);
    originalSingleList = students;
    //console.table(originalSingleList);
}
generateNewList();

// part 2: sort by firstName
console.table(students.sort()); // already working without function for the sort() !!! sort by first property by default???


/*
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
*/
/*
showPerson(); //fun the create function
console.table(students); //show them in tables 
*/

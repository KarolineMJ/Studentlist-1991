"use strict";

//empty array for pushing new content into
let allStudents = [];
let currentStudents = [];


//fetch students
function fetchStudents() {
    fetch("classlist.json")
        .then(result => result.json())
        .then(createList);

}

//create data and concatenate
function createList(data) {

    const nameValues = Object.values(data); //get names
    //console.log(nameValues);
    let myStudents = []; //global empty array for all the names
    nameValues.forEach(list => {
        myStudents = myStudents.concat(list); //concat names - function creates a list, and for each name value, concatenate the arrays into one array called allStudents
    });

    nameValues.forEach(person => {
        let temp = Object.create(studentTemp); //create an object which contains the studentTemp
        temp.splitName(person); //use temp to split name into first and last name (splitName function is inside studentTemp)

        //assign this student a unique id 
        //temp.id = "" + allStudents.length;

        temp.id = generateUUID();

        allStudents.push(temp); //pushes the new content into the empty array students.
    });
    currentStudents = allStudents;

    displayList(allStudents);

    console.table(allStudents);
}

//function that generates unique id 
//from: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/8809472#8809472
function generateUUID() { // Public Domain/MIT
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function deleteStudent(studentId) {
    //find the index of the student with the studentId
    //console.log("break here")
    const index = allStudents.findIndex(findStudentId);
    //console.log("Found index: " + index);

    allStudents.splice(index, 1);

    //function that returns true when student.id == studentId
    function findStudentId(student) {
        if (student.id === studentId) {
            return true;
        } else {
            return false;
        }
    }

};

function sortByFirstname() {
    //function that sorts by first name by seeing if a (the first object) is smaller than b(the second object) (watch robot video)
    function byFirstName(a, b) {
        if (a.firstName < b.firstName) {
            //if value of a.firstName is smaller than value of b.firstName (in this case the value of the letter), then move the name up (value of letters is smallest at A and biggest at Z)
            return -1; //means move it up
        } else {
            return 1; //means move it down
        }
    }

    allStudents.sort(byFirstName);

}


function sortByMiddlename() {
    function byMiddleName(a, b) {
        if (a.middleName < b.middleName) {
            return -1;
        } else {
            return 1;
        }
    }
    allStudents.sort(byMiddleName);


}

function sortByLastname() {
    //function that sorts by last name by seeing if a (the first object) is smaller than b(the second object) (watch robot video)
    function byLastName(a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        } else {
            return 1;
        }
    }
    allStudents.sort(byLastName);
}


//call the function fetchStudents
fetchStudents();

//Student template
const studentTemp = {
    firstName: "", //insert first name
    middleName: "", //insert middle name
    lastName: "", //insert last name
    toString() {
        //converts to string and adds the objects of what it is running through
        return this.firstName + " " + this.middleName + " " + this.lastName;
    },
    splitName(fullName) {
        //splits the name into first and last
        const firstSpace = fullName.indexOf(" ");
        const lastSpace = fullName.lastIndexOf(" ");
        this.firstName = fullName.substring(0, firstSpace);
        this.middleName = fullName.substring(firstSpace + 1, lastSpace);
        this.lastName = fullName.substring(lastSpace + 1);
    }
};

"use strict";

let students = [];

function fetchStudents() {
    fetch("classlist.json")
        .then(result => result.json())
        .then(createList);


}

function createList(data) {
    const nameValues = Object.values(data);
    console.log(nameValues);
    let allStudents = []; //global empty array for all the names
    nameValues.forEach(list => {
        allStudents = allStudents.concat(list);
    });

    nameValues.forEach(person => {
        let temp = Object.create(studentTemp); //create an object which contains the studentTemp
        temp.splitName(person); //use temp to split name into first and last name (splitName function is inside studentTemp)
        students.push(temp); //pushes the new content into the empty array students.
    });


    //start method sort and function show to sort and display students by first and last name
    const byFirstName = students.sort(sortByFirstName); //sort students by first name
    show(byFirstName, "#first"); //run function show(), which displays the sorted list by first name
    console.table(byFirstName);

    const byLastName = students.sort(sortByLastName); //sort students by last name
    show(byLastName, "#last"); //run function show(), which displays the sorted list by last name
    console.table(byLastName);


}


//function that sorts by first name by seeing if a (the first object) is smaller than b(the second object) (watch robot video)
function sortByFirstName(a, b) {
    if (a.firstName < b.firstName) {
        //if value of a.firstName is smaller than value of b.firstName (in this case the value of the letter), then move the name up (value of letters is smallest at A and biggest at Z)
        return -1; //means move it up
    } else {
        return 1; //means move it down
    }
}

//function that sorts by last name by seeing if a (the first object) is smaller than b(the second object) (watch robot video)
function sortByLastName(a, b) {
    if (a.lastName < b.lastName) {
        return -1;
    } else {
        return 1;
    }
}

//function that shows the data in the html. Selector is replaced with id from html 
function show(data, selector) {
    data.forEach(person => {
        const li = document.createElement("li"); //creates listed items for each of the persons
        li.textContent = person; //adds text content from person into the li (the names and house)
        document.querySelector(selector).appendChild(li); //append the data into #first and #last in html
    });
}

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
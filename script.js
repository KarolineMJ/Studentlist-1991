"use strict";

//empty array for pushing new content into
let allStudents = [];
let currentStudents = [];

//fetch students
function fetchStudents() {
    fetch("classlist.json")
        .then(result => result.json())
        .then(createList);

    //displayList(students);
}

//create data and concatenate
function createList(data) {

    const nameValues = Object.values(data); //get names
    console.log(nameValues);
    let myStudents = []; //global empty array for all the names
    nameValues.forEach(list => {
        myStudents = myStudents.concat(list); //concat names - function creates a list, and for each name value, concatenate the arrays into one array called allStudents
    });

    const houses = Object.keys(data); //get houses (keys)
    console.log(houses);

    //looping through the students and houses and pushes it into an empty array
    houses.forEach((house, index) => {
        //loop through the keys(houses), ask jonas what happens
        nameValues[index].forEach(person => {
            let temp = Object.create(studentTemp); //create an object which contains the studentTemp
            temp.splitName(person); //use temp to split name into first and last name (splitName function is inside studentTemp)
            temp.houseName = house; //by using the keys, assign house name to temp

            allStudents.push(temp); //pushes the new content into the empty array students.

        });
    });


    currentStudents = allStudents;
    /*

    //start method sort and function show to sort and display students by first and last name
    const byFirstName = students.sort(sortByFirstName); //sort students by first name
    show(byFirstName, "#first"); //run function show(), which displays the sorted list by first name
    console.table(byFirstName);
    const byLastName = students.sort(sortByLastName); //sort students by last name
    show(byLastName, "#last"); //run function show(), which displays the sorted list by last name
    console.table(byLastName);
        */

    const byHouseName = allStudents.sort(byHouseAndFirstName);
    console.table(byHouseName);
}

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

//function that shows the data in the html. Selector is replaced with id from html (look at line 46 and 48)
function show(data, selector) {
    data.forEach(person => {
        const li = document.createElement("li"); //creates listed items for each of the persons
        li.textContent = person; //adds text content from person into the li (the names and house)
        document.querySelector(selector).appendChild(li); //append the data into #first and #last in html
    });
}

function byHouseAndFirstName(a, b) {
    if (a.houseName < b.houseName) {
        return -1;
    } else if (a.houseName > b.houseName) {
        return 1;
    } else {
        if (a.firstName < b.firstName) {
            return -1;
        } else {
            return 1;
        }
    }
}

function filterByHouse(houses) {
    const filteredStudents = allStudents.filter(byHouse);

    function byHouse(students) {
        if (students.houseName === houses) {
            return true;
        } else {
            return false;
        }
    }
    return filteredStudents;
}

//call the function fetchStudents
fetchStudents();

//Student template
const studentTemp = {
    firstName: "", //insert first name
    lastName: "", //insert last name
    houseName: "", //insert house name
    toString() {
        //converts to string and adds the objects of what it is running through
        return this.firstName + " " + this.lastName + " from " + this.houseName;
    },
    splitName(fullName) {
        //splits the name into first and last
        const firstSpace = fullName.indexOf(" ");
        this.firstName = fullName.substring(0, firstSpace);
        this.lastName = fullName.substring(firstSpace + 1);
    }
};

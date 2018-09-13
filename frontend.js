"use strict";

window.addEventListener("DOMContentLoaded", initFrontend);

function initFrontend() {
    console.log("frontend is working");

    //register buttons for sort 
    document.querySelector("button#sort_first").addEventListener("click", clickedSortFirstname);

    document.querySelector("button#sort_last").addEventListener("click", clickedSortLastname);

    document.querySelector("button#sort_house").addEventListener("click", clickedSortHousename);

    //register button for filters

    document.querySelectorAll("#filters a").forEach(element => element.addEventListener("click", clickedFilter));
}

function clickedSortFirstname() {
    console.log("clickSortFirstname");
    sortByFirstname();
    displayList(currentStudents);
}
function clickedSortLastname() {
    console.log("clickSortLastname");
    sortByLastname();
    displayList(currentStudents);
}
function clickedSortHousename() {
    console.log("clickSortHousename");
    sortByHousename();
    displayList(currentStudents);
}

function clickedFilter(event) {
    console.log("clickedFilter");
    const filter = this.dataset.filter; //references to data-filter - 
    console.log(filter);
    event.preventDefault; //prevent jumping to the top again 

    if (filter === "all") {
        currentStudents = allStudents;
        displayList(currentStudents);
    }
    else {
        currentStudents = filterByHouse(filter);
        displayList(currentStudents);
    }

}


//find a place to display it
function displayList(listOfStudents) {

    document.querySelector("table#studentList tbody").innerHTML = ""; //clears the table for content, before setting the things inside 

    //foreach studnt in listOfStudents 
    listOfStudents.forEach(function (student) {
        const clone = document.querySelector("#studentTemp").content.cloneNode(true);

        //fill with data
        clone.querySelector("[data-firstname]").textContent = student.firstName;
        clone.querySelector("[data-lastname]").textContent = student.lastName;
        clone.querySelector("[data-housename]").textContent = student.houseName;

        // append clone to table 
        document.querySelector("table#studentList tbody").appendChild(clone);
    });
}


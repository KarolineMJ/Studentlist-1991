"use strict";

window.addEventListener("DOMContentLoaded", initFrontend);

function initFrontend() {
    console.log("frontend is working");

    //register buttons for sort 
    document.querySelector("button#sort_first").addEventListener("click", clickedSortFirstname);

    document.querySelector("button#sort_middle").addEventListener("click", clickedSortMiddlename);

    document.querySelector("button#sort_last").addEventListener("click", clickedSortLastname);

}

function clickedSortFirstname() {
    console.log("clickSortFirstname");
    sortByFirstname();
    displayList(currentStudents);
}

function clickedSortMiddlename() {
    console.log("clickSortMiddlename");
    sortByMiddlename();
    displayList(currentStudents);
}

function clickedSortLastname() {
    console.log("clickSortLastname");
    sortByLastname();
    displayList(currentStudents);
}



//find a place to display it
function displayList(listOfStudents) {

    document.querySelector("table#studentList tbody").innerHTML = ""; //clears the table for content, before setting the things inside 

    //foreach studnt in listOfStudents 
    listOfStudents.forEach(function (student) {
        const clone = document.querySelector("#studentTemp").content.cloneNode(true);

        //fill with data
        clone.querySelector("[data-firstname]").textContent = student.firstName;
        clone.querySelector("[data-middlename]").textContent = student.middleName;
        clone.querySelector("[data-lastname]").textContent = student.lastName;


        // append clone to table 
        document.querySelector("table#studentList tbody").appendChild(clone);
    });
}


"use strict";

window.addEventListener("DOMContentLoaded", initFrontend);

function initFrontend() {
    //console.log("frontend is working");

    //register buttons for sort 
    document.querySelector("button#sort_first").addEventListener("click", clickedSortFirstname);

    document.querySelector("button#sort_middle").addEventListener("click", clickedSortMiddlename);

    document.querySelector("button#sort_last").addEventListener("click", clickedSortLastname);

    document.querySelector("table#studentList").addEventListener("click", clickedTable);
}

function clickedTable(event) {
    //console.log("clicked table");
    //console.log(event.target);

    const clicked = event.target;
    //console.log(clicked.tagName);
    if (clicked.tagName === "BUTTON") {
        //note: when we have more buttons, check which kind was clicked(on class or something)
        if (clicked.classList.contains("delete-btn")) {
            clickedDelete(clicked);
        }

    };

}
function clickedDelete(deleteButton) {//deleteButton in this case is the same as event.target
    //console.log(deleteButton);

    //find the <tr> that has this deleteButton inside it
    let tr = deleteButton.parentElement;
    while (tr.tagName !== "TR") {
        tr = tr.parentElement;
    }

    //find the studentId
    const studentId = tr.dataset.studentId;
    //console.log(studentId);

    deleteStudent(studentId);

    //remove that <tr> 
    tr.remove();

};

function clickedSortFirstname() {
    //console.log("clickSortFirstname");
    sortByFirstname();
    displayList(currentStudents);
}

function clickedSortMiddlename() {
    //console.log("clickSortMiddlename");
    sortByMiddlename();
    displayList(currentStudents);
}

function clickedSortLastname() {
    //console.log("clickSortLastname");
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

        //add the studentId to the <tr>
        clone.querySelector("tr").dataset.studentId = student.id;


        // Get the modal
        const modal = document.querySelector('#myModal');

        // Get the button that opens the modal
        clone.querySelector(".information-btn").addEventListener("click", () => {
            console.log("btn clicked");
            modal.style.display = "block";

        });
        // When the user clicks on <span> (x), close the modal
        let closeBTN = document.querySelector(".close");
        closeBTN.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // append clone to table 
        document.querySelector("table#studentList tbody").appendChild(clone);
    });
}


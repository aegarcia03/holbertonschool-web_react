interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Angela",
    lastName: "Enriquez",
    age: 26,
    location: "Australia" 
    };
    
const student2: Student = {
    firstName: "Ana",
    lastName: "Garcia",
    age: 30,
    location: "Colombia"
    };

const studentList: Student[] = [student1, student2];
// Dynamically creates a HTML <table> element 
const table = document.createElement("table");
const headerRow = document.createElement("tr");

// Add headers with description required
const headers = ["First Name", "Location"];
// Iterates over the headers array to create and add a <th> element for each header text.
headers.forEach((headerText) => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    //  Adds the <th> element to the headerRow (table row) as a child.
    headerRow.appendChild(headerCell);
});

table.appendChild(headerRow);

//Add rows for each student
studentList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
});

// Append the table to the app container
document.getElementById("app")?.appendChild(table);
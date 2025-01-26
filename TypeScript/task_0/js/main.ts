interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "Angela",
    lastName: "Enriquez",
    age: 26,
    location: "Australia" 
    };
    
let student2: Student = {
    firstName: "Ana",
    lastName: "Garcia",
    age: 30,
    location: "Colombia"
    };

const studentList: Student[] = [student1, student2];

// Dynamically creates a HTML <table> element 
function renderTable(students: Student[]) {
    const table = document.createElement('table'); // Create a table element
    const header = table.createTHead(); // Create header for the table
    const headerRow = header.insertRow(); // Add header row

    // Add table headers
    const cell1 = headerRow.insertCell();
    cell1.textContent = "First Name";
    const cell2 = headerRow.insertCell();
    cell2.textContent = "Location";

    // Add table body
    const body = table.createTBody();

    // Add each student to the table
    students.forEach(student => {
        const row = body.insertRow();
        const cell1 = row.insertCell();
        cell1.textContent = student.firstName;  // Add first name
        const cell2 = row.insertCell();
        cell2.textContent = student.location; // Add location
    });

    document.body.appendChild(table); // Append table to body
}

// Call the function to render the table
renderTable(studentList);
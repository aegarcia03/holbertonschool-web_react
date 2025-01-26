var student1 = {
    firstName: "Angela",
    lastName: "Enriquez",
    age: 26,
    location: "Australia"
};
var student2 = {
    firstName: "Ana",
    lastName: "Garcia",
    age: 30,
    location: "Colombia"
};
var studentList = [student1, student2];
// Dynamically creates a HTML <table> element 
function renderTable(students) {
    var table = document.createElement('table'); // Create a table element
    var header = table.createTHead(); // Create header for the table
    var headerRow = header.insertRow(); // Add header row
    // Add table headers
    var cell1 = headerRow.insertCell();
    cell1.textContent = "First Name";
    var cell2 = headerRow.insertCell();
    cell2.textContent = "Location";
    // Add table body
    var body = table.createTBody();
    // Add each student to the table
    students.forEach(function (student) {
        var row = body.insertRow();
        var cell1 = row.insertCell();
        cell1.textContent = student.firstName; // Add first name
        var cell2 = row.insertCell();
        cell2.textContent = student.location; // Add location
    });
    document.body.appendChild(table); // Append table to body
}
// Call the function to render the table
renderTable(studentList);

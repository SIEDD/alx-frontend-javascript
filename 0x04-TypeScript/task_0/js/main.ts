// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 22,
    location: "Boston",
  };
  
  const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 24,
    location: "Chicago",
  };
  
  // Create an array containing the students
  const studentsList: Student[] = [student1, student2];
  
  // Create a table dynamically using Vanilla JavaScript
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  
  // Add table header
  const headerRow = document.createElement("tr");
  const headers = ["First Name", "Location"];
  headers.forEach((headerText) => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);
  
  // Populate table rows
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    // First Name Cell
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
  
    // Location Cell
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
  
    // Add row to table body
    tableBody.appendChild(row);
  });
  
  // Add the table body to the table
  table.appendChild(tableBody);
  
  // Append the table to the document body
  document.body.appendChild(table);
  

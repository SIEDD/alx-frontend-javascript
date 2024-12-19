interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Said",
    lastName: "Mohamed",
    age: 22,
    location: "Nairobi"
};

const student2: Student = {
    firstName: "Lionel",
    lastName: "Messi",
    age: 22,
    location: "Miami"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHeader = document.createElement('thead');
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
const headerLocation = document.createElement('th');

headerFirstName.textContent = 'First Name';
headerLocation.textContent = 'Location';

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);

const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});

table.appendChild(tableBody);

document.body.appendChild(table);


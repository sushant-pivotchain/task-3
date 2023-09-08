const jsonData = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    salary: 50000,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    email: "jane@example.com",
    salary: 60000,
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Johnson",
    age: 35,
    email: "bob@example.com",
    salary: 70000,
  },
  {
    id: 4,
    firstName: "Mary",
    lastName: "Williams",
    age: 40,
    email: "mary@example.com",
    salary: 80000,
  },
  {
    id: 5,
    firstName: "Mike",
    lastName: "Brown",
    age: 45,
    email: "mike@example.com",
    salary: 90000,
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",
    salary: 50000,
  },
  {
    id: 7,
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    email: "jane@example.com",
    salary: 60000,
  },
  {
    id: 8,
    firstName: "Bob",
    lastName: "Johnson",
    age: 35,
    email: "bob@example.com",
    salary: 70000,
  },
  {
    id: 9,
    firstName: "Mary",
    lastName: "Williams",
    age: 40,
    email: "mary@example.com",
    salary: 80000,
  },
  {
    id: 10,
    firstName: "Mike",
    lastName: "Brown",
    age: 45,
    email: "mike@example.com",
    salary: 90000,
  },
];


const itemsPerPage = 10;
let currentPage = 1;   

function populateTable(data) {
    const $tableBody = $('#data-table tbody');
    $tableBody.empty();

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = data.slice(startIndex, endIndex);

    $.each(pageData, function(index, person) {
        const $row = $('<tr>').appendTo($tableBody);
        $('<td>').text(person.id).appendTo($row);
        $('<td>').text(person.firstName).appendTo($row);
        $('<td>').text(person.lastName).appendTo($row);
        $('<td>').text(person.age).appendTo($row);
        $('<td>').text(person.email).appendTo($row);
        $('<td>').text(person.salary).appendTo($row);
        $('<td>').append('<input type="checkbox">').appendTo($row);
    });
}

populateTable(jsonData);




$(document).ready(function () {
  $('#data-table').DataTable({

    // Set the 1st column of the
    // DataTable to ascending order
    // and the 2nd to descending order
    order: [[0, 'asc'], [1, 'desc']]
  });
});



// Challenge 1: Student Scores
// 2D array with test scores for 3 students
const allScores = [
    [85, 92, 78],  // Student 1
    [88, 76, 95],  // Student 2
    [90, 89, 84]   // Student 3
];

// Log student scores
console.log("Student Scores:");
for (let i = 0; i < allScores.length; i++) {
    console.log(`Student ${i + 1}: ${allScores[i].join(", ")}`);
}

// Challenge 2: Build a Seating Grid
// 2D array representing theater seating (3 rows, 4 seats per row)
const theaterSeating = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"]
];

// Log theater seating
console.log("\nTheater Seating Arrangement:");
for (let i = 0; i < theaterSeating.length; i++) {
    console.log(`Row ${i + 1}: ${theaterSeating[i].join(", ")}`);
}

// Challenge 3: Multi-Dimensional Contact List
// 2D array with contact information
const contactsList = [
    ["Alice Johnson", "alice@email.com", "555-1234"],
    ["Bob Smith", "bob@email.com", "555-5678"]
];

// Log contacts
console.log("\nContact List:");
for (let i = 0; i < contactsList.length; i++) {
    console.log(`Name: ${contactsList[i][0]}, Email: ${contactsList[i][1]}, Phone: ${contactsList[i][2]}`);
}

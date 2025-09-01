// ===============================
// Part 1: JavaScript Basics
// ===============================

// Prompt the user for name and year of study
let studentName = prompt("Enter your name:");
let year = parseInt(prompt("Enter your year of study (1-4):"));

// Use condition to check senior/junior
if (year >= 3) {
  document.getElementById("greeting").textContent =
    "Hello, " + studentName + "! You are a senior student.";
} else {
  document.getElementById("greeting").textContent =
    "Hello, " + studentName + "! You are a junior student.";
}

// ===============================
// Part 2: Functions
// ===============================

// Function to calculate GPA average
function calculateGPA(grades) {
  let sum = 0;
  for (let g of grades) {
    sum += g;
  }
  return (sum / grades.length).toFixed(2);
}

// Function to format faculty info
function facultyInfo(name, dept) {
  return "Professor " + name + " belongs to the " + dept + " Department.";
}

// Log function outputs in console
console.log(facultyInfo("Smith", "Software Engineering"));
console.log("Average GPA: " + calculateGPA([3.5, 3.8, 4.0, 3.2]));

// ===============================
// Part 3: Loops
// ===============================

// Loop 1: Display available courses
let courses = ["Web Development", "Data Structures", "Databases", "AI Basics"];
let listOutput = document.getElementById("listOutput");

for (let i = 0; i < courses.length; i++) {
  let li = document.createElement("li");
  li.textContent = courses[i];
  listOutput.appendChild(li);
}

// Loop 2: Exam countdown (weeks)
let countdown = document.getElementById("countdown");
let weeks = 5;

while (weeks > 0) {
  countdown.textContent += weeks + " weeks left | ";
  weeks--;
}

// ===============================
// Part 4: DOM Manipulation
// ===============================

// 1. Event listener to show alert
document.getElementById("btnStart").addEventListener("click", function () {
  alert("Welcome to the Faculty of Computer Science!");
});

// 2. Update greeting dynamically after 3 seconds
setTimeout(function () {
  document.getElementById("greeting").textContent =
    "Keep exploring courses and faculty details!";
}, 3000);

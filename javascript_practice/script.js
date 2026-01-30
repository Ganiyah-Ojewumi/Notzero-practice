// 1. Student Result Checker

let score = -3;
if (score >= 70 && score <= 100) {
    console.log("Excellent");
} else if (score >= 60 && score <= 69) {
    console.log("Very Good");
} else if (score >= 50 && score <= 59) {
    console.log("Good");
} else if (score >= 0 && score < 50) {
    console.log("Fail");
} else {
    console.log("Invalid score.")
}

// 2. Age Category Checker

let age = 16;

if (age < 13) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult")
} else {
    console.log("Senior Citizen");
}

// 3. Class Attendance Tracker

let classAttendance = 5;
let totalLecture = 10;
let attendancePercentage = (classAttendance / totalLecture) * 100;

if (attendancePercentage >= 75) {
    console.log("Eligible for exam")
} else {
    console.log("Not eligible")
}

// 4. Simple Budget Checker

let allowanceFee = 70_000;
let amountSpent = 39_500;
let balance = allowanceFee - amountSpent;

if (balance < 0) {
    console.log("You have overspent.");
} else {
    console.log(`Balance left: $ ${balance}`);
}

// 5. Daily Expense Logger

// let totalAmount = 0;
// let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// for (let j = 0; j < daysOfTheWeek.length; j++){
//     let dailyAmount = Number(prompt(`How much did you spend on ${daysOfTheWeek[j]} ?`));
//     totalAmount += dailyAmount;
// }
// console.log(`Your total expense is : $ ${totalAmount}`);

// 6. Countdown Timer

// for (let i = 10; i > 0; i--) {
//     console.log(i)
//     if (i === 1) {
//         console.log("Time is up");
//     }
// }

// 7. Multiplication Table Generator

let myNumber = 7;

for (let i = 0; i < 13; i++) {
    console.log(`${myNumber} x ${i} = ${myNumber * i}`)
}

// 8. Greeting Function

function greeting (name) {
    console.log(`Welcome, ${name}!`);
}

greeting("Ganiyat");

// Electricity Bill calculator

function billCalculator (units) {
    if (units <= 50) {
        perUnit = 50;
        totalAmount = units * perUnit;
        return totalAmount;
    } else {
        perUnit = 75;
        totalAmount = units * perUnit;
        return totalAmount;
    }
}

console.log(`You total bill is $ ${billCalculator(4)}`);

// ATM withdrawal simulator

let accountBalance = 23_678;
let withdrawalAmount = 2_000;

if (withdrawalAmount <= accountBalance ) {
    accountBalance -= withdrawalAmount;
} else {
    console.log("Insufficient Funds")
}
console.log(`Current Account Balance : ${accountBalance}`);

let greet = document.querySelector(".greeting");
greet.textContent = "Hello Lola";
greet.style.backgroundColor = "red";

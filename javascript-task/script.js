
// Task 1------------------------------------

// let myName = "Paul";
// myName = "Ganiyat";
// const section = document.querySelector("section");
// const para = document.createElement("p");
// para.textContent = myName;
// section.appendChild(para)

// Task 2------------------------------------

// let myName = "Chris";
// let myAge = 10;
// const section = document.createElement("section");
// const para1 = document.createElement("p");
// const para2 = document.createElement("p");
// para1.textContent = myName;
// para2.textContent = `In 20 years, I will be ${myAge + 20}`;
// section.appendChild(para1);
// section.appendChild(para2);
// document.body.appendChild(section);

// Task 3---------------------------------------

// let season = "summer";
// let response;

// if (season === "summer") {
//     response = "We are currently in summer."
// } else if (season === "winter") {
//     response = "We are currently in winter."
// } else {
//     response = "We don't know what the season is."
// }

// const section = document.querySelector("section");
// const para1 = document.createElement("p");
// para1.textContent = response;
// section.appendChild(para1);

//Task 4--------------------------------------------

// let response;
// let score = 75;
// let machineActive = true;
// if (!machineActive) {
//     response = "Turn on the machine";
// } else {
//     if (score < 0 || score > 100) {
//         response = "This is not possible, an error has occurred.";
//     } else if (score >= 0 && score <= 19) {
//         response = "That was a terrible score — total fail!";
//     } else if (score >= 20 && score <= 39) {
//         response = "You know some things, but it's a pretty bad score. Need improvement.";
//     } else if (score >= 40 && score <= 69) {
//         response = "You did a passable job, not bad!";
//     } else if (score >= 70 && score <= 89) {
//         response = "That's a great score, you really know your stuff.";
//     } else {
//         response = "What an amazing score! Did you cheat? Are you for real?";
//     }
// }

// console.log(response)
// const section = document.createElement("section");
// const para1 = document.createElement("p");
// const para2 = document.createElement("p");
// para1.textContent = `Your score is ${score}`;
// para2.textContent = response;
// section.appendChild(para1)

// Task 5------------------------------------------

// const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];

// const list = document.createElement("ul");
// const section = document.createElement("section");
// section.appendChild(list);
// document.body.appendChild(section);

// for (let i = 0; i < myArray.length; i++) {
//     const listItem = document.createElement("li");
//     list.appendChild(listItem);
//     listItem.textContent = myArray[i];
// }

// Task 6---------------------------------------------

// const scores = [20, 15, 30, 25];

// function addArray (myArray) {
//     let total = 0;
//     for(let i = 0; i < myArray.length; i++) {
//         total += myArray[i]
//     }
//     return total;
// }
// console.log(`The total of all the numbers in the array is : ${addArray(scores)}`);

// Task 7 -------------------------------------------

// let score = 120;

// function gradeScore (score) {
//     if (score >= 0 && score < 50){
//         console.log("Fail.");
//     } else if (score >= 50 && score <= 100) {
//         console.log("Pass.");
//     } else {
//         console.log("You have entered an invalid score.");
//     }
// }
// gradeScore(score);

// Task 8 ----------------------------------------------

// const items = ["pen", "notebook", "eraser"];

// function listItems (myArray) {
//     for(let i = 0; i < myArray.length; i++) {
//         console.log(myArray[i]);
//     }
// }
// listItems(items);

// Taak 9 -------------------------------------------------

// let mins = 1;
// function minsConverter () {
//     let sec = mins * 60;
//     return sec;
// }
// console.log(`${mins} minute(s) is equivalent to ${minsConverter()} seconds.`)
// Array.length

const studentsPresent = ["Joy", "Tola", "Moyo","Adeyemi", "Titi"];
const numberOfStudentsPresent = studentsPresent.length;
console.log(`Total students present: ${numberOfStudentsPresent}`);
// console.log(studentsPresent.toString());
// console.log(studentsPresent.at(-2));
// console.log(studentsPresent.join(", "))
const found = studentsPresent.find((name) => name === "Tola");
console.log(found);

const grocery = [
  ["Rice", "Beans"],
  ["Milk", "Bread"],
  ["Eggs", "Butter"]
]

const groceryItems = grocery.flat();
console.log(groceryItems);

const states = [
    { name: "Oyo", index: 1, assigned: true },
    { name: "Ogun", index: 2, assigned: false },
    { name: "Lagos", index: 3, assigned: false },
    { name: "Delta", index: 4, assigned: true },
    { name: "Oyo", index: 45, assigned: true },
];

console.log(states.find((state) => state.name === "Oyo"));
const notAssignedState = states.filter((state) => state.assigned === false);

console.log(notAssignedState);

const myNameList = ["Aisha", "Tunde", "Mariam", "Sola"];
console.log(myNameList.some((name) => name === "Mariam"));

function displayer () {
  let myDate = new Date();
  const header = document.querySelector("h1");
  header.innerHTML = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
}

setInterval(displayer,1000);

let numbers = [1, 2, 3, 4, 5];

let something = (number, index, array) => {
  console.log(`Element ${number} is at index ${index} in array ${array}`);
}

numbers.forEach(something); 
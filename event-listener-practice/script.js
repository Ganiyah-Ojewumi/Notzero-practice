const heading = document.querySelector(".heading1");
const myButton = document.querySelector(".btn1");

myButton.addEventListener("click", () => {
    heading.style.color = "green";
})

const addButton = document.querySelector(".add-btn");
const subtractButton = document.querySelector(".subtract-btn");
const num = document.querySelector(".num");
let number = 0;
addButton.addEventListener("click", function () {
    number += 1;
    num.textContent = number;
})

subtractButton.addEventListener("click", function () {
    number -= 1;
    num.textContent = number;
})

const submitAssText = document.querySelector(".submitass-text");
const dblBtn = document.querySelector(".dbl-btn");

dblBtn.addEventListener("dblclick", () => {
    submitAssText.style.color = "red";
    submitAssText.style.fontWeight = "bold";
    submitAssText.style.fontSize = "20px";
})

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("mouseup", () => {
    btn2.style.backgroundColor = "red";
    btn2.style.color = "white";
})

const rightClick = document.querySelector(".right-click");
rightClick.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const displayText = document.querySelector(".display-text");
    displayText.textContent = "You just right clicked"
})

const myDiv1 = document.querySelector(".my-div1")
const viewDetails = document.createElement("p");

myDiv1.addEventListener("mouseenter", () => {
    myDiv1.appendChild(viewDetails);
    viewDetails.textContent = "you viewed this content";
    myDiv1.style.backgroundColor = "blue";
    viewDetails.style.display = "flex";
})

myDiv1.addEventListener("mouseleave", () => {
    viewDetails.style.display = "none";
    myDiv1.style.backgroundColor = "red";
})

// Form Input

const myInput = document.querySelector(".my-input");
// myInput.addEventListener("input", (event) => {
//     console.log(event.target.value);
// })


// myInput.addEventListener("keyup", (event) => {
//     const myText = event.target.value;
//     const inputDisplay = document.querySelector(".input-display");
//     inputDisplay.textContent = myText;

//     if (myText === "") {
//         inputDisplay.textContent = "No username yet"
//     }
// })

// myInput.addEventListener("keydown", (event) => {
//     const myText = event.target.value;
//     const inputDisplay = document.querySelector(".input-display");
//     inputDisplay.textContent = myText;
//     if (isNaN(event.key) === false) {
//         inputDisplay.textContent = "Warning";
//         event.preventDefault();
//     }
// })

// myInput.addEventListener("focus", () => {
//     myInput.style.border = "1px solid yellow";
// })

// myInput.addEventListener("blur", () => {
//     myInput.style.border = "1px solid blue"; 
// })

// myInput.addEventListener("change", (event) => {
//     const inputDisplay = document.querySelector(".input-display");
//     inputDisplay.textContent = "Email saved";
// })

// myInput.addEventListener("select", (event) => {
//     const inputDisplay = document.querySelector(".input-display");
//     const myText = event.target;
//     selectedText = myText.value.substring(myText.selectionStart, myText.selectionEnd);
//     inputDisplay.textContent = `You selected ${selectedText}`;
// })

// const myForm = document.querySelector(".my-form");
// myForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const formInput = myForm.querySelector(".my-input");
//     const inputDisplay = document.querySelector(".input-display");
//     const myText = formInput.value;
//     if (myText === "") {
//         inputDisplay.textContent = "Warning";
//     } else {
//         inputDisplay.textContent = "Form submitted successfully";
//     }
// })

const myDiv2 = document.querySelector(".my-div2");
myDiv2.style.backgroundColor = "green";

myDiv2.addEventListener("drag", () => {
 
})

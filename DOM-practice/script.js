function change() {
    const text = document.querySelector(".greet");
    text.classList.toggle('active')
}

const section = document.querySelector(".my-section");

const myList = document.createElement("ul");

section.appendChild(myList);

const fruits = ["mango", "banana", "apple", "orange", "pear"]

for (let fruit of fruits) {
    const List = document.createElement("li");
    myList.appendChild(List);
    List.textContent = fruit;
}

function bulbOff() {
    let bulb = document.querySelector(".myBulb");
    bulb.src = "./image/pic_bulboff.gif";
} 
function bulbOn() {
    let bulb = document.querySelector(".myBulb");
    bulb.src = "./image/bulbon.gif";
} 

const container = document.querySelector(".container");
container.innerHTML = `
<h1>Hello Everyone</h1>
<p>I hope you are having a lovely day.</p>`;
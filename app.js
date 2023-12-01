console.log("hello there!");

//gets anything with matching the string "body"
const body = document.querySelector("body");
console.log(body);

//gets anything matching the string "h1"
const h1 = document.querySelector("h1");
console.log(h1);

const h2 = document.querySelector("h2");
console.log(h2);

//changes the h2 textContent
const h2Text = document.querySelector("h2");
h2Text.textContent = "I changed this using JS";

const changeImage = document.querySelector("img");
changeImage.src = "./images/eclipse.jpg";

// points at the body (already declared above at line 6)
//const body = document.querySelector("body");

// creates a new paragraph element
const pNew = document.createElement("p");
// sets the content for our new p tag
pNew.textContent = "I'm a new paragraph YAY";

// adds the p tag to the end of the body
body.appendChild(pNew);

const h3 = document.querySelector("h3");

h3.remove();

// creates list
const ul = document.createElement("ul");

body.appendChild(ul);

const li = document.createElement("li");
li.textContent = "I am a li";
ul.appendChild(li);

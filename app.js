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

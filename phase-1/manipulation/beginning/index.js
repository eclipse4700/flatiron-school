/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`
// Document is an API that lets us interact (CRUD) with HTML!

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("#tomorrow"));
console.log(document.querySelector("#forever").textContent);


// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#forever").textContent = "Forever!!";

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#forever").remove();

// ~ Create + Append a node
// -> createElement(), append()
// 1. Create an Element
const pElement = document.createElement("p");
// 2. Modify the new element.
pElement.textContent = "On June 4, 2024";
// 3. Append the new element to existing element.
document.querySelector("#dates").append(pElement);

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
// 2. Replace the <strong> element with a newly created one.

function displayList(name, books){
const nameElement =  document.createElement("h2");
nameElement.textContent = name
const elementArray = document.createElement("ul");
elementArray.textContent = books;
document.querySelector("#dates").append(nameElement);
document.querySelector("#nameElement").append(elementArray);
}
const name = "Books"
const books = 

displayList();





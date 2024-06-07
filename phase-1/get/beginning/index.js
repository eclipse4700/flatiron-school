/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// A synchronous request to https://dog-api.kinduff.com/api/facts?number=1.
// Make a GET request for one dog fact.
fetch("https://dogapi.dog/api/v2/facts")
// Then, if that request was successful, take the JSON response and convert it into JavaScript
.then((response) => { return response.json() })
// Then if converting the reponse from JSON into JS was successful, use the JS in some way. 
.then((convertedResponse) => {
const fact = (convertedResponse.data[0].attributes.body);
const dogSpan = document.querySelector("#dog");
dogSpan.textContent = fact;
})

.catch(error => { console.error(error);});


// A synchronous request to https://anapioficeandfire.com/api/books.
fetch("https://anapioficeandfire.com/api/books")
.then((response) => {return response.json() })
.then((books) => {
    books.forEach((book) => {
        const bookLi = document.createElement("li");
        bookLi.textContent = book.name
        document.querySelector("#got").append(bookLi)
    });
})
.catch(error=> console.error(error));

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name){
    try {
        // Make a GET request for a Pokemon, and save it into `response`.
       const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
       // Convert the `response` into Javascript object, and save it in `pokemon`.
       const pokemon = await response.json()
       document.querySelector("#pokemon").textContent = pokemon.name;
       console.log(pokemon)

    } catch (error) {
        console.error(error);
    }

};

getPokemon("gengar");

// ~ Challenge: Make a GET request to an API of your choice!

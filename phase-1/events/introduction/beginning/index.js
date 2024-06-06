/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated April 24, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// ~ the "click" event
document.querySelector("#tomorrow").addEventListener("click",() => {
    // Here, we decided what should happen when the "click" event fires on #tomorrow.
    document.querySelector("#forever").textContent = "On June 5, 2024";
});



// ~ the "submit" event
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    // event === "submit"
    // event.target === <form>
    // event.target.date === <input name ="date">
    // event.target.date.value === 2024-06-27
    console.log(event.target.date.value);
    document.querySelector("#sometime").textContent = event.target.date.value;
});

// ~ challenges
// 1. [easy] Add another click event handler.



// 2. [medium] Add some non-click, non-submit event listener to the page.
// 3. [hard] Add an image, and a form with one text input to the page.
//    On submit, have the image change to the URL specified in the text input.
// 4. [bonus] Add an event handler to #today so that whenever some or all of its text is copied,
//    that text is set as the content of #sometime.
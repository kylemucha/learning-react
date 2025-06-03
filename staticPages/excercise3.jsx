/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
*/

const root = document.getElementById("root");
const originalElement = document.createElement("h1");
originalElement.setAttribute("class", "header");
originalElement.textContent = "This is an element made from Scratch";
root.appendChild(originalElement);
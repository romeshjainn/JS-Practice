// Targeting Elements
let idElement = document.getElementById("myElement"); // Gets the element with the ID "myElement"
let firstElement = document.querySelector(".mySelector"); // Gets the first element with the class "mySelector"

let tagElements = document.getElementsByTagName("div"); // Gets all <div> elements on the page
let classElements = document.getElementsByClassName("myClass"); // Gets all elements with the class name "myClass"
let allElements = document.querySelectorAll("p.myParagraph"); // Gets all <p> elements with class "myParagraph"

// Adding classes and id
idElement.className = "chirag";
idElement.classList.add("newClass");
idElement.classList.remove("newClass");
idElement.id = "newId";

// Styling Elements
firstElement.style.backgroundColor = "red";

// Changine InnerText
p.innerText = "new inner text";
p.innerHTML = "text here";
p.innerHTML = "<p>New <strong>HTML</strong> content</p>";

// Append as last child
main.append(child);
main.append(child, secondChild);

// Prepend as first child
myList.prepend(newListItem);

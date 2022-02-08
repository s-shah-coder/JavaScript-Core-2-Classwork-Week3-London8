/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/


// Task 1
// =======

// Write JavaScript below that console.logs:
//     1. all the "p" element nodes of the document,
//     --> should log a list of nodes with a length of 6

    // let pTag = document.querySelectorAll("p")
    // console.log(pTag)

    // // 2. the first div element node
    // // --> should log the ".site-header" node

    // let site = document.querySelector(".site-header")
    // console.log(site)

    // // 3. the element with id "jumbotronText"
    // // --> should log the "#jumbotronText" node

    // let jumboText = document.querySelector("#jumbotronText")
    // console.log(jumboText)

    // // 4. all the "p" elements of contained inside the .primary-content element node
    // // --> should log a list of nodes with a length of 3

    // console.log(document.querySelectorAll(".primary-content p"));





/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("#alertBtn")

alertButton.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
})
/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/
document.getElementById("bgrChangeBtn").addEventListener("click", () => {
  let backGroundColor = document.querySelector("body")
  backGroundColor.style.backgroundColor = 'red'

})


/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/
// document.getElementById("LargerLinksBtn").addEventListener("clicks", () => {
//   let largerText = document.querySelectorAll("a")
//   largerText.fontSize.
// }


// Task 5
// ======

// When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
// Hint: the new paragraph should be appended to the element with id 'addArticle'.


// let newParagraph = document.createElement("p");

// newParagraph.innerText = "I was created in Javascript";

// let myDiv = document.querySelector("#addArticle");

// myDiv.appendChild(newParagraph);

// ---------------

let addArticleButton = document.querySelector("#addArticleButton");

addArticleButton.addEventListener("click", () => {
  // selects existing div
  let myDiv = document.querySelector("addArticle")

  // selected the input element
  let myInput = document.querySelector("addArticleInput")

  // gets the value of the input element (text inside it)
  let text = myInput.value;

  // creating a new paragraph element
  let newParagraph = document.createElement("p")

// assigns text of new paragraph to be the text of the input
  newParagraph.innerText = text;

  // insert the new paragraph inside the existing div
  myDiv.appendChild(newParagraph);
})

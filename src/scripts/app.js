const bookLibrary = [];
const showBookButton = document.querySelector(".new-book-button");
const bookFormContainer = document.querySelector(".book-form-container");

showBookButton.addEventListener("click", () => {
  fetch("./book-form.html")
    .then(response => response.text())
    .then(data => {
      bookFormContainer.innerHTML = data;
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

showBookButton.onclick = () => {
  const bookForm = './book-form.html';
  const bookFormContainer = document.getElementById("book-form-container");
  bookFormContainer.innerHTML = bookForm;
}

function Book(title, author, releaseYear, genre) {
  this.title = title;
  this.author = author;
  this.releaseYear = releaseYear;
  this.genre = genre;
}

function addBookToLibrary() {
  // create book const to store new book object
  const book = {};
  // get book info from the form
  const bookInfoForm = document.getElementById("book-info-form")
  // push to bookLibrary
  bookLibrary.push(book);
}

function getBook() {
  bookLibrary.pop();
}

function displayBooks() {
  // iterate through bookLibrary
  //   pop book
  //   display book
}

function displayBook(book) {
  // generate html to display book attrs
  const libContainer = document.getElementById("library-container");
  const bookContent = libContainer.appendChild(libContainer);
  // add as child to library container
}

function showBookForm() {
  // render the form to add title, etc
}

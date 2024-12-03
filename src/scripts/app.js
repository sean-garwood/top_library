const bookLibrary = [];
// FILE: scripts/app.js
document.addEventListener('DOMContentLoaded', () => {
  const newBookButton = document.querySelector('.new-book-button');
  const bookFormContainer = document.querySelector('.book-form-container');

  newBookButton.addEventListener('click', () => {
    fetch('book-form.html')
      .then(response => response.text())
      .then(data => {
        bookFormContainer.innerHTML = data;

        // Add event listener for form submission
        const bookForm = document.getElementById('book-form');
        bookForm.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevent the default form submission
          const newBook = makeBook();
          console.log(`${newBook} created`);
          addBookToLibrary(newBook);
          console.log(`${newBook} added to library`);
        });
      })
      .catch(error => console.error('Error loading the form:', error));
  });
});

function Book(title, author, releaseYear, genre) {
  this.title = title;
  this.author = author;
  this.releaseYear = releaseYear;
  this.genre = genre;
}

function addBookToLibrary(bookForm) {
  const book = makeBook(bookForm);
  bookLibrary.push(book);
}

function getBook() {
  bookLibrary.pop();
}

function makeBook() {
  // create book object from submitted book-info-form
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const releaseYear = document.getElementById("release-year").value;
  const genre = document.getElementById("genre").value;

  const book = new Book(title, author, releaseYear, genre);
  return book;
}

function displayBook(book) {
  const libContainer = document.getElementById("library-container");
  const bookInfoDiv = document.createElement("div");
  bookInfoDiv.classList.add("book-info-container");
  // generate html to display book attrs
  bookInfoDiv.innerHTML = `
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <p>${book.releaseYear}</p>
    <p>${book.genre}</p>
  `;
  libContainer.appendChild(bookInfoDiv);
}

function displayBooks() {
  for (let step = 0; step < bookLibrary.length; step++) {
    displayBook(bookLibrary[step]);
  }
}

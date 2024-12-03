const bookLibrary = [];
// FILE: scripts/app.js
document.addEventListener('DOMContentLoaded', () => {
  const newBookButton = document.querySelector('.new-book-button');
  const bookFormContainer = document.querySelector('.book-form-container');

  // TODO: event listener to remove books from library
  //   get a collection of all buttons with class remove-book-button
  //   add an event listener to each button


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
          // FIXME: displays all books in library, so duplicates are shown
          //   add a data attribute to each book-info-container to identify it
          displayBook(newBook);
          addEventListenersToRemoveBookButtons();
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

function makeBook() {
  // create book object from submitted book-info-form
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const releaseYear = document.getElementById("release-year").value;
  const genre = document.getElementById("genre").value;

  const book = new Book(title, author, releaseYear, genre);
  return book;
}

function addBookToLibrary(bookForm) {
  const book = makeBook(bookForm);
  bookLibrary.push(book);
}

function removeBookFromLibrary(book) {
  const bookIndex = bookLibrary.indexOf(book);
  bookLibrary[bookIndex] !== null && bookLibrary.splice(bookIndex, 1);
}

function displayBook(book) {
  const libContainer = document.getElementById("library-container");
  const bookInfoDiv = document.createElement("div");
  bookInfoDiv.classList.add("book-info-container");
  // generate html to display book attrs
  bookInfoDiv.innerHTML = `
    <h3>${book.title}</h3>
    <p>By ${book.author}</p>
    <p>Released ${book.releaseYear}</p>
    <p>Genre: ${book.genre}</p>
    <button class="remove-book-button">Remove</button>
  `;
  // add an attribute that uniquely identifies the book
  bookInfoDiv.setAttribute('data-index', bookLibrary.indexOf(book) + bookLibrary.length);
  libContainer.appendChild(bookInfoDiv);
}

function displayBooks() {
  for (let step = 0; step < bookLibrary.length; step++) {
    displayBook(bookLibrary[step]);
  }
}

function addEventListenersToRemoveBookButtons() {
  let removeBookButtons = document.getElementsByClassName('remove-book-button');
  for (let i = 0; i < removeBookButtons.length; i++) {
    removeBookButtons[i].addEventListener('click', () => {
      const bookIndex = removeBookButtons[i].parentNode.getAttribute('data-index');
      removeBookFromLibrary(bookLibrary[bookIndex]);
      removeBookButtons[i].parentNode.remove();
    });
  }
}

// FILE: modules/ui.js
import { getBookLibrary, removeBookFromLibrary } from './library.js';

export function displayBook(book) {
  const libContainer = document.getElementById("library-container");
  const bookInfoDiv = document.createElement("div");
  bookInfoDiv.classList.add("book-info-container");

  bookInfoDiv.innerHTML = `
    <h3>${book.title}</h3>
    <p>By ${book.author}</p>
    <p>Released ${book.releaseYear}</p>
    <p>Genre: ${book.genre}</p>
    <button class="remove-book-button">Remove</button>
  `;

  bookInfoDiv.setAttribute("data-index", getBookLibrary().indexOf(book));
  libContainer.appendChild(bookInfoDiv);
}

export function displayBooks() {
  const bookLibrary = getBookLibrary();
  bookLibrary.forEach(book => displayBook(book));
}

export function addEventListenersToRemoveBookButtons() {
  const removeBookButtons = document.getElementsByClassName("remove-book-button");
  Array.from(removeBookButtons).forEach(button => {
    button.addEventListener('click', () => {
      const bookIndex = button.parentNode.getAttribute("data-index");
      const bookLibrary = getBookLibrary();
      removeBookFromLibrary(bookLibrary[bookIndex]);
      button.parentNode.remove();
    });
  });
}

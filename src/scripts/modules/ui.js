// FILE: modules/ui.js
import { getBookLibrary, removeBookFromLibrary } from './library.js';

export function displayBook(book) {
  const libContainer = document.getElementById("library-container");
  const bookInfoDiv = document.createElement("div");
  const bookIndex = getBookLibrary().indexOf(book);
  bookInfoDiv.classList.add("book-info-container");

  bookInfoDiv.innerHTML = `
    <h3>${book.title}</h3>
    <p>By ${book.author}</p>
    <p>Released ${book.releaseYear}</p>
    <p>Genre: ${book.genre}</p>
    <button class="mark-as-read-btn">Mark as Read</button>
    <button class="remove-book-btn">Remove</button>
  `;

  bookInfoDiv.setAttribute("data-index", bookIndex);
  libContainer.appendChild(bookInfoDiv);
}

export function getNewestButtonOfClass(className) {
  const buttons = document.getElementsByClassName(className);
  return buttons[buttons.length - 1];
}

export function addEventListenerToRemoveBookButton() {
  const newestButton = getNewestButtonOfClass("remove-book-btn");
  newestButton.addEventListener('click', () => {
    const bookIndex = newestButton.parentNode.getAttribute("data-index");
    const bookLibrary = getBookLibrary();
    removeBookFromLibrary(bookLibrary[bookIndex]);
    newestButton.parentNode.remove();
  });
}

export function addEventListenerToMarkAsReadButton() {
  const newestButton = getNewestButtonOfClass("mark-as-read-btn");
  newestButton.addEventListener('click', () => {
    newestButton.parentNode.classList.toggle("read");
  });
}

export function addEventListenersToButtons() {
  addEventListenerToRemoveBookButton();
  addEventListenerToMarkAsReadButton();
}

// FILE: modules/ui.js
import { getBookLibrary, removeBookFromLibrary } from './library.js';

const libContainer = document.getElementById("library-container");

export function displayBooks() {
  clearLibraryContainer();
  const bookLibrary = getBookLibrary();
  bookLibrary.forEach(book => {
    displayBook(book);
  });
}

function addEventListenersToButtons(bookInfoDiv) {
  addEventListenerToRemoveBookButton(bookInfoDiv);
  addEventListenerToMarkAsReadButton(bookInfoDiv);
}

function addEventListenerToRemoveBookButton(bookInfoDiv) {
  const removeButton = bookInfoDiv.querySelector(".remove-book-btn");
  removeButton.addEventListener("click", () => {
    const bookIndex = bookInfoDiv.getAttribute("data-index");
    const book = getBookLibrary()[bookIndex];
    removeBookFromLibrary(book);
    bookInfoDiv.remove();
  });
}

function addEventListenerToMarkAsReadButton(bookInfoDiv) {
  const markAsReadButton = bookInfoDiv.querySelector(".mark-as-read-btn");
  markAsReadButton.addEventListener("click", () => {
    markAsReadButton.textContent = "Read";
    markAsReadButton.disabled = true;
    markAsReadButton.parentNode.classList.add("read");
  });
}

function bookInfoInnerHTML(book) {
  return `
    <h3>${book.title}</h3>
    <p>By ${book.author}</p>
    <p>Released ${book.releaseYear}</p>
    <p>Genre: ${book.genre}</p>
    <button class="mark-as-read-btn">Mark as Read</button>
    <button class="remove-book-btn">Remove</button>
  `
}

function buildBookDiv(book) {
  const bookInfoDiv = document.createElement("div");
  const bookIndex = getBookLibrary().indexOf(book);
  bookInfoDiv.classList.add("book-info-container");

  bookInfoDiv.innerHTML = bookInfoInnerHTML(book);
  bookInfoDiv.setAttribute("data-index", bookIndex);
  return bookInfoDiv;
}

function clearLibraryContainer() {
  libContainer.innerHTML = "";
}

function displayBook(book) {
  const bookInfoDiv = buildBookDiv(book);
  addEventListenersToButtons(bookInfoDiv);
  libContainer.appendChild(bookInfoDiv);
}

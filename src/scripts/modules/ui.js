import { getBookLibrary, removeBookFromLibrary } from "./library.js";

const libContainer = document.getElementById("library-container");

export function displayBooks() {
  libContainer.innerHTML = "";
  const bookLibrary = getBookLibrary();
  bookLibrary.forEach((book) => {
    displayBook(book);
  });
}

function addEventListenersToButtons(book, bookInfoDiv) {
  addEventListenerToRemoveBookButton(bookInfoDiv);
  addEventListenerToMarkAsReadButton(book, bookInfoDiv);
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

function addEventListenerToMarkAsReadButton(book, bookInfoDiv) {
  const markAsReadButton = bookInfoDiv.querySelector(".mark-as-read-btn");
  markAsReadButton.addEventListener("click", () => {
    markAsReadButton.textContent = `Mark as ${book.isRead ? "Unr" : "R"}ead`;
    bookInfoDiv.classList.toggle("read");
    book.isRead = !book.isRead;
    displayBooks();
  });
}

function bookInfoInnerHTML(book) {
  return `
    <h3>${book.title}</h3>
    <p>By ${book.author}</p>
    <p>Released ${book.releaseYear}</p>
    <p>Genre: ${book.genre}</p>
    <button class="mark-as-read-btn">Mark as ${
      book.isRead ? "Unread" : "Read"
    }</button>
    <button class="remove-book-btn">Remove</button>
  `;
}

function buildBookDiv(book) {
  const bookInfoDiv = document.createElement("div");
  const bookIndex = getBookLibrary().indexOf(book);
  bookInfoDiv.classList.add("book-info-container");
  book.isRead
    ? bookInfoDiv.classList.add("read")
    : bookInfoDiv.classList.remove("read");

  bookInfoDiv.innerHTML = bookInfoInnerHTML(book);
  bookInfoDiv.setAttribute("data-index", bookIndex);
  return bookInfoDiv;
}

function displayBook(book) {
  const bookInfoDiv = buildBookDiv(book);
  addEventListenersToButtons(book, bookInfoDiv);
  libContainer.appendChild(bookInfoDiv);
}

import { Book } from "../classes/Book.js";
import { displayBooks } from "./ui.js";

const storedLibrary = sessionStorage.getItem("bookLibrary") || "[]";
const bookLibrary = JSON.parse(storedLibrary);
displayBooks();

function addBookToLibrary(book) {
  bookLibrary.push(book);
}

function removeBookFromLibrary(book) {
  const bookIndex = bookLibrary.indexOf(book);
  if (bookIndex !== -1) {
    bookLibrary.splice(bookIndex, 1);
  }
  displayBooks();
}

function getBookLibrary() {
  return bookLibrary;
}

function makeBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const releaseYear = document.getElementById("release-year").value;
  const genre = document.getElementById("genre").value;
  const isRead = document.getElementById("is-read").value === "true";

  return new Book(title, author, releaseYear, genre, isRead);
}

export { addBookToLibrary, removeBookFromLibrary, getBookLibrary, makeBook };

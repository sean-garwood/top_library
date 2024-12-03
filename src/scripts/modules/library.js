// FILE: modules/library.js
import Book from './Book.js';
import { displayBooks } from './ui.js';

const bookLibrary = [];

export function addBookToLibrary(book) {
  bookLibrary.push(book);
}

export function removeBookFromLibrary(book) {
  const bookIndex = bookLibrary.indexOf(book);
  if (bookIndex !== -1) {
    bookLibrary.splice(bookIndex, 1);
  }
  displayBooks();
}

export function getBookLibrary() {
  return bookLibrary;
}

export function makeBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const releaseYear = document.getElementById("release-year").value;
  const genre = document.getElementById("genre").value;

  return new Book(title, author, releaseYear, genre);
}
